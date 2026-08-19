import ContentField from '@/components/molecules/ContentField/ContentField';
import Header from '@/components/molecules/Header/Header';
import RecentChanges from '@/components/molecules/RecentChanges/RecentChanges';
import WelcomeMessage from '@/components/molecules/WelcomeMessage/WelcomeMessage';
import { IChange } from '@/lib/models/Change';

type AllProps = {
  changes: IChange[] | null;
  limit: number;
  setSkip: (value: number | ((current: number) => number)) => void;
};

const All = ({ changes, limit, setSkip }: AllProps) => {
  const hasMore = !!changes && changes.length >= limit;

  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center gap-4 w-full">
        <ContentField>
          <WelcomeMessage
            title="Welcome to All Changes"
            message="Click the view more button to see more of the latest changes."
          />
          <RecentChanges changes={changes} />

          <div className="mt-4 flex justify-center">
            <button
              type="button"
              disabled={!hasMore}
              onClick={() => setSkip((current) => current + limit)}
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Show more
            </button>
          </div>
        </ContentField>
      </div>
    </div>
  );
};

export default All