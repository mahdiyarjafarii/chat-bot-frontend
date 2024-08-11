"use client"
import useSelectModal from "@/src/shared/components/common/selectModal/hooks/useSelectModal.ts"
import useFetchLinks from "@/src/shared/hooks/fetchLinks"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ClockLoader } from "react-spinners"
import Services from "../../../../../src/shared/services/service"
import LoaderLottie from "@/src/shared/components/common/loader"
import { toast } from "sonner"
import { Calendar } from "iconsax-react"
import "./style.css"

const IntroduceSections = () => {
    const [inputValue, setInputValue] = useState("");
    const [loading, setLoading] = useState(false);
    const SelectModal = useSelectModal();


    const validateInput = () => {
        // Check if input value is empty
        if (!inputValue.trim()) {
            toast.error("آدرس وبسایت نمی‌تواند خالی باشد.")
            return false
        }
        // Check if input value is a valid URL
        const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/
        if (!urlPattern.test(inputValue)) {
            toast.error("آدرس وبسایت وارد شده معتبر نیست.")
            return false
        }
        return true
    }

    const handleInputChange = (event: any) => {
        setInputValue(event.target.value)
    }
    const handleMeetRequest = () => {
        window.open("https://calendly.com/hamyarchat/hamyarchat-demo", "_blank")
    }

    const handleSubmit = async () => {
        if (!validateInput()) {
            return
        }

        try {
            setLoading(true)
            const response = await Services.fetchLink(inputValue)
            const linkArray = response.data
            console.log(linkArray.length)
            if (linkArray.length > 2) {
                SelectModal.setUrls(linkArray)
                SelectModal.onOpen()
            } else {
                toast.error("لینک های سایت شما کافی نمی باشد.")
            }
        } catch (error) {
            toast.error("بررسی سایت مشکل پیش امده است.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
               <div className="relative min-h-full h-full w-full bg-contain lg:bg-cover bg-no-repeat overflow-hidden">
                    <div className="absolute left-[80%] top-24 -z-50 w-[300px]">
                        <Image
                         className="blur-2xl"
                            src="/images/rightBlur.png"
                            height="100"
                            width="650"
                            alt="Logo"
                        />
                    </div>
                    <div className="left-blur absolute right-[70%] -z-50 w-[1000px]">
                        <Image
                             className="blur-3xl"
                            src="/images/rightBlur.png"
                            height="200"
                            width="500"
                            alt="Logo"
                        />
                    </div>

                    <div className="relative z-10 grid min-h-full w-full">
                        <div className="intro_conteiner">
                            <div className="mt-7 flex flex-col items-center justify-center text-center md:mt-9">
                    <h1>
                        <p className="text-4xl md:text-7xl">
                            <span className="gradient-h2 is-v2">همیارچت</span>
                            <span>، دستیار هوش مصنوعی </span>
                        </p>
                        <p className="mt-3 text-xl md:mt-5 md:text-3xl">
                            <span>در خدمت </span>
                            <span className="gradient-h2 is-v2">رضایت </span>
                            <span>مشتریان و </span>
                            <span className="gradient-h2 is-v2">پیشرفت </span>
                            <span>کسب و کارها</span>
                      
                        </p>
                    </h1>
                            </div>
                            <div className="mt-6 text-base text-slate-400 md:mt-8 md:text-lg ">
                    <p className="text-center w-[55%] mx-auto md:text-[16px] text-[13px]">
                        {`با همیارچت، تجربه‌ای هوشمند و شخصی‌سازی شده برای ارتباطات آنلاین و خدمات مشتریان خود بسازید. پلتفرم قدرتمند ما به شما کمک می‌کند تا به سادگی و با کارایی بالا، ارتباطات بهینه‌تری با مشتریان خود برقرار کنید و همیشه در دسترس باشید.`}
                    </p>
                            </div>
                            <div className="mt-[32px] flex flex-col items-center justify-center gap-4">
                            <div className="webflow-style-input w-full">
                    <input
                        type="text"
                        className="input-url"
                        onChange={handleInputChange}
                        placeholder={"ادرس وب سایت شما"} 
                    />
                            </div>
                    <div className="flex flex-col-reverse gap-2 md:flex-row md:gap-3">
                        <button
                            className="btn-meet"
                            onClick={handleMeetRequest}
                        >
                            <Calendar size="24" color="#fff" />
                            <span>درخواست جلسه</span>
                        </button>
                        <button className="btn-demo" onClick={handleSubmit}>
                            ساختن بات دمو
                        </button>
                    </div>
                </div>
                <div className="mt-[25px] md:mt-[45px] flex justify-center">
                    <Image
                        src="/images/phone.svg"
                        height="400"
                        width="600"
                        alt="Logo"
                    />
                </div>

                        </div>

                    </div>
                </div>
               
              
                

               

               
               

            {loading && (
                <>
                    <div className="fixed left-0 top-0 z-50 h-full w-full bg-[#ffffff80]"></div>{" "}
                    <>
                        <div className="fixed left-1/2  top-1/2 z-[1000] -translate-x-1/2 -translate-y-1/2">
                            <div className="flex items-center gap-3">
                                <span>در حال دریافت اطلاعات ...</span>
                                <LoaderLottie />
                            </div>
                        </div>
                    </>
                </>
            )}
        </>
    )
}

export default IntroduceSections
