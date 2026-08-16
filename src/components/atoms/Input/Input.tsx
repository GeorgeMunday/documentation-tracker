import React from 'react'

type InputProps = {
  name: string
  type: string
  placeholder?: string
  required?: boolean
  search?: boolean
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  readOnly?: boolean
}

const Input = ({ name, type, placeholder, required, search, value, onChange, readOnly }: InputProps) => {
  const hasValue = value !== undefined && value !== null

  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      value={hasValue ? value : ''}
      onChange={onChange}
      readOnly={readOnly ?? (!onChange && hasValue)}
      className={`${search ? 'px-10' : 'px-4'} w-full max-w-xl rounded-md border border-gray-300 py-2 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500`}
    />
  );
};

export default Input