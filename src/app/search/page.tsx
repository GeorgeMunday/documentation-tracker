"use client"
import Search from '@/components/organisms/Search/Search'
import { useState } from 'react';
import useSWR from 'swr';
import { IChange } from '@/lib/models/Change';
import { fetcher } from '@/lib/hooks/useChanges/useChanges';
import useOnlineStatus from '@/lib/hooks/useOnlineStatus/useOnlineStatus';
import LoadingState from '@/components/organisms/LoadingState/LoadigState';
import OfflineState from '@/components/organisms/OfflineState/OfflineState';
import ApiErrorState from '@/components/organisms/ApiErrorState/ApiErrorState';

const Page = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [submittedTerm, setSubmittedTerm] = useState('');
  const isOnline = useOnlineStatus();
  const query = encodeURIComponent(submittedTerm.trim());
  const url = query ? `/api/changes/search?query=${query}` : '/api/changes/all';
  const { data, error, isLoading } = useSWR<IChange[]>(
    isOnline ? url : null,
    fetcher,
    { shouldRetryOnError: false }
  );
  const changes = data ?? [];

  if (error) {
    return <ApiErrorState />;
  }

  if (!isOnline) {
    return <OfflineState />;
  }

  if (isLoading && !submittedTerm.trim()) {
    return <LoadingState />;
  }

  return (
    <Search
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      submittedTerm={submittedTerm}
      onSearch={() => setSubmittedTerm(searchTerm)}
      changes={changes}
      loading={isLoading && Boolean(submittedTerm.trim())}
    />
  );
};

export default Page;