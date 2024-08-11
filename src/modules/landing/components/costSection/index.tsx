import { DocumentText1, DollarCircle, Messages3, Timer1 } from "iconsax-react";

const CostSection = () => {
     return (
        <>
           <div className="container relative mx-auto h-auto overflow-hidden mt-12  px-4  text-center 2xl:px-20 pt-[100px]">
           <div className="my-10 md:mt-10">
                <h2 className="text-3xl md:text-5xl">
                دستیار
                <span className="gradient-h2 is-v2">
                {" "}
                 هوشمند
                 {" "}
                    </span>
                  برای
                   <span className="gradient-h2 is-v2">
                   {" "}
                   تحول
                   {" "}
                   
                    </span>
                    کسب‌وکار شما
                </h2>
                <h3 className="mt-1 text-[12px] md:mt-3 md:text-[16px]">
                راه اندازی فقط در کمتر از 2 دقیقه
                </h3>
            </div>
           <div className="grid gap-y-10 gap-x-10 md:grid-cols-2 lg:grid-cols-4 mt-16">
           <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none items-center">
                          <DollarCircle
                            size="28"
                            color="#3b82f6"
                           />
                           <h2 className="block antialiased tracking-normal mb-2 mt-4 text-5xl text-gray-900 font-bold">۵۰٪-</h2>
                           <h5 className="block antialiased tracking-normal text-xl leading-snug mb-2 font-normal ">هزینه های پشتیبانی مشتری</h5>
                           <h6 className="block antialiased tracking-normal text-base leading-relaxed mb-2 font font-normal text-zinc-400"> تا 50 درصد از هزینه های پشتیبانی مشتری خود را به ازای هر نماینده کاهش دهید.</h6>
                    </div>
                    <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none items-center">
                          <Timer1
                            size="28"
                            color="#3b82f6"
                           />
                           <h2 className="block antialiased tracking-normal mb-2 mt-4 text-5xl text-gray-900 font-bold">۳x</h2>
                           <h5 className="block antialiased tracking-normal text-xl leading-snug mb-2 font-normal ">پاسخ سریعتر</h5>
                           <h6 className="block antialiased tracking-normal text-base leading-relaxed mb-2 font font-normal text-zinc-400"> چت بات ما 3 برابر سریعتر از یک انسان پاسخ می دهد.</h6>
                    </div>
                    <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none items-center">
                          <DocumentText1
                            size="28"
                            color="#3b82f6"
                           />
                           <h2 className="block antialiased tracking-normal mb-2 mt-4 text-5xl text-gray-900 font-bold">۱۰۰٪</h2>
                           <h5 className="block antialiased tracking-normal text-xl leading-snug mb-2 font-normal ">دقت</h5>
                           <h6 className="block antialiased tracking-normal text-base leading-relaxed mb-2 font font-normal text-zinc-400">چت بات ما در پاسخ به سوالات دقت ۱۰۰٪ دارد.</h6>
                    </div>
                    <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none items-center">
                         <Messages3
                            size="28"
                            color="#3b82f6"
                           />
                           <h2 className="block antialiased tracking-normal mb-2 mt-4 text-5xl text-gray-900 font-bold">۲۴/۷</h2>
                           <h5 className="block antialiased tracking-normal text-xl leading-snug mb-2 font-normal ">دستیار پشتیبانی</h5>
                           <h6 className="block antialiased tracking-normal text-base leading-relaxed mb-2 font font-normal text-zinc-400">در مقایسه با پشتیبانی استاندارد، چت بات 24/7 برای مشتریان شما در دسترس است.</h6>
                    </div>
                    
                    
                    
                    
                </div>
           </div>
        
        </>
     )

};
export default CostSection;