import { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../App.css'
import { Carousel } from 'react-responsive-carousel';
import { hover } from '@testing-library/user-event/dist/hover';
const img1 = process.env.PUBLIC_URL + '/01.jpg';
const img2 = process.env.PUBLIC_URL + '/02.jpg';
const img3 = process.env.PUBLIC_URL + '/03.jpg';
class HeroSlider extends Component {
    render() {
        return (
            <Carousel className='text-white mb-16 relative' infiniteLoop={true} useKeyboardArrows={true} autoPlay={true} interval={2000} stopOnHover={false} showIndicators={true} showThumbs={false}>
                <div className='relative'>
                    <img src={img1} className='w-full h-[110vh] brightness-50' />
                    <div className="absolute top-[320px] left-[390px]  flex flex-col w-[800px] justify-center items-center lineUp">
                        <div className='leading-[70px] tracking-[0.5px]  text-[60px] font-semibold uppercase'>RELIABLE CONSTRUCTION SERVICES</div>
                        <div className='text-[20px] leading-[30px] font-semibold tracking-[0.5px] px-20 uppercase'>Edifice creates and implements sustainable construction projects for you.</div>
                        <div className='flex flex-row mt-12 gap-10'>
                            <button className="flex-shrink-0 text-white bg-black border-0 py-3 px-6 focus:outline-none hover:bg-[#FF7417] text-sm mt-10 sm:mt-0 uppercase">see services</button>
                            <button className="flex-shrink-0 text-white bg-[#FF7417] border-0 py-3 px-6 focus:outline-none hover:bg-black text-sm mt-10 sm:mt-0 uppercase">Contact Us</button>
                        </div>
                    </div>
                </div>
                <div className=' relative'>
                    <img src={img2} className='w-full h-[110vh] brightness-50'/>
                    <div className="absolute top-[320px] left-[390px]  flex flex-col justify-center items-center lineUp">
                        <div className='leading-[70px] tracking-[0.5px]  text-[60px] font-semibold uppercase'>Edifice</div>
                        <div className='text-[40px] leading-[50px] font-semibold tracking-[0.5px] uppercase'>Experienced Construction Professionals</div>
                        <div className='flex flex-row mt-12 gap-10'>
                            <button className="flex-shrink-0 text-white bg-[#FF7417] border-0 py-3 px-6 focus:outline-none hover:bg-black text-sm mt-10 sm:mt-0 uppercase">see services</button>
                            <button className="flex-shrink-0 text-white bg-black border-0 py-3 px-6 focus:outline-none hover:bg-[#FF7417] text-sm mt-10 sm:mt-0 uppercase">Contact Us</button>
                        </div>
                    </div>
                </div>
                <div className=' relative'>
                    <img src={img3} className='w-full h-[110vh] brightness-50' />
                    <div className="absolute top-[320px] left-[100px]  flex flex-col items-start lineRight">
                        <div className='leading-[70px] tracking-[0.5px]  text-[60px] font-semibold w-[900px] uppercase text-left mb-16'>we can handle the most ambitious projects</div>
                        <button className="flex-shrink-0 text-white bg-[#FF7417] border-0 py-3 px-6 focus:outline-none hover:bg-black text-sm mt-10 sm:mt-0 uppercase">Contact Us</button>
                    </div>
                </div>
            </Carousel>
        );
    }
};

export default HeroSlider
