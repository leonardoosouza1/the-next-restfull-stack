import axios from 'axios'

export default async (req, res) => {
    const response = await axios.get('http://localhost:3000/')
    console.log(response)
    res.status(200).json(response.data)
}