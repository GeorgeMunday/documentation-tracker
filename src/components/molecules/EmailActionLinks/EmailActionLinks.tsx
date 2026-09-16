import React from 'react'
import Button from '@/components/atoms/Button/Button'


const EmailActionLinks = () => {
  return (
    <div className="flex gap-2 cursor-pointer">
      <Button href="/verifyemail" variant="primary">Verify your email</Button>
      <Button href="/unsubscribe" variant="primary">Unsubscribe</Button>
      <Button href="/sendnow" variant="primary">Send Now</Button>
    </div>
  )
}

export default EmailActionLinks