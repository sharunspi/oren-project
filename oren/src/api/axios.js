import axios from 'axios'

export  const getusers = () =>  axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/users'
})

