'use client';

import { useState } from 'react';
import type { FormEvent, FormEventHandler } from 'react';

type SubmitStatus = {
  message: string;
  isError: boolean;
};

const initialStatus: SubmitStatus = { message: '', isError: false };

async function submitEmail(endpoint: string, event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: formData.get('email') }),
  });
  const result = await response.json();

  return {
    message: result.message ?? result.error,
    isError: !response.ok,
  };
}

export default function useSubscribe() {
  const [subscribeStatus, setSubscribeStatus] = useState(initialStatus);
  const [verifyStatus, setVerifyStatus] = useState(initialStatus);
  const [sendNowStatus, setSendNowStatus] = useState(initialStatus);
  const [unsubscribeStatus, setUnsubscribeStatus] = useState(initialStatus);

  const createSubmitHandler = (
    endpoint: string,
    setStatus: (status: SubmitStatus) => void,
  ): FormEventHandler<HTMLFormElement> => async (event) => {
    try {
      setStatus(await submitEmail(endpoint, event));
    } catch {
      setStatus({ message: 'Unable to connect. Please try again.', isError: true });
    }
  };

  return {
    onSubscribe: createSubmitHandler('/api/subscribers/subscribe', setSubscribeStatus),
    onVerify: createSubmitHandler('/api/subscribers/verify', setVerifyStatus),
    onSendNow: createSubmitHandler('/api/subscribers/sendnow', setSendNowStatus),
    onUnsubscribe: createSubmitHandler('/api/subscribers/unsubscribe', setUnsubscribeStatus),
    subscribeMessage: subscribeStatus.message,
    verifyMessage: verifyStatus.message,
    sendNowMessage: sendNowStatus.message,
    unsubscribeMessage: unsubscribeStatus.message,
    subscribeIsError: subscribeStatus.isError,
    verifyIsError: verifyStatus.isError,
    sendNowIsError: sendNowStatus.isError,
    unsubscribeIsError: unsubscribeStatus.isError,
  };
}