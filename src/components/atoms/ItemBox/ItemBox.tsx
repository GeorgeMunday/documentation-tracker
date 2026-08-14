import React from 'react'
import Text from '@/components/atoms/Text/Text';

type ItemBoxProps = {
    title?: string;
    description?: string;
    timestamp?: string;
};

const ItemBox = ({ title, description, timestamp }: ItemBoxProps) => {
  return (
    <div className="flex flex-col items-center justify-center mt-8 border border-gray-200 rounded-lg p-4 w-full">
        <div className="rounded-lg w-full flex flex-col items-start justify-start gap-2">
            <Text size="xl" weight="bold" color="black">
                {title || "1. sample text"}
            </Text>
            <Text size="md" weight="normal" color="black">
                {description || "information about the change"}
            </Text>
            <Text size="sm" weight="normal" color="gray-500">
                {timestamp || "2023-01-01 12:00:00"}
            </Text>
        </div>
    </div>
  )
}

export default ItemBox