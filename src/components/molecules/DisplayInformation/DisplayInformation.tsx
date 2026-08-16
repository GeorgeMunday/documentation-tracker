import React from 'react'
import ItemBox from '@/components/atoms/ItemBox/ItemBox'

const DisplayInformation = () => {
  return (
    <div className="flex w-full flex-col gap-3">
      <ItemBox
        title="Documentation Tracker"
        description="A Next.js application that tracks and monitors changes to APIs (Next.js and MongoDB) with real-time updates and search functionality."
      />
      <ItemBox
        title="Features"
        description="Real-time change tracking, support for Next.js and MongoDB, quick search, recent changes overview, online status, and a responsive UI."
      />
      <ItemBox
        title="Tech Stack"
        description="Framework: Next.js with TypeScript. Database: MongoDB. Styling: CSS with Tailwind support. Architecture: component-based using atoms, molecules, and organisms."
      />
      <ItemBox
        title="Architecture"
        description="The application follows the Atomic Design methodology for component organization and a layered architecture for data flow, where pages sit above organisms, molecules, and atoms."
      />
      <ItemBox
        title="How it works"
        description="MongoDB stores and retrieves data, the scraper populates it, API routes serve it, hooks fetch it, and components render the UI for the pages."
      />
      <ItemBox
        title="Getting started"
        description="Install dependencies with npm install, create a .env.local file with your MongoDB settings, run npm run dev, and open http://localhost:3000 to use the app."
      />
    </div>
  )
}

export default DisplayInformation