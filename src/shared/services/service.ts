import mainApi from "@/src/infrastructures/http-client-main"
import { API } from "../constanst/api"
import axios from "axios"
import withoutTokenApi from "@/src/infrastructures/http-client-without-token"

class Services {
    checkToken = async () => {
        try {
            const response = await mainApi.get(API.CHECK_TOKEN)
            return response
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "check token failed",
            )
        }
    }

    checkTokenWithCookie = async (token: string | undefined) => {
        try {
            const response = await withoutTokenApi.get(API.CHECK_TOKEN, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            return response
        } catch (error: any) {
            return false
            // return true
            throw new Error(
                error.response?.data?.message || "check token failed",
            )
        }
    }

    fetchLink = async (url: string) => {
        try {
            const response = await mainApi.get(API.FETCH_LINKS, {
                params: {
                    url,
                },
            })
            return response
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "fetch links failed",
            )
        }
    }

    cretaeBots = async (body: any) => {
        try {
            const response = await mainApi.post(API.CREATE_BOT, body)
            return response
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "create Bots failed",
            )
        }
    }
    myBoysList = async (params: any) => {
        try {
            const response = await mainApi.get(API.My_BOTS, {
                params: {
                    ...params,
                },
            })
            return response
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "fetch links failed",
            )
        }
    }
    deleteBot= async (botId :string)=>{
        try {
            const response = await mainApi.delete(`${API.DELETE_BOTS}/${botId}`)
            return response
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "delete bot failed",
            )
        }

    }
    getBot= async (botId :string)=>{
        try {
            const response = await mainApi.get(`${API.My_BOTS}/${botId}`)
            return response
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "get bot failed",
            )
        }

    }
    getHistoryMessages= async (botId :string = "b8d8154c-99e5-49ab-89ed-806088932781")=>{
        try {
            const response = await mainApi.get(`${"/mybots"}/${botId}/conversations`)
            return response
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "get history failed",
            )
        }

    }
}

export default new Services()
