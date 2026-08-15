"use client";
import {useState, useEffect} from 'react'

import Next from '@/components/organisms/Next/Next'

import useOnlineStatus from '@/lib/hooks/useOnlineStatus/useOnlineStatus';
import { apiRequest } from '@/lib/hooks/useApi/useApi';
import { IChange } from '@/lib/models/Change';

const Page = () => {
  const isOnline = useOnlineStatus();
  const [changes, setChanges] = useState<IChange[] | null>(null);

    useEffect(() => {
    if (!isOnline) {
      return;
    }

    async function fetchChanges() {
      const { data, error } = await apiRequest<IChange[]>('/api/changes/next', {
        method: 'GET',
      });

      if (error) {
        console.warn('Changes sync unavailable:', error);
        return;
      }

      console.log('Changes sync status:', data);
      return setChanges(data);
    }

    fetchChanges();
  }, [isOnline]);

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