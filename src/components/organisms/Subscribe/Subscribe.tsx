import ContentField from '@/components/molecules/ContentField/ContentField';
import EmailActionLinks from '@/components/molecules/EmailActionLinks/EmailActionLinks';
import EmailSubmit from '@/components/molecules/EmailSubmit/EmailSubmit';
import Header from '@/components/molecules/Header/Header';
import WelcomeMessage from '@/components/molecules/WelcomeMessage/WelcomeMessage';

const Subscribe = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center w-full">
      <ContentField>
        <WelcomeMessage title="Subscribe to Our Newsletter" message="This newsletter will keep you updated with the latest news and updates." />
        <EmailSubmit />
        <EmailActionLinks />
      </ContentField>
      </div>
    </div>
  )
}

export default Subscribe