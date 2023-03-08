import SearchInput from "./SearchInput.component"
import Layout from "../../Layout/Layout.component"
import Select from "./Select.component"
import { SearchDiv } from "./Searchbar.styled"

const SearchBar = ({ query, setQuery, selectedRegion, setSelectedRegion }) => {
  return (
    <SearchDiv>
      <SearchInput query={query} setQuery={setQuery} />
      <Select
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
    </SearchDiv>
  )
}

export default SearchBar
