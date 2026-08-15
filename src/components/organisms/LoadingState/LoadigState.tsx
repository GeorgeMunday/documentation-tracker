"use client";

import ContentField from '@/components/molecules/ContentField/ContentField';
import Header from '@/components/molecules/Header/Header';

export default function LoadingState() {
  return (
    <div className="w-full">
      <Header />

      <div className="flex w-full justify-center px-2 py-4 sm:px-4">
        <div className="w-full max-w-5xl animate-pulse">
          <ContentField>
            <div className="w-full space-y-4 px-2 py-4">
              <div className="mx-auto h-7 w-3/4 max-w-md rounded-md border border-gray-200 bg-white sm:h-8" />
              <div className="mx-auto h-4 w-2/3 max-w-xl rounded-md border border-gray-200 bg-white" />
              <div className="mx-auto h-4 w-1/2 max-w-md rounded-md border border-gray-200 bg-white" />

              <div className="mt-6 flex w-full flex-col items-center gap-3">
                <div className="flex w-full justify-center">
                  <div className="relative w-full max-w-xl">
                    <div className="h-11 w-full rounded-md border border-gray-200 bg-white" />
                  </div>
                </div>

                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="w-full rounded-lg border border-gray-200 bg-white p-3 sm:p-4"
                  >
                    <div className="h-5 w-2/3 rounded-md border border-gray-200 bg-white" />
                    <div className="mt-3 h-4 w-full rounded-md border border-gray-200 bg-white" />
                    <div className="mt-2 h-4 w-5/6 rounded-md border border-gray-200 bg-white" />
                    <div className="mt-4 h-3 w-1/3 rounded-md border border-gray-200 bg-white" />
                  </div>
                ))}
              </div>
            </div>
          </ContentField>
        </div>
      </div>
    </div>
  );
}