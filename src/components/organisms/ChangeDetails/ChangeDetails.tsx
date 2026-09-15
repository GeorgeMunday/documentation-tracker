import { Suspense } from 'react';
import ContentField from '@/components/molecules/ContentField/ContentField';
import ChangeDetailsContent from '@/components/molecules/ChangeDetailsContent/ChangeDetailsContent';
import Header from '@/components/molecules/Header/Header';
import type { IChange } from '@/lib/models/Change';

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
        </ContentField>
      </main>
    </>
  );
};

export default ChangeDetails;