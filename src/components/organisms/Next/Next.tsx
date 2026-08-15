import ContentField from '@/components/molecules/ContentField/ContentField';
import Header from '@/components/molecules/Header/Header';
import NextMessage from '@/components/molecules/NextMessage/NextMessage';
import RecentChanges from '@/components/molecules/RecentChanges/RecentChanges';

const Next = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center gap-4 w-full ">
      <ContentField>
        <NextMessage />
        <RecentChanges />
      </ContentField>
      </div>
    </div>
  )
}

export default Next