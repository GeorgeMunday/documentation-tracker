"use client";
import useOnlineStatus from '@/lib/hooks/useOnlineStatus/useOnlineStatus';
import { useChanges } from '@/lib/hooks/useChanges/useChanges';
import LoadingState from '@/components/organisms/LoadingState/LoadigState';
import OfflineState from '@/components/organisms/OfflineState/OfflineState';
import ApiErrorState from '@/components/organisms/ApiErrorState/ApiErrorState';
import Typescript from '@/components/organisms/Typescript/Typescript';

const Page = () => {
  const isOnline = useOnlineStatus();
  const { changes, loading, error } = useChanges('/api/changes/typescript', isOnline);

  if (error) {
    return <ApiErrorState />;
  }

  if (loading || !changes) {
      return (
        <div className="flex flex-col justify-center items-center gap-4 w-full ">
          <LoadingState />
        </div>
      );
  }

  if (isOnline) {
    return (
      <>
        <Typescript changes={changes} />
      </>
    )
  } else {
    return <OfflineState />;
  }
}

export default Page