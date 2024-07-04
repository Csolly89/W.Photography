import React from 'react';

import Elk from "../assets/Elk.jpg"
import Woods from "../assets/Woods.jpg"
import TestCard from '../components/TestCard';

const reviews = [
    {
        client: "Jane Smith",
        event: "Capturing wedding memories",
        testimonial: "I recently had the pleasure of working with John Doe Photography for my engagement photos, and I couldn't be more thrilled with the results! From the initial consultation to the final delivery of the photos, John was professional, creative, and incredibly talented. John has an amazing eye for detail and a knack for capturing the perfect moment. During our photo session, he made us feel comfortable and at ease, which really came through in the photos. He took the time to understand our vision and worked tirelessly to bring it to life. The final images were stunning – vibrant, crisp, and full of emotion. We were absolutely blown away by his ability to capture the essence of our relationship in such a beautiful way.",
    
    },
    {
        client: "Jane Smith",
        event: "Capturing wedding memories",
        testimonial: "I recently had the pleasure of working with John Doe Photography for my engagement photos, and I couldn't be more thrilled with the results! From the initial consultation to the final delivery of the photos, John was professional, creative, and incredibly talented. John has an amazing eye for detail and a knack for capturing the perfect moment. During our photo session, he made us feel comfortable and at ease, which really came through in the photos. He took the time to understand our vision and worked tirelessly to bring it to life. The final images were stunning – vibrant, crisp, and full of emotion. We were absolutely blown away by his ability to capture the essence of our relationship in such a beautiful way.",
    
    },
    {
        client: "Jane Smith",
        event: "Capturing wedding memories",
        testimonial: "I recently had the pleasure of working with John Doe Photography for my engagement photos, and I couldn't be more thrilled with the results! From the initial consultation to the final delivery of the photos, John was professional, creative, and incredibly talented. John has an amazing eye for detail and a knack for capturing the perfect moment. During our photo session, he made us feel comfortable and at ease, which really came through in the photos. He took the time to understand our vision and worked tirelessly to bring it to life. The final images were stunning – vibrant, crisp, and full of emotion. We were absolutely blown away by his ability to capture the essence of our relationship in such a beautiful way.",
    
    },
    {
        client: "Jane Smith",
        event: "Capturing wedding memories",
        testimonial: "I recently had the pleasure of working with John Doe Photography for my engagement photos, and I couldn't be more thrilled with the results! From the initial consultation to the final delivery of the photos, John was professional, creative, and incredibly talented. John has an amazing eye for detail and a knack for capturing the perfect moment. During our photo session, he made us feel comfortable and at ease, which really came through in the photos. He took the time to understand our vision and worked tirelessly to bring it to life. The final images were stunning – vibrant, crisp, and full of emotion. We were absolutely blown away by his ability to capture the essence of our relationship in such a beautiful way.",
    
    },
    {
        client: "Jane Smith",
        event: "Capturing wedding memories",
        testimonial: "I recently had the pleasure of working with John Doe Photography for my engagement photos, and I couldn't be more thrilled with the results! From the initial consultation to the final delivery of the photos, John was professional, creative, and incredibly talented. John has an amazing eye for detail and a knack for capturing the perfect moment. During our photo session, he made us feel comfortable and at ease, which really came through in the photos. He took the time to understand our vision and worked tirelessly to bring it to life. The final images were stunning – vibrant, crisp, and full of emotion. We were absolutely blown away by his ability to capture the essence of our relationship in such a beautiful way.",
    
    },
    {
        client: "Jane Smith",
        event: "Capturing wedding memories",
        testimonial: "I recently had the pleasure of working with John Doe Photography for my engagement photos, and I couldn't be more thrilled with the results! From the initial consultation to the final delivery of the photos, John was professional, creative, and incredibly talented. John has an amazing eye for detail and a knack for capturing the perfect moment. During our photo session, he made us feel comfortable and at ease, which really came through in the photos. He took the time to understand our vision and worked tirelessly to bring it to life. The final images were stunning – vibrant, crisp, and full of emotion. We were absolutely blown away by his ability to capture the essence of our relationship in such a beautiful way.",
    
    }
]

// const scrollers = documnet.querySelectorAll(".scroller");
// if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
//     addAnimation()
// }

// function addAnimation() {
//     scrollers.forEach(scroller => {
//         scroller.setAttribute("data-animated", true)
//     })
// }

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
                <h3 className=''>Features</h3>
            </div>
            <div className='h-[40vh] bg-zinc-600'>
                <h3 className=''>Features list</h3>
            </div>

{/* 

            <div className='h-[50em] bg-stone-600 text-background font-Body'>
                <h3>Testimonals</h3>
                <div className=''>
                    <ul className=''>
                        {reviews.map((r,i) => (
                            <li key={i}>
                                <TestCard client={r.client} event={r.event} testimonial={r.testimonial}  />
                            </li>
                        ))}
                    </ul>
                </div>
            </div> */}



            <section className='h-80vh'>
                <h3>Call to action</h3>
            </section>
            <footer>
                <>footer</>
            </footer>
        </article>
    );
}

export default Hero;
