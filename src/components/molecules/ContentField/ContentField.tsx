import React from 'react'

type ContentFieldProps = {

  children: React.ReactNode
}

const ContentField = ({ children }: ContentFieldProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 py-4 w-400 border-x border-gray-200">
      {children}
    </div>
  )
}

export default ContentField