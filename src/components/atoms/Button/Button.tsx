import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'tertiary'
}

const Button = ({ children, onClick, disabled, variant }: ButtonProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-500 text-white hover:bg-blue-600 w-fit'
      case 'secondary':
        return 'bg-gray-200 text-gray-800 hover:bg-gray-300 w-fit'
      case 'tertiary':
        return 'bg-transparent text-blue-500 hover:bg-blue-100 w-fit'
      default:
        return 'bg-gray-200 text-gray-800 hover:bg-gray-300 w-fit'
    }
  }

  return (
    <button
      className={`px-4 py-2 rounded-md ${getVariantClasses()} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button