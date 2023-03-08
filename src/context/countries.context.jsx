import { createContext, useContext } from "react"
import { fetchCountries } from "../pages/Home.page"
import useFetch from "../hooks/useFetch.hook"

const CountriesContext = createContext([])

export const CountriesContextProvider = ({ children }) => {
  return (
    <CountriesContext.Provider value={useFetch(fetchCountries)}>
      {children}
    </CountriesContext.Provider>
  )
}

export const useCountries = () => useContext(CountriesContext).countries
