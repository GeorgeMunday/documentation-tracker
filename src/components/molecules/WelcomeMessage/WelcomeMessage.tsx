import React from 'react'
import Text from '@/components/atoms/Text/Text';

const WelcomeMessage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 py-4 w-full">
      <Text size="lg" weight="bold" color="black">
        Welcome Back to DocTracker!
      </Text>
      <Text size="md" weight="normal" color="gray-500">
        Your one-stop solution for tracking and managing your documentation.
      </Text>
    </div>
  )
}

export default WelcomeMessage