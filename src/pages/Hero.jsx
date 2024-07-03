import React from 'react';

import Elk from "../assets/Elk.jpg"
import Woods from "../assets/Woods.jpg"

function Hero() {
    return (
        <article>

        <section className=''>
            <img className='h-[95vh] hidden lg:block object-cover object-top w-full lg:object-left-bottom' src={Elk} alt="Two Elk butting heads" />
            <img className='h-[100dvh] block lg:hidden object-cover object-top w-full lg:object-left-bottom ' src={Woods} alt="Forest shot" />
            <div className='flex flex-col absolute top-[10em] lg:top-[5em] overflow-x-hidden w-full  z-10 backdrop-blur-sm bg-zinc-800 bg-opacity-25 text-center lg:text-left lg:pl-10'>
                <h1 className='relative font-Title text-8xl lg:text-[20em] mr-16 text-transparent bg-clip-text bg-gradient-to-br from-background to-zinc-600 underline decoration-zinc-300 decoration-1'>Walker</h1>
                <h1 className='relative bottom-8 pb-2 lg:pb-12 lg:bottom-[8rem] lg:left-[28rem] left-12 underline underline-offset-4 decoration-zinc-300 decoration-1 text-transparent bg-clip-text bg-gradient-to-br from-background to-zinc-600 font-Header text-6xl lg:text-[13em]'>Photography</h1>
            </div>
        </section>
        <div className='h-[40vh] bg-[#252525]'>
            <h3 className=''>Why choose us?</h3>
        </div>
        <div className='h-[40vh] bg-gray-500'>
            <h3 className=''>Why choose us?</h3>
        </div>
        <div className='h-[40vh] bg-zinc-600'>
            <h3 className=''>Why choose us?</h3>
        </div>
        </article>
    );
}

export default Hero;
