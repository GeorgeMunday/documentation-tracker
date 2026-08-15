"use client";
import {useState, useEffect} from 'react'

import Next from '@/components/organisms/Next/Next'

import useOnlineStatus from '@/lib/hooks/useOnlineStatus/useOnlineStatus';
import { apiRequest } from '@/lib/hooks/useApi/useApi';
import { IChange } from '@/lib/models/Change';
import LoadingState from '@/components/organisms/LoadingState/LoadigState';

const Page = () => {
  const isOnline = useOnlineStatus();
  const [changes, setChanges] = useState<IChange[] | null>(null);
  const [loading, setLoading] = useState(true);

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
        console.warn('Changes sync unavailable:', error);
        setLoading(false);
        return;
      }

      setLoading(false);
      return setChanges(data);
    }

    fetchChanges();
  }, [isOnline]);

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
    return <>you are offline</>;
  }
}

export default Page