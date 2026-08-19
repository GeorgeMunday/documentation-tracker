"use client";
import React, { useState, useEffect } from 'react';

import Home from '@/components/organisms/Home/Home';

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
      const { data, error } = await apiRequest<IChange[]>('/api/changes/all', {
        method: 'GET',
      });

      if (error) {
        setLoading(false);
        setChanges(null);
        setError(true);
        return;
      }

      setChanges(data ?? null);
      setLoading(false);
      setError(false);
    }

    fetchChanges();
  }, [isOnline]);

  if (error) {
    return <ApiErrorState />;
  }

  if (!isOnline) {
    return <OfflineState />;
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