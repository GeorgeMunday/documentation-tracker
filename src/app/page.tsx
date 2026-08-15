"use client";
import Home from '@/components/organisms/Home/Home';
import useOnlineStatus from '@/lib/hooks/useOnlineStatus/useOnlineStatus';
// import { apiRequest } from '@/lib/hooks/useApi/useApi';
// import { useEffect } from 'react';

export default function Page() {
  const isOnline = useOnlineStatus();

  // useEffect(() => {
  //   if (!isOnline) {
  //     return;
  //   }

  //   async function fetchChanges() {
  //     const { data, error } = await apiRequest('/api/changes/add', {
  //       method: 'POST',
  //     });

  //     if (error) {
  //       console.warn('Changes sync unavailable:', error);
  //       return;
  //     }

  //     console.log('Changes sync status:', data);
  //   }

  //   fetchChanges();
  // }, [isOnline]);

  if (isOnline) {
    return <Home />;
  }

  return <>you are offline</>;
}
