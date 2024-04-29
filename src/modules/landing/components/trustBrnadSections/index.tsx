import Image from "next/image";

const TrustBrnadSections =()=>{
    return(
        <div className="overflow-hidden h-max text-center mt-[150px]">
            <div>
            <p>
        بیش از هزاران کسب و کار آنلاین به ما اعتماد کردند.
        </p>
            </div>
            <div className="mt-[20px] flex justify-around">
        <Image
        //    onClick={() => router.push('/')}
           src="/images/brands/jabama.png" 
           height="70" 
           width="100" 
           alt="Logo" 
           />
         <Image
        //    onClick={() => router.push('/')}
           src="/images/brands/digipay.png" 
           height="70" 
           width="100" 
           alt="Logo" 
           />
            <Image
        //    onClick={() => router.push('/')}
           src="/images/brands/basalam.png" 
           height="70" 
           width="100" 
           alt="Logo" 
           />
             <Image
        //    onClick={() => router.push('/')}
           src="/images/brands/snappmarket.png" 
           height="70" 
           width="100" 
           alt="Logo" 
           />

           <Image
        //    onClick={() => router.push('/')}
           src="/images/brands/banksaman.png" 
           height="70" 
           width="100" 
           alt="Logo" 
           />
            <Image
        //    onClick={() => router.push('/')}
           src="/images/brands/shatel.png" 
           height="70" 
           width="100" 
           alt="Logo" 
           />
         <Image
        //    onClick={() => router.push('/')}
           src="/images/brands/ofoghkorosh.png" 
           height="70" 
           width="100" 
           alt="Logo" 
           />
        <Image
        //    onClick={() => router.push('/')}
           src="/images/brands/rahshahrsazi.png" 
           height="70" 
           width="100" 
           alt="Logo" 
           />
                <Image
        //    onClick={() => router.push('/')}
           src="/images/brands/raja.png" 
           height="70" 
           width="100" 
           alt="Logo" 
           />
        </div>

        </div>
    )
};

export default TrustBrnadSections;