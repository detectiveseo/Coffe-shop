import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos'

const Hero = () => {
    useEffect(() => {
        AOS.init();
    },)
    return (
        <div className=" bg-[url('/src/img/coffeebean-hero-coffee-cup-mobile.jpg')] lg:bg-[url('/src/img/coffeebean-hero-coffee-cup.jpg')] bg-cover bg-center">
            <div className='w-11/12 mx-auto'>
                <div data-aos="zoom-out-up" className='flex flex-col gap-4 justify-center items-start lg:w-5/12 lg:h-[700px]'>
                    <h1 className='text-7xl font-extralight italic'>Quality Coffee delivered to your Door
                    </h1>
                    <p className='tracking-wide font-sans'>Everything we do is a matter of heart, body and soul. Our mission is to provide sustainably sourced, hand-picked, quality coffee.
                    </p>
                    <button className='btn bg-opacity-100 border px-4 py-3 border-colors-accent font-thin tracking-wide'>SHOP COFFEES</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;