import axios from 'axios'

export const api = axios.create({

  baseURL: 'https://food-explorer-y64y.onrender.com'
  //baseURL: 'http://localhost:3333'
})