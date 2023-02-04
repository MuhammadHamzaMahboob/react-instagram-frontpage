import axios from 'axios'

const getAPIData = (url) => (
  axios.get(url).then((response) => response.data)
    .catch(() => {
      <h1>Caught an error.</h1>
    })
)

export default getAPIData
