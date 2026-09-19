"use client"

import Subscribe from '@/components/organisms/Subscribe/Subscribe'
import useSubscribe from '@/lib/hooks/useSubscribe/useSubscribe'

const Page = () => {
  const subscription = useSubscribe()

  return (
    <div>
        <Subscribe
          {...subscription}
        />
    </div>
  )
}

export default Page