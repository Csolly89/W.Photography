import React from 'react';

import Elk from "../assets/Elk.jpg"
import Woods from "../assets/Woods.jpg"

function Hero() {
    return (
        <article>
            <section>
                <img className='h-[95vh] invisible lg:visible object-cover object-top w-full lg:object-left-bottom fixed top-0' src={Elk} alt="Two Elk butting heads" />
                <img className='h-full visible lg:invisible object-cover object-top w-full lg:object-left-bottom fixed top-0' src={Woods} alt="Forest shot" />
            </section>
            <section className=''>
                <h2>Feature section "explanations and short details"</h2>
            </section>
            <section>
                <h2>Feature lists</h2>
            </section>
            <section>
                <h2>Testimonials</h2>
            </section>
            <section>
                <h3>Call to action (Contact/Subscribe)</h3>
            </section>
            <footer>
                <h3>Footer</h3>
            </footer>
        </article>
    );
}

export default Hero;