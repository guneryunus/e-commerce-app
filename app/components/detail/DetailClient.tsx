"use client"
import { useEffect, useState } from "react"
import PageContainer from "../container/PageContainer"
import Image from "next/image"
import Counter from "../general/Counter"
import currencyFormatter from 'currency-formatter';
import { Rating } from "@mui/material"
import Button from "../general/Button"
import useCard from "@/hooks/useCard"

export type CardProductProps = {
    id: number,
    name:string,
    description:string,
    price: number,
    quantity: number,
    image:string,
}

const DetailClient = ({product}: {product:any}) => {

    const {productCardQty,addToBasket,cardProducts} = useCard()
    const [displayButton, setDisplayButton] = useState(false)

    const [cardProduct, setCardProduct] = useState<CardProductProps>({
        id: product?.id,
        name:product?.name,
        description:product?.description,
        price: product?.price,
        quantity: 1,
        image:product?.image,
    })

    useEffect(() => {
        setCardProduct({
            id: product?.id,
            name: product?.name,
            description: product?.description,
            price: product?.price,
            quantity: 1,
            image: product?.image,
        });
    }, [product]);

    useEffect(()=>{
        if (product && product.id) { 
        setDisplayButton(false)
        if (cardProducts) {
        let controlDisplay :any = cardProducts?.findIndex(card => card.id == product?.id)
        if(controlDisplay > -1){
            setDisplayButton(true)
        }}}
    },[cardProducts,product])

    const increaseFunc = () => {
        if(cardProduct.quantity==10) return
        setCardProduct(prev=>({...prev, quantity: prev.quantity+1}))
    }

    const decreaseFunc = () => {
        if(cardProduct.quantity==1) return
        setCardProduct(prev=>({...prev, quantity: prev.quantity-1}))
    }

  return (
    <div className="my-10">
        <PageContainer>
            <div className="block md:flex gap-10 justify-center">
                <div className="relative  h-[200px] md:h-[400px] w-[200px] md:w-[400px] mb-5 md:mb-0">
                    <Image src={product?.image} fill alt="productImage"/>
                </div>
                <div className=" w-full md:w-1/2 space-y-3">
                    <div className="text-xl md:text-2xl">{product?.name}</div>
                    <Rating name="read-only" value={3} readOnly />
                    <div className="text-slate-500">{product?.description}</div>
                    <div className="flex items-center gap-2">
                        <div>KATEGORİ:</div>
                        <div className="text-green-500">{product?.type}</div>
                    </div>
                    <div className="text-lg md:text-2xl text-orange-600 font-bold">{currencyFormatter.format(product?.price, { code: 'USD' })}</div>
                    {
                        displayButton ? <>
                         <Button text="Ürün Sepete Ekli" small outline onClick={()=>{}} />
                        </> : <>
                        <Counter  increaseFunc={increaseFunc}  decreaseFunc={decreaseFunc} cardProduct={cardProduct}/>
                        <Button text="Sepete Ekle" small outline onClick={()=>addToBasket(cardProduct)} />
                        </>
                    }
                  
                </div>
            </div>
        </PageContainer>
    </div>
  )
}

export default DetailClient