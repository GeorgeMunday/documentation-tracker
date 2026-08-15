import React from 'react';
import Text from '@/components/atoms/Text/Text';

const WelcomeMessage = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-3 px-2 py-4 text-center sm:gap-4">
      <Text size="lg" weight="bold" color="black">
        Welcome Back to DocTracker!
      </Text>
      <Text size="md" weight="normal" color="gray-500">
        Your one-stop solution for tracking and managing your documentation.
      </Text>
    </div>
  );
};

export default WelcomeMessage;