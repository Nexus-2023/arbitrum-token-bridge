import Link from 'next/link'

export function ExternalLink({
  children,
  href,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (!href) {
    return children
  }

  return (
    <Link href={href} rel="noopener noreferrer" {...props}>
      {children}
    </Link>
  )
}
