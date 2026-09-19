'use client'

import React from 'react';
import Button from '@/components/atoms/Button/Button';
import Text from "../../atoms/Text/Text";
import Input from "../../atoms/Input/Input";
import { FaCheck } from 'react-icons/fa6';







type VerifyEmailProps = {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  message?: string;
  isError?: boolean;
};

const VerifyEmail = ({ onSubmit, message, isError = false }: VerifyEmailProps) => {

  return (
        <form onSubmit={onSubmit} className="flex w-full flex-col items-center gap-4 p-2 sm:p-4">
        <Text size="lg" color="black">Enter your email to verify your subscription:</Text>
        <div className="flex w-full max-w-md items-center gap-2">
          <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              required
          />
          <Button type="submit" variant="icon" ariaLabel="Verify subscription" title="Verify subscription">
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

export default VerifyEmail