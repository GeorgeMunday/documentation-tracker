'use client';

import useSWR from 'swr';
import { preload } from 'swr';
import { IChange } from '@/lib/models/Change';

export async function fetcher<T>(url: string): Promise<T> {
  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error ?? `Request failed: ${response.status}`);
  }

  return data as T;
}

export function preloadChanges(url: string) {
  preload(url, fetcher);
}

export function useChanges<T = IChange[]>(url: string | null, isOnline: boolean) {
  const { data, error, isLoading } = useSWR<T>(url && isOnline ? url : null, fetcher, {
    revalidateOnFocus: true,
    shouldRetryOnError: false,
  });

  return {
    changes: data ?? null,
    error: Boolean(error),
    loading: isLoading,
  };
}