import ContentField from '@/components/molecules/ContentField/ContentField';
import Header from '@/components/molecules/Header/Header';
import MongoMessage from '@/components/molecules/MongoMessage/MongoMessage';
import RecentChanges from '@/components/molecules/RecentChanges/RecentChanges';

const Mongo = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center gap-4 w-full ">
      <ContentField>
        <MongoMessage />
        <RecentChanges />
      </ContentField>
      </div>
    </div>
  )
}

export default Mongo