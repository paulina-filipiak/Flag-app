import { UserSearch } from "./Searchbar.styled"
import SearchBar from "./Searchbar.component"

const SearchInput = ({ query, setQuery }) => {
  return (
    <UserSearch
      value={query}
      onChange={(event) => {
        setQuery(event.target.value)
      }}
      placeholder="Filter by country name"
    />
  )
}

export default SearchInput
