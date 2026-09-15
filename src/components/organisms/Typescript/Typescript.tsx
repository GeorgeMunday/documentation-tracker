import ContentField from '@/components/molecules/ContentField/ContentField';
import Header from '@/components/molecules/Header/Header';
import RecentChanges from '@/components/molecules/RecentChanges/RecentChanges';
import WelcomeMessage from '@/components/molecules/WelcomeMessage/WelcomeMessage';
import { IChange } from '@/lib/models/Change';

type TypescriptProps = {
  changes: IChange[] | null;
};

const Typescript = ({ changes }: TypescriptProps) => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center w-full">
      <ContentField>
        <WelcomeMessage title="Most Recent TypeScript Changes" message="Here are the most recent changes to TypeScript." />
        <RecentChanges changes={changes} />
      </ContentField>
      </div>
    </div>
  )
}

export default Typescript