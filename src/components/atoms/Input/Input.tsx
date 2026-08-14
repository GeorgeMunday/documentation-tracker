import React from 'react'

type InputProps = {
  name: string
  type: string
  placeholder?: string
  required?: boolean
  search?: boolean
}

const Input = ({ name, type, placeholder, required, search }: InputProps) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      className={`${search ? 'px-10' : 'px-4'} py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black w-fit`}
    />
  )
}

export default Input