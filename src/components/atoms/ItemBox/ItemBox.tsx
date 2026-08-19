import React from 'react';
import Text from '@/components/atoms/Text/Text';

type ItemBoxProps = {
  title?: string;
  description?: string;
  timestamp?: string;
  index?: number;
};

const ItemBox = ({ title, description, timestamp, index }: ItemBoxProps) => {
  return (
    <div className="mt-2 w-full rounded-lg border border-gray-200 bg-white p-3 sm:p-4">
      <div className="flex w-full flex-col items-start justify-start gap-2 break-words">
        <div className="flex w-fit items-center justify-between gap-2">
        <Text size="xl" weight="bold" color="black">
          {index !== undefined ? `${index + 1}` : ''}:
        </Text>
        <Text size="xl" weight="bold" color="black">
          {title || '1. sample text'}
        </Text>
        </div>
        <Text size="md" weight="normal" color="black">
          {description || 'information about the change'}
        </Text>
        {timestamp && (
          <Text size="sm" weight="normal" color="gray-500">
            {timestamp}
          </Text>
        )}
      </div>
    </div>
  );
};

export default ItemBox;