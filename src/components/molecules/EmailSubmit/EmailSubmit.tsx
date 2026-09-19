'use client'

import React from 'react'
import Button from '@/components/atoms/Button/Button'
import Text from '@/components/atoms/Text/Text'
import Input from '@/components/atoms/Input/Input'
import { FaCheck } from 'react-icons/fa6';

type EmailSubmitProps = {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  message?: string;
  isError?: boolean;
};

const EmailSubmit = ({ onSubmit, message, isError = false }: EmailSubmitProps) => {

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col items-center gap-4 p-2 sm:p-4">
        <Text size="lg" color="black">Enter your email to subscribe:</Text>
        <div className="flex w-full max-w-md items-center gap-2">
          <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              required
          />
          <Button type="submit" variant="icon" ariaLabel="Subscribe" title="Subscribe">
            <FaCheck className="h-6 w-6 text-green-500" aria-hidden="true" />
          </Button>
        </div>
        <div className="text-center">
          <Text size="sm" color="gray-500">We will send you updates about recent changes every month.</Text>
        </div>
        {message && <p className={isError ? 'text-sm text-red-500' : 'text-sm text-green-600'}>{message}</p>}
    </form>
  )
}

export default EmailSubmit