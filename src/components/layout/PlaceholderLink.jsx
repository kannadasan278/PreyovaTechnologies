export default function PlaceholderLink({ href = '#', disabled, className, children, ...rest }) {
  return (
    <a
      href={href}
      aria-disabled={disabled ? 'true' : undefined}
      className={className}
      onClick={(e) => e.preventDefault()}
      {...rest}
    >
      {children}
    </a>
  )
}
