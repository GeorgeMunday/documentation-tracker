"use client"
import ContentField from '@/components/molecules/ContentField/ContentField'
import Header from '@/components/molecules/Header/Header'
import WelcomeMessage from '@/components/molecules/WelcomeMessage/WelcomeMessage'
import React from 'react'

const ApiErrorState = () => {
  return (
    <div>
      <Header />
      <div className="flex w-full flex-col items-center justify-center gap-4 text-red-500">
        <ContentField>
          <WelcomeMessage
            title="There was an error"
            message="Please check your internet connection and try again."
          />
        </ContentField>
      </div>
    </div>
  )
}

export default ApiErrorState