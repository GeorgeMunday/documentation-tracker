"use client"
import ContentField from '@/components/molecules/ContentField/ContentField'
import Header from '@/components/molecules/Header/Header'
import WelcomeMessage from '@/components/molecules/WelcomeMessage/WelcomeMessage'
import React from 'react'

const ErrorState = () => {
  return (
    <div>
      <Header />
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <ContentField>
          <WelcomeMessage
            title="Error 404"
            message="The page you are looking for does not exist."
          />
        </ContentField>
      </div>
    </div>
  )
}

export default ErrorState