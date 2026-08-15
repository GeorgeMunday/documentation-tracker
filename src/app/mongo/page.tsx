"use client";
import Mongo from '@/components/organisms/Mongo/Mongo'
import useOnlineStatus from '@/lib/hooks/useOnlineStatus/useOnlineStatus';

const Page = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) {
    return (
      <>
        <Mongo />
      </>
    )
  } else {
    return <>you are offline</>;
  }
}

export default Page