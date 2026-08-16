import ContentField from '@/components/molecules/ContentField/ContentField';
import Header from '@/components/molecules/Header/Header';
import RecentChanges from '@/components/molecules/RecentChanges/RecentChanges';
import WelcomeMessage from '@/components/molecules/WelcomeMessage/WelcomeMessage';
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
        <WelcomeMessage title = "Most Recent MongoDB Changes" message = "MongoDB version: 6.0.6 MongoDB Docs: https://www.mongodb.com/docs" />
        <RecentChanges changes={changes} />
      </ContentField>
      </div>
    </div>
  )
}

export default Mongo