import ContentField from '@/components/molecules/ContentField/ContentField';
import ChangeDetailsContent from '@/components/molecules/ChangeDetailsContent/ChangeDetailsContent';
import Header from '@/components/molecules/Header/Header';
import type { IChange } from '@/lib/models/Change';
import Links from '@/components/molecules/Links/Links';
import WelcomeMessage from '@/components/molecules/WelcomeMessage/WelcomeMessage';

type ChangeDetailsProps = {
  change: IChange;
};

const ChangeDetails = ({ change }: ChangeDetailsProps) => {
  return (
    <>
      <Header />
      <main className="flex w-full justify-center">
        <ContentField>
          <WelcomeMessage title="Change Details" message="Here are the details of the change you selected." />
          <div className="flex flex-col justify-center items-center w-full">
          <ChangeDetailsContent change={change} />
          <WelcomeMessage title="Links" message="Some useful links for you to check out." />
          <Links/>
          </div>
        </ContentField>
      </main>
    </>
  );
};

export default ChangeDetails;