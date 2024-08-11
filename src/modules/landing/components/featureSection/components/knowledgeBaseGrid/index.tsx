"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import { DocumentText1, Global, SearchNormal1, Text } from "iconsax-react"
import Image from "next/image"

const KnowledgeBaseGrid = () => {
    const mainRef = useRef(null)
    const isInView = useInView(mainRef, { once: true })

    const animController = useAnimation()

    useEffect(() => {
        if (isInView) {
            animController.start("visible")
        }
    }, [isInView])
    return (
        <div className="grid w-[80%] grid-cols-1 md:grid-cols-2 gap-4 py-20" ref={mainRef}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: "+20%" },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 1 }}
                style={{
                    background:"linear-gradient(#fff,#fafafa) padding-box,linear-gradient(120deg,#d4d4d8,#f4f4f5,#d4d4d8) border-box"
                }}
                className="flex items-center justify-between rounded-md border border-gray-300 p-4 shadow-md"
            >
                <div>
                    <h3 className="text-lg ">وب‌سایت</h3>
                    {/* <h5 className="text-gray-400">سلام سلام سلام سلام</h5> */}
                </div>
                <div
                    style={{
                        //background: "rgba(136, 70, 195, 0.1)",
                        position: "relative",
                    }}
                    className="flex h-[50px] w-[50px] items-center justify-center "
                >
                    <Image src={"/logos/web4.png"} alt={""} layout="fill" />
                </div>
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: "-20%" },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 1 }}
                style={{
                    background:"linear-gradient(#fff,#fafafa) padding-box,linear-gradient(120deg,#d4d4d8,#f4f4f5,#d4d4d8) border-box"
                }}
                className="flex items-center justify-between rounded-md border border-gray-300 p-4 shadow-md"
            >
                <div>
                    <h3 className="text-lg ">سؤالات متداول</h3>
                    {/* <h5 className="text-gray-400">سلام سلام سلام سلام</h5> */}
                </div>
                <div
                    style={{
                        //background: "rgba(136, 70, 195, 0.1)",
                        position: "relative",
                    }}
                    className="flex h-[50px] w-[50px] items-center justify-center "
                >
                    <Image src={"/logos/qa.png"} alt={""} layout="fill" />
                </div>
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: "+20%" },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 1, delay: 0.4 }}
                className="flex items-center justify-between rounded-md border border-gray-300 p-4 shadow-md"
            >
                <div>
                    <h3 className="text-lg ">اسناد پی‌دی‌اف</h3>
                    {/* <h5 className="text-gray-400">سلام سلام سلام سلام</h5> */}
                </div>
                <div
                    style={{
                        //background: "rgba(136, 70, 195, 0.1)",
                        position: "relative",
                    }}
                    className="flex h-[50px] w-[50px] items-center justify-center "
                >
                    <Image src={"/logos/pdf.png"} alt={""} layout="fill" />
                </div>
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: "-20%" },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 1, delay: 0.4 }}
                className="flex items-center justify-between rounded-md border border-gray-300 p-4 shadow-md"
            >
                <div>
                    <h3 className="text-lg ">اسناد ورد</h3>
                    {/* <h5 className="text-gray-400">سلام سلام سلام سلام</h5> */}
                </div>
                <div
                    style={{
                        //background: "rgba(136, 70, 195, 0.1)",
                        position: "relative",
                    }}
                    className="flex h-[50px] w-[50px] items-center justify-center "
                >
                    <Image src={"/logos/word.png"} alt={""} layout="fill" />
                </div>
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: "+20%" },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex items-center justify-between rounded-md border border-gray-300 p-4 shadow-md"
            >
                <div>
                    <h3 className="text-lg ">گوگل درایو</h3>
                    {/* <h5 className="text-gray-400">سلام سلام سلام سلام</h5> */}
                </div>
                <div
                    style={{
                        //background: "rgba(136, 70, 195, 0.1)",
                        position: "relative",
                    }}
                    className="flex h-[50px] w-[50px] items-center justify-center "
                >
                    <Image src={"/logos/drive.png"} alt={""} layout="fill" />
                </div>
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: "-20%" },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex items-center justify-between rounded-md border border-gray-300 p-4 shadow-md"
            >
                <div>
                    <h3 className="text-lg ">سایر اسناد متنی</h3>
                    {/* <h5 className="text-gray-400">سلام سلام سلام سلام</h5> */}
                </div>
                <div
                    style={{
                        //background: "rgba(136, 70, 195, 0.1)",
                        position: "relative",
                    }}
                    className="flex h-[50px] w-[50px] items-center justify-center "
                >
                    <Image src={"/logos/txt.png"} alt={""} layout="fill" />
                </div>
            </motion.div>
        </div>
    )
}

export default KnowledgeBaseGrid
