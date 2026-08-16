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
        return 'bg-green-500 text-white hover:bg-green-600 w-[48px] h-[42px] p-0 flex items-center justify-center'
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
      className={`rounded-md px-4 py-2 font-medium transition-colors ${getVariantClasses()} ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button