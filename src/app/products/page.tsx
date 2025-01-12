"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../products/loading";
import Link from "next/link";
import Image from "next/image";

export interface Product {
  id: number,
  title: string,
  price: number|string,
  category: string,
  description: string,
  image: string

}

export default function ProductSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    setLoading(true)
    const response = await axios.get('https://fakestoreapi.com/products')
    setProducts(response.data)
    setLoading(false)
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input type="text" placeholder="Search products..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="m-4 border-2 border-slate-900 p-3 rounded-full placeholder:text-slate-900 w-1/2"/>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="flex flex-wrap justify-center">
          {filteredProducts.map((product) => (
            <div key={product.id} className="lg:w-1/4 md:w-1/2 sm:w-full p-1">
            <div className='p-4'>
              <Link href={`/products/${product.id}`}>
                <Image src={product.image} alt={product.title} className='w-full' />
                <h5 className="text-lg font-semibold tracking-tight text-gray-900 ">{product.title}</h5>
                <p className="mt-2 text-sm text-green-500">${product.price}</p>
                <p className="mt-2 text-sm text-gray-500">{product.description.split(' ').slice(0, 10).join(' ')}</p>
              </Link>
            </div>
        </div>
          ))}
        </div>
      )}
    </div>
  );
}


