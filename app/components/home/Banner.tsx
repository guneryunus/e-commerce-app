import Image from "next/image"
const Banner = () => {
  return (
    <div className="h-[237px] bg-black flex items-center justfiy-center">
        <div className="h-[217px] relative w-full">
            <Image src={"/herseyBanner.webp"} fill alt="" className="object-cover"/>
        </div>
    </div>
  )
}

export default Banner