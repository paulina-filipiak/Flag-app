import FlagImg from "../Components/Flag/FlagImg.component"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { FlagDetailsPage } from "../Components/Flag/Flag.styled"

const FlagPage = () => {
  const [countryDetails, setCountryDetails] = useState("")
  const params = useParams()
  const countryName = params.name

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://restcountries.com/v2/name/${countryName}?fields=name,nativeName,capital,region,subregion,borders,flag,population,topLevelDomain,currencies,languages&fullText=true`
      )
        .then((response) => response.json())
        .then((data) => setCountryDetails(data[0]))
        .catch((error) => {
          setError(error.message)
        })
    }
    fetchData()
  }, [countryName])

  return (
    <>
      <Link to={"/"}>Back</Link>
      <FlagDetailsPage>
        <FlagImg style={{ height: "100%" }} country={countryDetails} />
        <div>
          <h2>{countryDetails.name}</h2>
          <p>Native Name: {countryDetails.nativeName}</p>
          <p>Population: {countryDetails.population}</p>
          <p>Region: {countryDetails.region}</p>
          <p>Sub Region: {countryDetails.subregion}</p>
          <p>
            {countryDetails.capital
              ? `Capital: ${countryDetails.capital}`
              : "Capital: No capital"}
          </p>
          <p>Top Level Domain: {countryDetails.topLevelDomain}</p>
          <p>
            {countryDetails.currencies
              ? `Currencies: ${countryDetails.currencies.map(
                  (currency) => currency.name + " "
                )}`
              : "Currencies: No currencies"}
          </p>
          <p>
            {countryDetails.languages
              ? `Languages: ${countryDetails.languages.map(
                  (language) => language.name + " "
                )}`
              : "Languages: No languages"}
          </p>
        </div>
      </FlagDetailsPage>
    </>
  )
}
export default FlagPage
