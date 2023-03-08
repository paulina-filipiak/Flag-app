import "../App.css"
import FlagList from "../Components/FlagList/FlagList.component"
import Loader from "../Components/Loader/Loader.component"
import useFetch from "../hooks/useFetch.hook"

export const fetchCountries = async () => {
  return fetch(
    "https://restcountries.com/v2/all?fields=name,capital,flag,population,region"
  )
}

const Homepage = () => {
  const { countries, loader } = useFetch(fetchCountries)

  //show loader when data is loading

  if (loader) {
    return <>{loader && <Loader />}</>
  }
  if (!loader) {
    return <FlagList countries={countries} />
  }
}

export default Homepage
