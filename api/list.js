import axios from 'axios'
import { baseUrl } from './_env'

export default {
  // GET http://....:3000/booklist
  list: () => axios.get(`${baseUrl}/booklist`),
  // GET http://....:3000/booklist/:id
  get: (id) => axios.get(`${baseUrl}/booklist/${id}`),
  // GET http://....:3000/booklist?q=keyword
  search: (keyword) => axios.get(`${baseUrl}/booklist?q=${keyword}`), 
}