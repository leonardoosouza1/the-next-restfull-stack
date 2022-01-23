import axios from 'axios'

const AppProvider = ({ children }) => {
    const response = axios.get('http://localhost:3000/')
    console.log(response)
    return (
        <>{children}</>
    )
}

export default AppProvider