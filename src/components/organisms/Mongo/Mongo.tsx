import ContentField from '@/components/molecules/ContentField/ContentField';
import Header from '@/components/molecules/Header/Header';
import MongoMessage from '@/components/molecules/MongoMessage/MongoMessage';
import RecentChanges from '@/components/molecules/RecentChanges/RecentChanges';
import { IChange } from '@/lib/models/Change';

interface MongoProps {
  changes: IChange[] | null;
}

const Mongo = ({ changes }: MongoProps) => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center gap-4 w-full ">
      <ContentField>
        <MongoMessage />
        <RecentChanges changes={changes} />
      </ContentField>
      </div>
    </div>
  )
}

export default Mongo