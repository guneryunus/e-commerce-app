"use client"

import Heading from "../general/Heading"
import { useEffect, useState } from 'react';
import { getProducts } from '../../../utils/api';
import ProductCard from "./ProductCard";

interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
  }
  const Products: React.FC = () => {

    const [products, setProducts] = useState<Product[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await getProducts();
        setProducts(data);
      };
  
      fetchData();
    }, []);
  
  return (
    <div>
        <Heading text="Tüm Ürünler"/>
        <div className="flex flex-wrap items-center gap-3 px:3 md:px-10">
                {products.map(product=>(
                    <ProductCard key={product.id} product={product}/>
                ))}
        </div>
    </div>
  )
}

export default Products
