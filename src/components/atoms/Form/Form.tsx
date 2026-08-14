import React from 'react'

type FormProps = {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
  children: React.ReactNode
}

const Form = ({ onSubmit, children }: FormProps) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      {children}
    </form>
  )
}

export default Form