"use client";
import {useState, useEffect} from 'react'

import Next from '@/components/organisms/Next/Next'

import useOnlineStatus from '@/lib/hooks/useOnlineStatus/useOnlineStatus';
import { apiRequest } from '@/lib/hooks/useApi/useApi';
import { IChange } from '@/lib/models/Change';
import LoadingState from '@/components/organisms/LoadingState/LoadigState';
import OfflineState from '@/components/organisms/OfflineState/OfflineState';
import ApiErrorState from '@/components/organisms/ApiErrorState/ApiErrorState';

const Page = () => {
  const isOnline = useOnlineStatus();
  const [changes, setChanges] = useState<IChange[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

    useEffect(() => {
    if (!isOnline) {
      return;
    }

    async function fetchChanges() {
      setLoading(true);
      const { data, error } = await apiRequest<IChange[]>('/api/changes/next', {
        method: 'GET',
      });

      if (error) {
        setLoading(false);
        setChanges(null);
        return;
      }

      setLoading(false);
      setError(false);
      return setChanges(data);
    }

    fetchChanges();
  }, [isOnline]);

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