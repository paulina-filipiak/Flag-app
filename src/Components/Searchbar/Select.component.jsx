import App from "../../App"
import { SelectStyled } from "./Searchbar.styled"
import { v4 as uuidv4 } from "uuid"
const Select = ({ selectedRegion, setSelectedRegion }) => {
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"]

  return (
    <SelectStyled
      onChange={(event) => setSelectedRegion(event.target.value)}
      value={selectedRegion}>
      {regions.map((region) => {
        return (
          <option key={uuidv4()} value={region}>
            {region}
          </option>
        )
      })}
    </SelectStyled>
  )
}

export default Select
