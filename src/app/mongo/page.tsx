"use client";
import React, {useState, useEffect} from 'react'

import Mongo from '@/components/organisms/Mongo/Mongo'

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
      const { data, error } = await apiRequest<IChange[]>('/api/changes/mongo', {
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
        <div className="flex flex-col justify-center items-center gap-4 w-full ">
          <LoadingState />
        </div>
      );
  }

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