"use client";
import axios from 'axios';
import React, { useEffect, useState, use } from 'react';
import { Product } from '../page';
import Loading from '../loading';

export default function ProductDetails({ params }: { params: Promise<{ productId: string }> }) {
    const unwrappedParams = use(params);
    const { productId } = unwrappedParams;
    const [loading, setLoading] = useState(false)
    const [productDetails, setProductDetails] = useState<Product | null>(null);

    async function fetchProductDetails() {
        try {
            setLoading(true)
            const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
            setProductDetails(response.data);
            setLoading(false)

        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    }

    useEffect(() => {
        fetchProductDetails();
    }, [productId]);

    return (
      <>
      {!loading? <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          
          <img src={productDetails?.image} alt={`${productDetails?.title} ${productDetails?.description}`} className="rounded-lg bg-gray-100 max-w-sm" />
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{productDetails?.title}</h2>
            <p className="mt-4 text-gray-500">{productDetails?.description}</p>
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-2xl text-gray-900">Price</dt>
                <dd className="mt-2 text-lg text-gray-500">{productDetails?.price}</dd>
              </div>
              
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          
          </div>
        </div>
      </div> : <Loading></Loading>}

  </>
    );
}
