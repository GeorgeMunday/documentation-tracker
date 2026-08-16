import Input from '@/components/atoms/Input/Input'
import { FiSearch } from 'react-icons/fi';
import React from 'react'

const SearchChange = () => {
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
          />
        </div>
      </div>
    </div>
  )
}

export default SearchChange