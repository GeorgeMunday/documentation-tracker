"use client";

import Next from '@/components/organisms/Next/Next'

import useOnlineStatus from '@/lib/hooks/useOnlineStatus/useOnlineStatus';
import { useChanges } from '@/lib/hooks/useChanges/useChanges';
import LoadingState from '@/components/organisms/LoadingState/LoadigState';
import OfflineState from '@/components/organisms/OfflineState/OfflineState';
import ApiErrorState from '@/components/organisms/ApiErrorState/ApiErrorState';

const Page = () => {
  const isOnline = useOnlineStatus();
  const { changes, loading, error } = useChanges('/api/changes/next', isOnline);

  if (error) {
    return <ApiErrorState />;
  }

  if (loading || !changes) {
      return (
        <LoadingState/>
      );
  }

  if (isOnline) {
    return (
      <>
        <Next changes={changes} />
      </>
    )
  } else {
    return <OfflineState />;
  }
}

export default Page