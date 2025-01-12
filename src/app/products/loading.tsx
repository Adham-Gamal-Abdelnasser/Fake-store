import React from 'react';
import Image from 'next/image';
import loading from './../../assets/Infinity@1x-1.0s-200px-200px.gif';

export default function Loading() {
  return (
    <section className='bg-white w-full min-h-screen flex justify-center items-center'>
      <Image src={loading} alt="Loading indicator" width={200} height={200} />
    </section>
  );
}

