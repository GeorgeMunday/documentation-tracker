import React from 'react'
import { FiSearch } from "react-icons/fi";
import Input from '@/components/atoms/Input/Input';
import ItemBox from '@/components/atoms/ItemBox/ItemBox';
import { IChange } from '@/lib/models/Change';

interface RecentChangesProps {
  changes: IChange[] | null;
}

const RecentChanges = ({ changes }: RecentChangesProps) => {
  return (
    <div className="flex flex-col items-center w-full p-4">
      <div className="relative">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

        <Input
          name="search"
          type="text"
          placeholder="Search Recent Changes..."
          required
          search={true}
        />
      </div>
      {changes && changes.map((change, index) => (
        <ItemBox
          key={index}
          title={change.title}
          description={change.description}
          timestamp={change.date.toString()}
        />
      ))}
    </div>
  )
}

export default RecentChanges