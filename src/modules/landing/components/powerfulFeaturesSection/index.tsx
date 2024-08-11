"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

let cards = [
    {
        title: "منابع داده متعدد",
        subTitle: "وارد کردن داده از منابع متعدد برای آموزش چت‌بات شما.",
        Icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                width="30"
                className="text-blue-500"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                ></path>
            </svg>
        ),
    },
    {
        title: "سفارشی‌سازی",
        subTitle: ` ظاهر و حس چت‌بات خود را مطابق با سبک و طراحی وب‌سایت
                            برند خود سفارشی کنید.`,
        Icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                width="30"
                className="text-blue-500"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                ></path>
            </svg>
        ),
    },
    {
        title: `                             وایت‌ لیبل
`,
        subTitle: `                            حذف برند همیارچت و استفاده از دامنه سفارشی.
`,
        Icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                width="30"
                className="text-blue-500"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                ></path>
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 6h.008v.008H6V6z"
                ></path>
            </svg>
        ),
    },
    {
        title: `                            حریم خصوصی و امنیت
`,
        subTitle: `      داده‌های شما بر روی سرورهای امن با رمزگذاری قوی و
                            کنترل دسترسی میزبانی می‌شوند.
                        `,
        Icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                width="30"
                className="text-blue-500"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                ></path>
            </svg>
        ),
    },
    {
        title: `                            آموزش مجدد خودکار
`,
        subTitle: `    چت‌بات خود را به طور خودکار آموزش دهید و همیشه با
                            داده‌های خود همگام باشید.
                        `,
        Icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                width="30"
                className="text-blue-500"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                ></path>
            </svg>
        ),
    },
    {
        title: `                            یکپارچه‌سازی‌ها
`,
        subTitle: `چت‌بات خود را به ابزارهای مورد علاقه‌تان مانند اسلک،
                            واتساپ، زپی‌یر و بیشتر متصل کنید.
                        `,
        Icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                width="30"
                className="text-blue-500"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
                ></path>
            </svg>
        ),
    },
    {
        title: `                            مدل‌های قدرتمند هوش مصنوعی
`,
        subTitle: `                            از میان مدل‌های مختلف هوش مصنوعی، از جمله
                            GPT-3.5-turbo و GPT-4، انتخاب کنید.
                        </p>
`,
        Icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                width="30"
                className="text-blue-500"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                ></path>
            </svg>
        ),
    },
    {
        title: `                            بیش از ۸۰ زبان
`,
        subTitle: ` به مشتریان خود به زبان مادری‌شان دسترسی پیدا کنید
                            حتی اگر داده‌های شما به زبان دیگری باشد.
                        `,
        Icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                width="30"
                className="text-blue-500"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                ></path>
            </svg>
        ),
    },
]

const PowerfulFeaturesSection = () => {
    let cardCount = 8
    const [activeIndex, setActiveIndex] = useState(0)
    useEffect(() => {
        let startValue = 0
        let intervalId = setInterval(() => {
            setActiveIndex(startValue % cardCount)
            startValue++
            console.log(activeIndex)
        }, 2000)
        return () => clearInterval(intervalId)
    }, [])
    return (
        <div id="hamyar-features" className="section-large container relative mx-auto h-auto overflow-hidden  px-4 text-center 2xl:px-20">
            <div className="mt-10 md:mt-4">
                <h2 className="text-3xl md:text-5xl">
                    <span>ویژگی‌های برجسته   </span>
                    <span className="gradient-h2 is-v2">همیارچت&nbsp;</span>
                </h2>
                <h3 className="mt-1 text-[12px] md:mt-3 md:text-[16px]">
                امکانات پیشرفته پلتفرم همیارچت به شما این امکان را می‌دهد که به‌طور کامل چت‌بات‌ها را مطابق نیاز خود شخصی‌سازی کنید.
                </h3>
            </div>
            <div className="mt-[40px] flex justify-around">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-16 lg:grid-cols-4">
                    {cards.length &&
                        cards.map((card, indx) => (
                            <div
                                key={indx}
                                className="flex flex-col items-start rounded-[10px]  border  px-[13px] py-[18px]"
                                style={{
                                    boxShadow:
                                        indx === activeIndex
                                            ? "rgba(59, 130, 246, 0.74) 1px 4px 10px 0px, rgb(46 88 240 / 63%) 0px 2px"
                                            : "unset",
                                    transition: "all 0.5s ease-in-out",
                                    background:"linear-gradient(#fff,#fafafa) padding-box,linear-gradient(120deg,#d4d4d8,#f4f4f5,#d4d4d8) border-box"
                                }}
                            >
                                {card.Icon}
                                <h5 className="pt-1 text-lg font-medium ">
                                    {card.title}
                                </h5>
                                <p className="mt-2 text-right text-sm font-normal text-zinc-400">
                                    {card.subTitle}
                                </p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default PowerfulFeaturesSection
