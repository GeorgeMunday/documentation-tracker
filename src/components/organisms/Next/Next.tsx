import ContentField from '@/components/molecules/ContentField/ContentField';
import Header from '@/components/molecules/Header/Header';
import RecentChanges from '@/components/molecules/RecentChanges/RecentChanges';
import WelcomeMessage from '@/components/molecules/WelcomeMessage/WelcomeMessage';
import { IChange } from '@/lib/models/Change';

interface NextProps {
  changes: IChange[] | null;
}


const Next = ({ changes }: NextProps) => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center gap-4 w-full ">
      <ContentField>
        <WelcomeMessage title="Most Recent Next.js Changes" message="Next.js version: 13.0.0 Next.js Docs: https://nextjs.org/docs" />
        <RecentChanges changes={changes} />
      </ContentField>
      </div>
    </div>
  )
}

export default Next