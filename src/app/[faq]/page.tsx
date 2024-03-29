"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const Page = () => {  // <-- Updated component name to start with an uppercase letter
    const params = useParams();
  
    return (
        <main className='bg-[#F6F9F4] min-h-screen w-full flex items-center justify-center'>
            <h3 className='tablet:text-xl text-lg font-semibold'>FAQ&apos;s: <span className='text-red-500'>{params.faq}</span></h3>
        </main>
    );
}

export default Page;
