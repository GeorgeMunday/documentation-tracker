# API Tracker

A Next.js application that tracks and monitors changes to APIs (Next.js and MongoDB) with real-time updates and search functionality.

## Features

- **Real-time Change Tracking**: Monitor API changes across multiple platforms
- **API Support**: Track changes for:
  - Next.js
  - MongoDB
- **Search**: Quickly search through tracked changes
- **Recent Changes**: View the most recent API changes at a glance
- **Online Status**: Display current connectivity status
- **Responsive UI**: Mobile-friendly interface built with modern React components

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) with TypeScript
- **Database**: MongoDB
- **Styling**: CSS with Tailwind CSS support
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
    │   ├── useApi/        # API data fetching
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
Custom Hooks (useApi, useOnlineStatus)
   ↓ (fetches/manages state)
   │
Components (atoms → molecules → organisms)
   ↓ (renders UI)
   │
Pages
```

### Layer Breakdown

1. **Data Layer** (`lib/`)
   - `mongo/connection.ts`: MongoDB connection management
   - `models/Change.ts`: Data model definitions
   - `hooks/`: Custom React hooks for data fetching and state management

2. **API Layer** (`app/api/`)
   - Route handlers that query MongoDB and return JSON responses
   - Endpoints for retrieving changes filtered by source (all, Next.js, MongoDB)

3. **UI Component Layer** (`components/`)
   - **Atoms**: Fundamental building blocks (Button, Input, Text, ItemBox)
   - **Molecules**: Combinations of atoms (Header, ContentField, Form)
   - **Organisms**: Feature-complete sections (Home, Search, Mongo, Next, Information)

4. **Page Layer** (`app/`)
   - Server components that orchestrate page layout
   - Client components that render organisms

### State Management

- **Server State**: Managed via Next.js server components and API routes
- **Client State**: Managed through React hooks and component state
- **Async Data**: Fetched via `useApi` hook which handles loading, error, and data states

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

## Pages

- **Home** (`/`): Main dashboard with welcome message and recent changes
- **Information** (`/information`): API information and documentation
- **Next** (`/next`): Next.js specific changes and updates
- **Mongo** (`/mongo`): MongoDB specific changes and updates
- **Search** (`/search`): Search through all tracked changes

## API Endpoints

- `GET /api/changes/all` - Get all API changes
- `GET /api/changes/next` - Get Next.js specific changes
- `GET /api/changes/mongo` - Get MongoDB specific changes

## Development

### Project Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - TypeScript type checking

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
