# Documentation Tracker

A Next.js application that tracks and monitors changes to APIs (Next.js and MongoDB) with real-time updates and search functionality.

## Features

- **Real-time Change Tracking**: Monitor API changes across multiple platforms
- **API Support**: Track changes for:
  - Next.js
  - MongoDB
  - Node
  - Typescript
  - Tailwind CSS
- **Search**: Quickly search through tracked changes
- **Recent Changes**: View the most recent API changes at a glance
- **Online Status**: Display current connectivity status
- **Responsive UI**: Mobile-friendly interface built with modern React components

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) with TypeScript
- **Database**: MongoDB
- **Styling**: CSS with Tailwind CSS support
- **Data Fetching**: [SWR](https://swr.vercel.app/) for caching, revalidation, and request deduplication
- **Architecture**: Component-based (atoms, molecules, organisms)

## Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── api/               # API routes for fetching changes
│   │   └── changes/       # Change endpoints (all, mongo, next)
│   ├── page.tsx           # Home page
│   └── [page]/page.tsx    # Additional pages (information, search, etc.)
├── components/            # React components
│   ├── atoms/             # Basic UI components (Button, Input, Text, etc.)
│   ├── molecules/         # Component compositions (Header, Form sections)
│   └── organisms/         # Full feature sections (Home, Search, etc.)
└── lib/
   ├── hooks/             # Custom React hooks
   │   ├── useChanges/    # SWR change fetching and preloading
   │   └── useOnlineStatus/
    ├── models/            # Data models
    └── mongo/             # MongoDB connection
```

## Architecture

The application follows the **Atomic Design** methodology for component organization and a **layered architecture** for data flow:

### Component Hierarchy

```
┌─────────────────────────────────────────┐
│        Pages (App Routes)               │
├─────────────────────────────────────────┤
│     Organisms (Feature Sections)        │
│  (Home, Search, Mongo, Next, Info)      │
├─────────────────────────────────────────┤
│  Molecules (Composed Components)        │
│  (Header, Form, ContentField, etc.)     │
├─────────────────────────────────────────┤
│    Atoms (Basic UI Elements)            │
│   (Button, Input, Text, ItemBox)        │
└─────────────────────────────────────────┘
```

### Data Flow Architecture

```
MongoDB
   ↑
   │ (stores/retrieves)
   │
GitHub Actions Scraper
   ↓ (populates)
   │
API Routes (/api/changes/*)
   ↓ (serves)
   │
useChanges + SWR
   ↓ (fetches, caches, revalidates)
   │
Components (atoms → molecules → organisms)
   ↓ (renders UI)
   │
Pages
```

### Data Fetching and Preloading

Change pages use the shared `useChanges` hook in `src/lib/hooks/useChanges/useChanges.ts`.
SWR provides:

- Shared in-memory caching between pages
- Request deduplication when multiple components use the same endpoint
- Revalidation when the browser window regains focus
- Error handling without permanently caching failed requests
- Offline-aware requests by disabling the SWR key while the app is offline

The navigation header preloads the API data for change pages when a link is hovered,
focused, or pressed. Next.js separately prefetches the route code through `next/link`.
The page can therefore reuse data that has already been placed in the SWR cache.

The All Changes page uses SWR Infinite to cache each paginated request independently
and load additional pages through the `Show more` control. Search results are cached
by their encoded query URL.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- MongoDB instance (local or cloud)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd api-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with your MongoDB connection string and other configuration.

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
npm run build
npm start
```

## GitHub Actions

### Web Scraper Workflow

The project includes an automated GitHub Action (`Web Scraper`) that continuously monitors API changes:

**How it Works:**
- **Trigger**: Runs daily at midnight UTC (configurable cron schedule) and can be manually triggered via `workflow_dispatch`
- **Process**:
  1. Checks out the latest repository code
  2. Sets up Node.js 20 environment
  3. Installs dependencies from `.github/webscraper`
  4. Executes the scraper script (`scrape_news.js`) which:
     - Fetches latest API changes from Next.js and MongoDB documentation/release notes
     - Parses and processes the data
     - Stores new changes in MongoDB via the `MONGODB_URI` secret

**Configuration:**
- Edit `.github/workflows/scraper.yml` to change the schedule
- Set the `MONGODB_URI` secret in GitHub repository settings for MongoDB connection
- Scraper scripts are located in `.github/webscraper/`

**Manual Trigger:**
You can manually trigger the workflow from the GitHub Actions tab to force an immediate API change check.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is open source and available under the MIT License.
