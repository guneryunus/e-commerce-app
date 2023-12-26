// contex api  contex oluştur ardında usercard function içne bunu göm ...
"use client"
import { CardProductProps } from "@/app/components/detail/DetailClient";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

interface CardContextProps{
    productCardQty: number // toplam miktar..
    cardProducts:CardProductProps[] | null
    addToBasket: (product:CardProductProps) => void 
    deleteFromCard: (product:CardProductProps) => void 
}

const CardContext = createContext<CardContextProps | null>(null)

interface Props {
    [propName: string] :any
}

export const CardContextProvider = (props: Props)=> {
    const [productCardQty, setProductCardQty] = useState(0)
    const [cardProducts, setcardProducts] = useState<CardProductProps[] | null>(null)
    
    useEffect(()=>{
        let getItem: any= localStorage.getItem('card')
        let getItemParse: CardProductProps[] | null = JSON.parse(getItem)
        setcardProducts(getItemParse)
    },[])

    const addToBasket = useCallback((product:CardProductProps)=> {
        // setcardProducts içine setlendi.eğer ürün varsa üzerine ekle.
        setcardProducts(prev => {
            let updatedCard;
            if(prev){
                updatedCard = [...prev,product]
            }else{
                updatedCard = [product]
            }
            toast.success('Ürün Sepete Eklendi.')
            localStorage.setItem('card',JSON.stringify(updatedCard))
            return updatedCard
        })
    }, [cardProducts])

    const deleteFromCard = useCallback((product:CardProductProps)=>{

    }, [])

    let value = {
        productCardQty,
        addToBasket,
        cardProducts,
        deleteFromCard
    }
    return <CardContext.Provider value={value} {...props}/>
}


const useCard = () => {
  const context = useContext(CardContext)
  if(context == null){
    throw new Error('Bir hata var')
  }
  return context
}

export default useCard