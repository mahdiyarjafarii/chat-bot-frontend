import { Activity, Box2, ChemicalGlass, DollarCircle, Login, Magicpen } from "iconsax-react";

const SetupSection = ()=>{
    return (
        <>
            <div className="container relative mx-auto h-auto overflow-hidden  px-4  text-center 2xl:px-20 pt-[100px]">
            <div className="my-10 md:mt-10">
                <h2 className="text-3xl md:text-5xl">
                   چت بات بدون
                   <span className="gradient-h2 is-v2">
                   &nbsp;دانش برنامه نویسی
                    </span>
                </h2>
                <h3 className="mt-1 text-[12px] md:mt-3 md:text-[16px]">
                راه اندازی فقط در کمتر از 2 دقیقه
                </h3>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 mt-4  mx-auto ">
                    <div className="relative flex flex-col bg-clip-border rounded-xl text-gray-700 bg-zinc-100">
                        <div className="absolute left-4 top-3">
                        <Box2
                           size="32"
                           color="#1d4ed8"
                         />
                        </div>
                       <div className="p-6">
                           <h5 className="block antialiased tracking-normal text-xl font-semibold leading-snug text-blue-gray-900 text-right">مرحله 1</h5>
                           <p className="text-right mb-1 mt-2 font-semibold  text-zinc-900">وارد کردن منابع داده چندگانه</p>
                           <p className="text-sm  text-zinc-500 text-right">
                           لینک وب سایت یا فایل های خود یا متن ها خود را وارد میکنید.
                           </p>
                       </div>


                    </div>
                    <div className="relative flex flex-col bg-clip-border rounded-xl text-gray-700 bg-[#1d4ed8]">
                    <div className="absolute left-4 top-3">
                        <ChemicalGlass
                           size="32"
                           color="#fff"
                         />
                        </div>
                       <div className="p-6">
                           <h5 className="block antialiased tracking-normal text-xl font-semibold leading-snug text-white text-right">مرحله 2</h5>
                           <p className="text-right mb-1 mt-2 font-semibold  text-white">آموزش چت بات</p>
                           <p className="text-sm  text-gray-300 text-right">
                           چت بات را با داده های خود آموزش دهید.
                           </p>
                       </div>


                    </div>
                    <div className="relative flex flex-col bg-clip-border rounded-xl text-gray-700 bg-zinc-100">
                    <div className="absolute left-4 top-3">
                        <Magicpen
                           size="32"
                           color="#1d4ed8"
                         />
                        </div>
                       <div className="p-6">
                           <h5 className="block antialiased tracking-normal text-xl font-semibold leading-snug text-blue-gray-900 text-right">مرحله 3</h5>
                           <p className="text-right mb-1 mt-2 font-semibold  text-zinc-900">نصب و استفاده</p>
                           <p className="text-sm  text-zinc-500 text-right">
                           بدون هیچ دانشی از همیار چت در سایت و یا جاهای مختلفی استفاده کنید.
                           </p>
                       </div>


                    </div>

               </div>  

             </div>
        </>
    )

};
export default SetupSection;