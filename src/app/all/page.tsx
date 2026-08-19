"use client";
import React, { useState, useEffect } from 'react';

import useOnlineStatus from '@/lib/hooks/useOnlineStatus/useOnlineStatus';
import { apiRequest } from '@/lib/hooks/useApi/useApi';
import { IChange } from '@/lib/models/Change';
import LoadingState from '@/components/organisms/LoadingState/LoadigState';
import OfflineState from '@/components/organisms/OfflineState/OfflineState';
import ApiErrorState from '@/components/organisms/ApiErrorState/ApiErrorState';
import All from '@/components/organisms/All/All';

const Page = () => {
  const isOnline = useOnlineStatus();
  const [changes, setChanges] = useState<IChange[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [limit] = useState(5);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    if (!isOnline) {
      return;
    }

    async function fetchChanges() {
      setLoading(true);
      const query = new URLSearchParams({
        limit: String(limit),
        skip: String(skip),
      });

      const { data, error } = await apiRequest<IChange[]>(`/api/changes/all?${query.toString()}`, {
        method: 'GET',
      });

      if (error) {
        setLoading(false);
        setChanges(null);
        setError(true);
        return;
      }

      setChanges((current) => {
        if (skip === 0) return data ?? null;
        const existing = current ?? [];
        const merged = [...existing, ...(data ?? [])];
        return merged.filter(
          (item, index, array) =>
            array.findIndex((candidate) => candidate._id === item._id) === index
        );
      });
      setLoading(false);
      setError(false);
    }

    fetchChanges();
  }, [isOnline, limit, skip]);

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

  return (
    <All
      changes={changes}
      limit={limit}
      setSkip={setSkip}
    />
  );
};

export default Page;