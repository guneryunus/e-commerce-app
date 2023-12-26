import axios from 'axios';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface Category {
  id: number;
  name: string;
  slug: string;
  parentId: number;
}

interface Brand {
  id: number;
  name: string;
  slug: string;
}

export const getProducts = async (): Promise<Product[]> => {
  return fetchData('http://localhost:3000/products');
};

export const getCategories = async (): Promise<Category[]> => {
  return fetchData('http://localhost:3000/categories');
};

export const getBrands = async (): Promise<Brand[]> => {
  return fetchData('http://localhost:3000/brands');
};

const fetchData = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('API isteği sırasında bir hata oluştu:', error);
    return [];
  }
};