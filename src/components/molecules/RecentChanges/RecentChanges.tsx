import ItemBox from '@/components/atoms/ItemBox/ItemBox';
import { IChange } from '@/lib/models/Change';
import { useState } from 'react';

type RecentChangesProps = {
  changes: IChange[] | null;
};

const RecentChanges = ({ changes }: RecentChangesProps) => {
  return (
    <div className="flex w-full flex-col items-center gap-4 p-2 sm:p-4">
      <div className="flex w-full justify-center">
      </div>

      <div className="flex w-full flex-col gap-3">
        {changes?.map((change, index) => (
          <ItemBox
            key={index}
            title={change.title}
            description={change.description}
            timestamp={change.date.toString()}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentChanges;