"use client"
import Search from '@/components/organisms/Search/Search'
import { useEffect, useState } from 'react';
import { IChange } from '@/lib/models/Change';
import { apiRequest } from '@/lib/hooks/useApi/useApi';
import useOnlineStatus from '@/lib/hooks/useOnlineStatus/useOnlineStatus';
import LoadingState from '@/components/organisms/LoadingState/LoadigState';
import OfflineState from '@/components/organisms/OfflineState/OfflineState';
import ApiErrorState from '@/components/organisms/ApiErrorState/ApiErrorState';

const Page = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [submittedTerm, setSubmittedTerm] = useState('');
  const [changes, setChanges] = useState<IChange[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
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

      try {
        const { data, error } = await apiRequest<IChange[]>(url, {
          method: 'GET',
        });

        if (!isActive) return;

        if (error) {
          console.warn('Changes sync unavailable:', error);
          setChanges([]);
          setError(true);
          return;
        }

        setChanges(data ?? []);
        setError(false);
      } finally {
        if (isActive) setLoading(false);
      }
    };

    fetchChanges();

    return () => {
      isActive = false;
    };
  }, [submittedTerm, isOnline]);

  if (error) {
    return <ApiErrorState />;
  }

  if (!isOnline) {
    return <OfflineState />;
  }

  if (loading && !submittedTerm.trim()) {
    return <LoadingState />;
  }

  return (
    <Search
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      submittedTerm={submittedTerm}
      onSearch={() => setSubmittedTerm(searchTerm)}
      changes={changes}
      loading={loading && Boolean(submittedTerm.trim())}
    />
  );
};

export default Page;