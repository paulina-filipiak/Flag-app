import { useState, useEffect } from "react"

const useFetchDetails = (callback) => {
  const [country, setCountry] = useState("")
  const [loader, setLoader] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      callback()
        .then((response) => response.json())
        .then((data) => setCountry(data.name))
        .catch((error) => {
          setError(error.message)
        })
        .finally(() => setLoader(false))
    }
    setLoader(true)
    fetchData()
  }, [])

  return {
    country,
    loader,
    error,
  }
}

export default useFetchDetails
