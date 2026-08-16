import Input from '@/components/atoms/Input/Input'
import Button from '@/components/atoms/Button/Button'
import { FiArrowUp, FiSearch } from 'react-icons/fi';
import React from 'react'
import { IChange } from '@/lib/models/Change';
import ItemBox from '@/components/atoms/ItemBox/ItemBox';

type SearchChangeProps = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  submittedTerm?: string;
  onSearch?: () => void;
  changes: IChange[] | null;
};

const SearchChange = ({ searchTerm, setSearchTerm, submittedTerm, onSearch, changes }: SearchChangeProps & { changes: IChange[] | null }) => {
  const hasChanges = Boolean(changes && changes.length > 0);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch?.();
  };

  return (
    <div className="flex w-full flex-col items-center gap-4 p-2 sm:p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-xl">
        <div className="flex items-stretch gap-3">
          <div className="relative w-full">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

            <Input
              name="search"
              type="text"
              placeholder="Search Recent Changes..."
              required
              search={true}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Button onClick={onSearch} variant="primary" aria-label="Search">
            <FiArrowUp className="h-7 w-7 text-2xl" />
          </Button>
        </div>
      </form>

      <div className="flex w-full flex-col gap-3">
        {hasChanges ? (
          changes?.map((change, index) => (
            <ItemBox
              key={`${change.title}-${index}`}
              title={change.title}
              description={change.description}
              timestamp={change.date.toString()}
            />
          ))
        ) : (
          <div>
            {submittedTerm ? `No results found for "${submittedTerm}".` : 'No changes available right now.'}
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchChange