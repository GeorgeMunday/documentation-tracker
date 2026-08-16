import ContentField from '@/components/molecules/ContentField/ContentField'
import Header from '@/components/molecules/Header/Header'
import WelcomeMessage from '@/components/molecules/WelcomeMessage/WelcomeMessage'

const Information = () => {
  return (
    <>
    <Header />
      <div className="flex flex-col justify-center items-center gap-4 w-full ">
      <ContentField>
        <WelcomeMessage title="Information" message="Here you can find information about the application." />
      </ContentField>
      </div>
    </>
  )
}

export default Information