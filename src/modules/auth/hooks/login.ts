import { useRouter } from "next/navigation"
import { useState } from "react"
import services from "../services"
import { setCookie } from "nookies"
import { toast } from "sonner"

const useLogin = () => {
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const router = useRouter()

    const login = async (user: any) => {
        setLoading(true)
        setError(null)
        try {
            const res = await services.login(user)
            toast.success("ورود شما موفق آمیز بود.")
            setCookie(null, "accessToken", res.data.accessToken, {
                maxAge: 3600,
            })

            setCookie(null, "accessToken", res.data.accessToken, {
                maxAge: 3600,
                path: "/",
                secure: true, // Use this in production
                sameSite: "strict", // Prevent CSRF attacks
            })

            setCookie(null, "refreshToken", res.data.refreshToken, {
                maxAge: 30 * 24 * 60 * 60, // 30 days, or according to your refresh token TTL
                path: "/",
                secure: true, // Use this in production
                sameSite: "strict",
            })

            // Redirect or perform other actions here
            router.push("/mybots")
        } catch (err: any) {
            console.log(err)
            toast.error("نام کاربری یا رمز شما اشتباه می باشد.")
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return {
        login,
        isLoading,
        error,
    }
}
export default useLogin
