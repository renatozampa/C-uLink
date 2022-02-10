import axios from 'axios'

export const key = "056a438b1bf63ba1adb552dc274515511b071527"


const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }

})


export default api