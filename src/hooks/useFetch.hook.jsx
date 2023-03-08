import { useState, useEffect } from "react"

const useFetch = (callback) => {
  const [countries, setCountries] = useState([])
  const [loader, setLoader] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      callback()
        .then((response) => response.json())
        .then((data) => setCountries((prev) => [...prev, ...data]))
        .catch((error) => {
          setError(error.message)
        })
        .finally(() => setLoader(false))
    }
    setLoader(true)
    fetchData()
  }, [])

  return {
    countries,
    loader,
    error,
  }
}

export default useFetch
