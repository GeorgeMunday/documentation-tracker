import ContentField from '@/components/molecules/ContentField/ContentField';
import Header from '@/components/molecules/Header/Header';
import Links from '@/components/molecules/Links/Links';
import RecentChanges from '@/components/molecules/RecentChanges/RecentChanges';
import WelcomeMessage from '@/components/molecules/WelcomeMessage/WelcomeMessage';
import { IChange } from '@/lib/models/Change';

type HomeProps = {
  changes: IChange[] | null;
};

const Home = ({ changes }: HomeProps) => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center w-full">
      <ContentField>
        <WelcomeMessage />
        <RecentChanges changes={changes} />
        <WelcomeMessage title="Links" message="Some useful links for you to check out." />
        <Links />
      </ContentField>
      </div>
    </div>
  )
}

export default Home