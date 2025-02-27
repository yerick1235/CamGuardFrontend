import axios from "axios"
import toast from "react-hot-toast"

const apiClient = axios.create({
    baseURL: 'https://camguard.up.railway.app',
    timeout: 5000
})

//# ----- Add Test Data -----
export const insertTest = async(data)=>{
    try {
        return await apiClient.post('/img/insert', data)
    } catch (err) {
        console.error(err)
        throw err
    }
}