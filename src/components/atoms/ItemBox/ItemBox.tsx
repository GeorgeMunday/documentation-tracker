import React from 'react';
import Text from '@/components/atoms/Text/Text';

type ItemBoxProps = {
  title?: string;
  description?: string;
  timestamp?: string;
};

const ItemBox = ({ title, description, timestamp }: ItemBoxProps) => {
  return (
    <div className="mt-2 w-full rounded-lg border border-gray-200 bg-white p-3 sm:p-4">
      <div className="flex w-full flex-col items-start justify-start gap-2 break-words">
        <Text size="xl" weight="bold" color="black">
          {title || '1. sample text'}
        </Text>
        <Text size="md" weight="normal" color="black">
          {description || 'information about the change'}
        </Text>
        <Text size="sm" weight="normal" color="gray-500">
          {timestamp || '2023-01-01 12:00:00'}
        </Text>
      </div>
    </div>
  );
};

export default ItemBox;