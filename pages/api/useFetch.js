import useSWR from "swr";

const useFetch = route => {
  const baseUrl = 'https://api-amazoflix.herokuapp.com'

  let url = baseUrl + route

  const { data, error } = useSWR(
    route ? url : null,
    async url => {
      const response = await fetch(url)
      const data = await response.json()
      return data
    },
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshWhenHidden: false
    }
  )

  return { data, error }
}

export default useFetch
