import ContentField from '@/components/molecules/ContentField/ContentField';
import ChangeDetailsContent from '@/components/molecules/ChangeDetailsContent/ChangeDetailsContent';
import Header from '@/components/molecules/Header/Header';
import type { IChange } from '@/lib/models/Change';
import Links from '@/components/molecules/Links/Links';

type ChangeDetailsProps = {
  change: IChange;
};

const ChangeDetails = ({ change }: ChangeDetailsProps) => {
  return (
    <>
      <Header />
      <main className="flex w-full justify-center">
        <ContentField>
          <ChangeDetailsContent change={change} />
          <Links/>
        </ContentField>
      </main>
    </>
  );
};

export default ChangeDetails;