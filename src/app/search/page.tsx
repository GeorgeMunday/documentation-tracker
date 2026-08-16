"use client"
import Search from '@/components/organisms/Search/Search'
import { useEffect, useState } from 'react';
import { IChange } from '@/lib/models/Change';
import { apiRequest } from '@/lib/hooks/useApi/useApi';
import useOnlineStatus from '@/lib/hooks/useOnlineStatus/useOnlineStatus';
import React from 'react';
import LoadingState from '@/components/organisms/LoadingState/LoadigState';

const Page = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [submittedTerm, setSubmittedTerm] = useState('');
  const [changes, setChanges] = useState<IChange[]>([]);
  const [loading, setLoading] = useState(false);
  const isOnline = useOnlineStatus();

  useEffect(() => {
    if (!isOnline) {
      return;
    }

    let isActive = true;

    const fetchChanges = async () => {
      setLoading(true);

      const query = encodeURIComponent(submittedTerm.trim());
      const url = query ? `/api/changes/search?query=${query}` : '/api/changes/all';

      const { data, error } = await apiRequest<IChange[]>(url, {
        method: 'GET',
      });

      if (!isActive) {
        return;
      }

      if (error) {
        console.warn('Changes sync unavailable:', error);
        setChanges([]);
        setLoading(false);
        return;
      }

      setChanges(data ?? []);
      setLoading(false);
    };

    fetchChanges();

    return () => {
      isActive = false;
    };
  }, [submittedTerm, isOnline]);

  if (!isOnline) {
    return <div className="p-6 text-center text-lg font-medium text-red-500">you are offline</div>;
  }

  if (loading) {
    return <LoadingState />;
  }

  return (
    <Search
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      submittedTerm={submittedTerm}
      onSearch={() => setSubmittedTerm(searchTerm)}
      changes={changes}
    />
  );
};

export default Page;