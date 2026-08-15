import ContentField from '@/components/molecules/ContentField/ContentField';
import Header from '@/components/molecules/Header/Header';
import NextMessage from '@/components/molecules/NextMessage/NextMessage';
import RecentChanges from '@/components/molecules/RecentChanges/RecentChanges';
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
        <NextMessage />
        <RecentChanges changes={changes} />
      </ContentField>
      </div>
    </div>
  )
}

export default Next