"use client";
import React, {useState, useEffect} from 'react'

import Mongo from '@/components/organisms/Mongo/Mongo'

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
      const { data, error } = await apiRequest<IChange[]>('/api/changes/mongo', {
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
        <Mongo changes={changes} />
      </>
    )
  } else {
    return <>you are offline</>;
  }
}

export default Page