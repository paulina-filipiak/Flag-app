import { Description, Detail, Details } from "./Flag.styled"

const FlagDescription = ({ country }) => {
  return (
    <Description>
      <h3>{country.name}</h3>
      <Details>
        <Detail>
          Population: {country.population.toLocaleString("en-US")}
        </Detail>
        <Detail>Region: {country.region}</Detail>
        <Detail>Capital: {country.capital}</Detail>
      </Details>
    </Description>
  )
}

export default FlagDescription
