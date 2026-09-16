import React from 'react'
import Link from 'next/link'

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'tertiary' | 'icon'
  href?: string
  ariaLabel?: string
  title?: string
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({ children, onClick, disabled, variant, href, ariaLabel, title, type = 'button' }: ButtonProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-transparent text-green-500 hover:underline w-fit flex items-center justify-center text-sm'
      case 'secondary':
        return 'bg-gray-200 text-gray-800 hover:bg-gray-300 w-fit'
      case 'tertiary':
        return 'bg-transparent text-blue-500 hover:bg-blue-100 w-fit'
      case 'icon':
        return 'inline-flex w-fit items-center justify-center bg-transparent p-2 text-green-500'
      default:
        return 'bg-gray-200 text-gray-800 hover:bg-gray-300 w-fit'
    }
  }

  const className = `rounded-md px-4 py-2 font-medium transition-colors ${getVariantClasses()} ${disabled ? 'cursor-not-allowed opacity-50' : ''}`

  if (href) {
    return (
      <Link
        href={href}
        aria-label={ariaLabel}
        title={title}
        className={className}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      title={title}
    >
      {children}
    </button>
  )
}

export default Button