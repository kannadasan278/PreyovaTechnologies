import { useRef, useState } from 'react'

const API_CONFIG = {
  enabled: false,
  endpoint: '/api/contact',
}

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
    if (!API_CONFIG.enabled) {
      return new Promise((resolve) => {
        window.setTimeout(() => resolve({ ok: true }), 1200)
      })
    }
    return fetch(API_CONFIG.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).then((res) =>
      res.json().then((data) => {
        if (!res.ok || !data.ok) {
          throw new Error((data && data.message) || 'Submission failed')
        }
        return data
      }),
    )
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
