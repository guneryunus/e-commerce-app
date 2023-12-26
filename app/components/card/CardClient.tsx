"use client"
import useCard from "@/hooks/useCard"
import PageContainer from "../container/PageContainer"
import Image from "next/image"
import currencyFormatter from 'currency-formatter';
import Button from "../general/Button";

const CardClient = () => {
    const {cardProducts} = useCard()
    console.log("cardProducts-cardProducts-cardProducts",cardProducts)
    if(!cardProducts || cardProducts.length==0){
        return <PageContainer><div> Sepetinizde Ürün Yoktur.</div></PageContainer>
    }
  return (
    <div className="my-3 md:my-10">
        <PageContainer>
            <div className="flex items-center gap-3 text-center border-b py-3">
                <div className="w-1/5">Ürün Resmi</div>
                <div className="w-1/5">Ürün Adı</div>
                <div className="w-1/5">Ürün Müktarı</div>
                <div className="w-1/5">Ürün Fiyatı</div>
            </div>
            <div >
                {
                    cardProducts.map(card => (
                        <div className="flex items-center text-center" key={card.id} >
                            <div className="w-1/4 flex imtes-center justify-center my-3 md:my-6">
                                <Image src={card?.image} width={60} height={60} alt="soldProduct"/>
                            </div>
                            <div className="w-1/5">{card?.name}</div>
                            <div className="w-1/5">{card?.quantity}</div>
                            <div className="w-1/5 text-orange-600 text-lg font-bold">{currencyFormatter.format(card?.price*card?.quantity, { code: 'USD' })}</div>
                            <div className="w-1/5">
                                <Button text="Sil" small outline onClick={()=>{}}/>
                            </div>
                        </div>
                    ))
                }
            </div>
        </PageContainer>
    </div>
  )
}

export default CardClient