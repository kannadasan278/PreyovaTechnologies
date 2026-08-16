import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const RECIPIENT_EMAIL = 'preyovatech@gmail.com'

const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
}

const ready = Boolean(EMAILJS_CONFIG.serviceId && EMAILJS_CONFIG.templateId && EMAILJS_CONFIG.publicKey)

function sanitize(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim())
}

function validatePhone(value) {
  const digits = value.replace(/[^\d]/g, '')
  return digits.length >= 7 && digits.length <= 15
}

export default function useContactForm() {
  const formRef = useRef(null)
  const successRef = useRef(null)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  function getValue(id) {
    const el = formRef.current && formRef.current.querySelector(`#${id}`)
    return el ? el.value.trim() : ''
  }

  function validateForm() {
    const name = getValue('cfName')
    const email = getValue('cfEmail')
    const phone = getValue('cfPhone')
    const service = getValue('cfService')
    const message = getValue('cfMessage')

    const nameOk = name.length >= 2
    const emailOk = validateEmail(email)
    const phoneOk = phone === '' || validatePhone(phone)
    const serviceOk = service !== ''
    const messageOk = message.length >= 10

    setErrors({
      cfName: !nameOk,
      cfEmail: !emailOk,
      cfPhone: !phoneOk,
      cfService: !serviceOk,
      cfMessage: !messageOk,
    })

    return nameOk && emailOk && phoneOk && serviceOk && messageOk
  }

  function buildPayload() {
    return {
      name: sanitize(getValue('cfName')),
      email: sanitize(getValue('cfEmail')),
      phone: sanitize(getValue('cfPhone')),
      company: sanitize(getValue('cfCompany')),
      service: sanitize(getValue('cfService')),
      budget: sanitize(getValue('cfBudget')),
      message: sanitize(getValue('cfMessage')),
      submittedAt: new Date().toISOString(),
    }
  }

  function submitEnquiry(payload) {
    if (ready) {
      return emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          to_email: RECIPIENT_EMAIL,
          from_name: payload.name,
          from_email: payload.email,
          phone: payload.phone,
          company: payload.company,
          service: payload.service,
          budget: payload.budget,
          message: payload.message,
          submitted_at: payload.submittedAt,
        },
        { publicKey: EMAILJS_CONFIG.publicKey },
      )
    }
    return new Promise((resolve) => {
      window.setTimeout(() => resolve({ ok: true }), 1200)
    })
  }

  async function onSubmit(event) {
    event.preventDefault()

    setSuccess(false)
    if (!validateForm()) {
      const firstInvalid = formRef.current && formRef.current.querySelector('.is-invalid')
      if (firstInvalid) firstInvalid.focus()
      return
    }

    const payload = buildPayload()
    setSubmitting(true)

    try {
      await submitEnquiry(payload)
      if (formRef.current) formRef.current.reset()
      setSuccess(true)
      if (successRef.current) {
        successRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    } catch (err) {
      console.error('Enquiry submission failed:', err)
      window.alert('Something went wrong while sending your enquiry. Please try again or email us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  function clearError(id) {
    setErrors((prev) => ({ ...prev, [id]: false }))
  }

  return { formRef, successRef, errors, submitting, success, onSubmit, clearError }
}
