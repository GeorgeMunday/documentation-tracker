import React from 'react'

import Text from '@/components/atoms/Text/Text';

const MongoMessage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 py-4 w-full">      
        <Text size="lg" weight="bold" color="black">
            MongoDB Documentation Tracker
        </Text>
        <Text size="md" weight="normal" color="gray-500">
            MongoDB version: 6.0.6 MongoDB Docs: https://www.mongodb.com/docs
        </Text>
    </div>
  )
}

export default MongoMessage