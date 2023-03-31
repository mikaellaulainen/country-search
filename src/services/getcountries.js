import axios from 'axios'
const baseUrl = 'https://restcountries.com/v3.1/name/'

const getCountries = async country => {
  const res = await axios.get(`${baseUrl}${country}`)
  return res.data
}

export default { getCountries }