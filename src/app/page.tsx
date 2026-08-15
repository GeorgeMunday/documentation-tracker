"use client";
import React, { useState, useEffect } from 'react';

import Home from '@/components/organisms/Home/Home';

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
      const { data, error } = await apiRequest<IChange[]>('/api/changes/all', {
        method: 'GET',
      });

      if (error) {
        console.warn('Changes sync unavailable:', error);
        setLoading(false);
        setChanges(null);
        return;
      }

      console.log('Changes sync status:', data);
      setChanges(data ?? null);
      setLoading(false);
    }

    fetchChanges();
  }, [isOnline]);

  if (!isOnline) {
    return <div>you are offline</div>;
  }

  if (loading || !changes) {
    return (
      <div className="flex flex-col justify-center items-center gap-4 w-full ">
        <LoadingState />
      </div>
    );
  }

  return <Home changes={changes} />;
};

export default Page;