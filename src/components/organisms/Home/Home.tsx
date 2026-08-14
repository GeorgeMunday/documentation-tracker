import ContentField from '@/components/molecules/ContentField/ContentField';
import Header from '@/components/molecules/Header/Header';
import RecentChanges from '@/components/molecules/RecentChanges/RecentChanges';
import WelcomeMessage from '@/components/molecules/WelcomeMessage/WelcomeMessage';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center gap-4 w-full ">
      <ContentField>
        <WelcomeMessage />
        <RecentChanges />
      </ContentField>
      </div>
    </div>
  )
}

export default Home