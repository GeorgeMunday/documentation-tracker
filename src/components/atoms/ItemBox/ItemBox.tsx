import React from 'react';
import Link from 'next/link';
import Text from '@/components/atoms/Text/Text';

type ItemBoxProps = {
  title?: string;
  description?: string;
  timestamp?: string;
  index?: number;
  doctype?: string;
  link?: string;
};

const changeLinks: Record<string, { label: string; documentation: string }> = {
  mongodb: {
    label: 'View all MongoDB changes',
    documentation: 'https://www.mongodb.com/products/updates',
  },
  nodejs: {
    label: 'View all Node.js changes',
    documentation: 'https://nodejs.org/en/blog/announcements/',
  },
  nextjs: {
    label: 'View all Next.js changes',
    documentation: 'https://nextjs.org/blog',
  },
  typescript: {
    label: 'View all TypeScript changes',
    documentation: 'https://devblogs.microsoft.com/typescript/',
  },
  tailwindcss: {
    label: 'View all Tailwind CSS changes',
    documentation: 'https://tailwindcss.com/blog',
  },
};

const ItemBox = ({ title, description, timestamp, index, doctype, link }: ItemBoxProps) => {
  const changeLink = doctype ? changeLinks[doctype.toLowerCase()] : undefined;

  return (
    <div className="mt-2 w-full rounded-lg border border-gray-200 bg-white p-3 sm:p-4">
      <div className="flex w-full flex-col items-start justify-start gap-2 break-words">
        <div className="flex w-fit items-center justify-between gap-2">
          {
            index !== undefined ? (<Text size="xl" weight="bold" color="black">{index + 1}</Text>) : <></>
          }
        <Text size="xl" weight="bold" color="black">
          {title || '1. sample text'}
        </Text>
        </div>
        <Text size="md" weight="normal" color="black">
          {description && description.length > 1000
            ? `${description.substring(0, 1000)}...`
            : description || 'information about the change'}
        </Text>
        {timestamp && (
          <Text size="sm" weight="normal" color="gray-500">
            {timestamp}
          </Text>
        )}

        {link && (
          <Link href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            <Text size="sm" color="green-500">
              {link}
            </Text>
          </Link>
        )}

        {changeLink && (
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <Link
              href={changeLink.documentation}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:underline"
            >
              See all {changeLink.label}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemBox;