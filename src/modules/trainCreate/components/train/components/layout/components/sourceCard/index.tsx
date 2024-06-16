import useDateSource from "@/src/modules/trainCreate/hooks/useDataSource"

const SourceCard = () => {
    const { textInputCharNumber, qaList,urlList,fileList,createBot,isLoading } = useDateSource();
    const QandACharCount = qaList.reduce(
        (total, qa) => total + qa.question.length + qa.answer.length,
        0,
    );

    const handleCrateBot = async (event:any)=>{
        event.preventDefault();

        await createBot();
    };

    return (
        <div className="mt-18  h-fit w-full  rounded-xl  border bg-white p-2">
            <div className="p-4">
                <div className="text-center text-xl font-semibold lg:mb-2">
                    منابع اطلاعات
                </div>
                <div className="mb-4 flex flex-col space-y-2">
                    {/* <div className="text-sm text-zinc-700">2 Files (1,180 chars)</div> */}
                    {textInputCharNumber > 0 && (
                        <div className="text-sm text-zinc-700">
                            {" "}
                            {textInputCharNumber} عدد کارکتر متن{" "}
                        </div>
                    )}
                     {urlList.length > 0 && (
                        <div className="text-sm text-zinc-700">
                        {urlList.length} عدد لینک‌
                        </div>
                    )}
                      {fileList.length > 0 && (
                        <div className="text-sm text-zinc-700">
                        {fileList.length} عدد فایل
                        </div>
                    )}
                    {qaList.length > 0 && (
                        <div className="text-sm text-zinc-700">
                            {" "}
                            {qaList.length} عدد پرسش و پاسخ ({QandACharCount}{" "}
                            کارکتر)
                        </div>
                    )}
                </div>
                <p className="flex flex-col text-sm">
                    <span className="font-semibold">
                        {" "}
                        مجموع کارکترهای استفاده شده:
                    </span>
                    <span className="flex justify-center gap-1">
                        <span className=" text-zinc-500"> 400,000 / </span>
                        <span className="font-bold">
                            {textInputCharNumber + QandACharCount}
                        </span>
                    </span>
                </p>
                <div className="mt-4 flex justify-center">
                    <button
                    onClick={handleCrateBot}
                    disabled={isLoading}
                     className="rounded-xl bg-[#2563eb] p-3 text-[14px] text-white">
                        آموزش چت بات جدید
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SourceCard