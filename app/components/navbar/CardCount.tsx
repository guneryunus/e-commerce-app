"use client"
import useCard from "@/hooks/useCard";
import { SlBasketLoaded } from "react-icons/sl";
const CardCount = () => {
  const {cardProducts} = useCard()
  return (
    <div className="hidden md:flex relative">
      <SlBasketLoaded size="30" />
      <div className="absolute -top-1 -right-3 text-s bg-orange-800 w-5 h-5 rounded-full flex items-center justify-center">{cardProducts?.length}</div>
    </div>
  )
}

export default CardCount