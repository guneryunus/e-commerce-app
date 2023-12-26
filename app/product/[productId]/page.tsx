"use client"
import DetailClient from "@/app/components/detail/DetailClient"
import { getProducts } from "@/utils/api";
import { useEffect, useState } from "react";

type DetailProps = {
    productId: number
}

interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
  }

const Detail = ({params}:{params: DetailProps}) => {

    const [products, setProducts] = useState<Product[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await getProducts();
        setProducts(data);
      };
  
      fetchData();
    }, []);
  
    const {productId} = params
    console.log("id",params)
    const product = products.find(product=> product.id == productId)

  return (
    <div>
        <DetailClient product={product} />
    </div>
  )
}

export default Detail