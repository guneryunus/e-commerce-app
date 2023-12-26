"use client"
import { Rating } from "@mui/material"
import Image from "next/image"
import currencyFormatter from 'currency-formatter';
import textClip from "@/utils/TextClip";
import { useRouter } from "next/navigation";

const ProductCard = ({product}: {product:any}) => {
  const router = useRouter()

  return (
    <div onClick={()=>router.push(`product/${product.id}`)} className="w-[240px] curser-pointer flex flex-col flex-1 shadow-lg p-2 rounded-md">
      <div className="relative h-[200px]">
        <Image src={product.image} fill alt="" className="object-contain"/>  
      </div>  
      <div className="text-center mt-2 space-y-1">
        <div>{textClip(product.name)}</div>
        <Rating name="read-only" value={product.rating} readOnly />
        <div className="text-orange-600 font-bold text-lg md:text-xl">{currencyFormatter.format(product.price, { code: 'USD' })}</div>
      </div>
    </div>
  )
}

export default ProductCard

