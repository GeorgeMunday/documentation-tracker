"use client";
import Next from '@/components/organisms/Next/Next'
import useOnlineStatus from '@/lib/hooks/useOnlineStatus/useOnlineStatus';

const Page = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) {
    return (
      <>
        <Next />
      </>
    )
  } else {
    return <>you are offline</>;
  }
}

export default Page