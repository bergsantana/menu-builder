import axios from "axios";
import   { User } from "../interfaces/user";
import { Menu } from "../interfaces/menu";

const API_HOST =  import.meta.env.VITE_API_HOST
const API_PORT = import.meta.env.VITE_API_PORT

const api = axios.create({
    baseURL: `${API_HOST}:${API_PORT}`
})

function useBearerToken(token :string){ 
    api.defaults.headers.common = { Authorization: `Bearer ${token}`}
}

function useAPI()  { 
    const login  = async (email: string, password: string) => {
        const token = await api.post('/auth/login', {
            email, password
        })
        if(token.data.access_token){
            return token.data.access_token
        }
        return undefined
    }
    const register = async (user: User) => {
        return await api.post('/users/create', user)
    }

    const findUserData = async (email: string) => {
        const userData = await api.get(`user/finduser?email=${email}`)
        return userData.data
    }

    const createMenu = async (menu: Menu) => {
        return await api.post('/menu/create', menu)
    }

    const getAllMenuByUser = async (id: string) => {
        const req =  await api.get(`/menu/findbyuser/${id}`)
        return req.data
    }

    return {login, register, createMenu, getAllMenuByUser, findUserData}
}

export default { api, useBearerToken, useAPI }