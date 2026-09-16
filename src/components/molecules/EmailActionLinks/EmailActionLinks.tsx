import React from 'react'
import Button from '@/components/atoms/Button/Button'


const EmailActionLinks = () => {
  return (
    <div className="flex gap-2 cursor-pointer">
      <Button variant="primary">Verify your email</Button>
      <Button variant="primary">Unsubscribe</Button>
      <Button variant="primary">Send Now</Button>
    </div>
  )
}

export default EmailActionLinks