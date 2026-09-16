"use client";

import { useParams } from 'next/navigation';
import ChangeDetails from '@/components/organisms/ChangeDetails/ChangeDetails';
import ApiErrorState from '@/components/organisms/ApiErrorState/ApiErrorState';
import LoadingState from '@/components/organisms/LoadingState/LoadingState';
import OfflineState from '@/components/organisms/OfflineState/OfflineState';
import useOnlineStatus from '@/lib/hooks/useOnlineStatus/useOnlineStatus';
import { useChanges } from '@/lib/hooks/useChanges/useChanges';
import type { IChange } from '@/lib/models/Change';

const ChangeDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const isOnline = useOnlineStatus();
  const { changes: change, loading, error } = useChanges<IChange>(
    id ? `/api/changes/${id}` : null,
    isOnline
  );

  if (!isOnline) {
    return <OfflineState />;
  }

  if (error) {
    return <ApiErrorState />;
  }

  if (loading || !change) {
    return <LoadingState />;
  }

  return <ChangeDetails change={change} />;
};

export default ChangeDetailsPage;