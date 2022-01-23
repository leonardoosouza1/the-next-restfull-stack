import axios from 'axios'

export default async (req, res) => {
    const messageId = +req.query.messageId
    const response = await axios.get('http://localhost:3000')
    const filteredMessages = await response.data.filter((message) => message.id === messageId)
    res.status(200).json(filteredMessages)

}