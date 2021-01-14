const apiBase = 'https://api-amazoflix.herokuapp.com'

const api = async url => {
  let data = await fetch(apiBase + url)
    .then(res => res.json())
    .catch(err => err)

  return data
}

export default api
