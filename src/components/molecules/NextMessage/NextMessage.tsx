import React from 'react'

import Text from '@/components/atoms/Text/Text';

const NextMessage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 py-4 w-full">      
        <Text size="lg" weight="bold" color="black">
            Next.js Documentation Tracker
        </Text>
        <Text size="md" weight="normal" color="gray-500">
            Next.js version: 13.4.12 Next.js Docs: https://nextjs.org/docs
        </Text>
    </div>
  )
}

export default NextMessage