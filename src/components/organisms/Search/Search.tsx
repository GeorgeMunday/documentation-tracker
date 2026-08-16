import ContentField from '@/components/molecules/ContentField/ContentField'
import Header from '@/components/molecules/Header/Header'
import WelcomeMessage from '@/components/molecules/WelcomeMessage/WelcomeMessage'

const Search = () => {
  return (
    <>
    <Header />
      <div className="flex flex-col justify-center items-center gap-4 w-full ">
      <ContentField>
        <WelcomeMessage title="Search All Recorded Changes" message="Try searching for MongoDB or Next.js changes. Search by keyword" />
      </ContentField>
      </div>
    </>
  )
}

export default Search