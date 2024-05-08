import React, { useState, useEffect } from 'react'
import { Client } from '../Data';

const Testimonial = () => {
    const [slideIndex, setSlideIndex] = useState(1);
    useEffect(() => {
        showSlide(slideIndex);
    }, [slideIndex]);

    function currentSlide(n) {
        setSlideIndex(n);
    }

    function showSlide(n) {
        const slides = document.getElementsByClassName("slide");
        const dots = document.getElementsByClassName('dot');

        if (n > slides.length) {
            setSlideIndex(1);
        }
        if (n < 1) {
            setSlideIndex(slides.length);
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.add('hidden');
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove('bg-[#FF7417]');
            dots[i].classList.add('bg-gray-300');
        }
        slides[slideIndex - 1].classList.remove('hidden');
        dots[slideIndex - 1].classList.remove('bg-gray-300');
        dots[slideIndex - 1].classList.add('bg-[#FF7417]');
    }

    return (
        <section className='mb-14 bg-slate-800'>
            <div className=" flex flex-wrap items-center justify-center pt-28 pb-8">
                <div className="flex flex-col text-center w-full mb-10">
                    <h1 className="sm:text-3xl text-2xl font-bold title-font text-white mb-2 uppercase tracking-[1px]">what people say</h1>
                    <div className="flex mt-3 justify-center">
                        <div className="w-12 h-[1px] rounded-full bg-[#FF7417] inline-flex"></div>
                    </div>
                </div>
                {Client.map((item) => {
                    return (
                        <div className="slide relative flex flex-col items-center w-[700px] gap-8" key={item.id}>
                            <div><img className=' rounded-full w-[100px] h-[100px]' src={item.image} alt="" /></div>
                            <div className=' italic text-base font-medium text-center text-white'>{item.tell}</div>
                            <div className=' text-xl text-white uppercase'>{item.name}</div>
                        </div>
                    )
                })}
            </div>
            <br />
            <div className="flex justify-center items-center space-x-5 pb-20">
                <div className="dot w-4 h-4 rounded-full cursor-pointer hover:bg-[#FF7417]" onClick={() => currentSlide(1)}></div>
                <div className="dot w-4 h-4 rounded-full cursor-pointer hover:bg-[#FF7417]" onClick={() => currentSlide(2)}></div>
                <div className="dot w-4 h-4 rounded-full cursor-pointer hover:bg-[#FF7417]" onClick={() => currentSlide(3)}></div>
            </div>
        </section>
    )
}
export default Testimonial
