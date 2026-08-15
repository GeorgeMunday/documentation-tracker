import React, { useState, useMemo } from 'react';
import { FiSearch } from 'react-icons/fi';
import Input from '@/components/atoms/Input/Input';
import ItemBox from '@/components/atoms/ItemBox/ItemBox';
import { IChange } from '@/lib/models/Change';

type RecentChangesProps = {
  changes: IChange[] | null;
};

const RecentChanges = ({ changes }: RecentChangesProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredChanges = useMemo(() => {
    if (!changes) return [];
    if (!searchTerm) return changes;

    const lowerSearchTerm = searchTerm.toLowerCase();
    return changes.filter((change) =>
      change.title.toLowerCase().includes(lowerSearchTerm)
    );
  }, [changes, searchTerm]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex w-full flex-col items-center gap-4 p-2 sm:p-4">
      <div className="flex w-full justify-center">
        <div className="relative w-full max-w-xl">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

          <Input
            name="search"
            type="text"
            placeholder="Search Recent Changes..."
            required
            search={true}
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className="flex w-full flex-col gap-3">
        {filteredChanges.map((change, index) => (
          <ItemBox
            key={index}
            title={change.title}
            description={change.description}
            timestamp={change.date.toString()}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentChanges;