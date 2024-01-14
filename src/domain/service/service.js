import axios from 'axios'

const API_URL = 'https://m3chatapi.onrender.com/api'

const fetchData = async (endpoint, token) => {
  try {
    const response = await axios.get(`${API_URL}/${endpoint}`, {headers: { 'Authorization': `Bearer ${token}` }})
    return response.data
  } catch (error) {
    console.error('REQUEST ERROR: ', error)
    throw error
  }
}

const postData = async (endpoint, body, token) => {
  try {
    const response = await axios.post(`${API_URL}/${endpoint}`, body, {headers: {'Authorization': `Bearer ${token}`}})
    return response.data
  } catch (error){
    console.error('REQUEST ERROR: ', error)
    throw error
  }
}

export { fetchData, postData }