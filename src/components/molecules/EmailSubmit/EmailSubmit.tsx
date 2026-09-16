import React from 'react'
import Text from '@/components/atoms/Text/Text'
import Input from '@/components/atoms/Input/Input'

const EmailSubmit = () => {
  return (
    <div className="flex w-full flex-col items-center gap-4 p-2 sm:p-4">
        <Text size="xl" color="black">Enter your email to recieve updates:</Text>            
        <Input
            name="email"
            type="email"
            placeholder="Enter your email"
            required
        />
        <Text size="sm" color="gray-500">We will send you updates about recent changes every month.</Text>
    </div>
  )
}

export default EmailSubmit