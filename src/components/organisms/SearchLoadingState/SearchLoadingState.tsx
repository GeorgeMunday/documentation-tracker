import ContentField from '@/components/molecules/ContentField/ContentField'
import Header from '@/components/molecules/Header/Header'
import SearchChange from '@/components/molecules/SearchChange/SearchChange'
import WelcomeMessage from '@/components/molecules/WelcomeMessage/WelcomeMessage'
import { IChange } from '@/lib/models/Change';

type SearchProps = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  submittedTerm?: string;
  onSearch?: () => void;
  changes: IChange[] | null;
};

const Search = ({ searchTerm, setSearchTerm, submittedTerm, onSearch, changes }: SearchProps) => {
  return (
    <>
    <Header />
      <div className="flex flex-col justify-center items-center gap-4 w-full ">
      <ContentField>
        <WelcomeMessage title="Search All Recorded Changes" message="Try searching for MongoDB or Next.js changes. Search by keyword" />
        <SearchChange
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          submittedTerm={submittedTerm}
          onSearch={onSearch}
          changes={changes}
        />
      </ContentField>
      </div>
    </>
  )
}

export default Search