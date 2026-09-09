"use client";
import useSWRInfinite from 'swr/infinite';

import useOnlineStatus from '@/lib/hooks/useOnlineStatus/useOnlineStatus';
import { fetcher } from '@/lib/hooks/useChanges/useChanges';
import { IChange } from '@/lib/models/Change';
import LoadingState from '@/components/organisms/LoadingState/LoadigState';
import OfflineState from '@/components/organisms/OfflineState/OfflineState';
import ApiErrorState from '@/components/organisms/ApiErrorState/ApiErrorState';
import All from '@/components/organisms/All/All';

const Page = () => {
  const isOnline = useOnlineStatus();
  const limit = 5;
  const { data, error, isLoading, setSize } = useSWRInfinite<IChange[]>(
    (pageIndex, previousPageData) => {
      if (previousPageData && previousPageData.length < limit) return null;
      const query = new URLSearchParams({
        limit: String(limit),
        skip: String(pageIndex * limit),
      });
      return isOnline ? `/api/changes/all?${query.toString()}` : null;
    },
    fetcher,
    { shouldRetryOnError: false }
  );
  const changes = data
    ? data.flat().filter(
        (item, index, array) =>
          array.findIndex((candidate) => candidate._id === item._id) === index
      )
    : null;

  if (error) {
    return <ApiErrorState />;
  }

  if (!isOnline) {
    return <OfflineState />;
  }

  if (isLoading || !changes) {
    return (
      <div className="flex flex-col justify-center items-center gap-4 w-full ">
        <LoadingState />
      </div>
    );
  }

  return (
    <All
      changes={changes}
      limit={limit}
      onLoadMore={() => void setSize((currentSize) => currentSize + 1)}
    />
  );
};

export default Page;