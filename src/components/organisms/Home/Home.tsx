import ContentField from '@/components/molecules/ContentField/ContentField';
import EmailSubmit from '@/components/molecules/EmailSubmit/EmailSubmit';
import Header from '@/components/molecules/Header/Header';
import Links from '@/components/molecules/Links/Links';
import RecentChanges from '@/components/molecules/RecentChanges/RecentChanges';
import WelcomeMessage from '@/components/molecules/WelcomeMessage/WelcomeMessage';
import { IChange } from '@/lib/models/Change';
import type { FormEventHandler } from 'react';

type HomeProps = {
  changes: IChange[] | null;
  onSubscribe: FormEventHandler<HTMLFormElement>;
  subscribeMessage?: string;
  subscribeIsError?: boolean;
};

const Home = ({ changes, onSubscribe, subscribeMessage, subscribeIsError }: HomeProps) => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center w-full">
      <ContentField>
        <WelcomeMessage />
        <EmailSubmit onSubmit={onSubscribe} message={subscribeMessage} isError={subscribeIsError} />
        <RecentChanges changes={changes} input={false} />
        <WelcomeMessage title="Links" message="Some useful links for you to check out." />
        <Links />
      </ContentField>
      </div>
    </div>
  )
}

export default Home