import React from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import Button from '@/components/atoms/Button/Button';
import Text from '@/components/atoms/Text/Text';

type ItemBoxProps = {
  id?: string;
  title?: string;
  description?: string;
  timestamp?: string;
  index?: number;
  doctype?: string;
  link?: string;
};

const ItemBox = ({ id, title, index, link }: ItemBoxProps) => {

  return (
    <div className="mt-2 w-full rounded-lg border border-gray-200 bg-white p-3 sm:p-4">
      <div className="flex w-full flex-col items-start justify-start gap-2 break-words">
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2">
          {
            index !== undefined ? (<Text size="xl" weight="bold" color="gray-500">{index + 1}.</Text>) : <></>
          }
            <Text size="xl" weight="bold" color="black">
              {title || '1. sample text'}
            </Text>
          </div>
          {id && (
            <Button
              href={`/changes/${id}`}
              variant="icon"
              aria-label="View change details"
              title="View change details"
            >
              <FiArrowRight size={20} aria-hidden="true" />
            </Button>
          )}
        </div>

        {link && (
          <Link href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            <Text size="sm" color="green-500">
              {link}
            </Text>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ItemBox;