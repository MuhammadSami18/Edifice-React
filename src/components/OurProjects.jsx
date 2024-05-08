import React from 'react'
import { Projects } from '../Data'

export const OurProjects = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto">
                <div className="flex flex-col text-center w-full mb-10">
                    <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-2 uppercase">our projects</h1>
                    <div className="flex mt-3 justify-center">
                        <div className="w-12 h-[1px] rounded-full bg-[#FF7417] inline-flex"></div>
                    </div>
                </div>
                <div className="flex flex-wrap -m-4 mx-10">
                    {Projects.map((item) => {
                        return (
                            <div className="lg:w-1/3 sm:w-1/2 p-4 mb-5" key={item.id}>
                                <div className="flex relative cursor-pointer">
                                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={item.img} />
                                    <div className="px-8 py-6 relative z-10 w-full bg-[#FF7417]  opacity-0 hover:opacity-80 flex flex-col justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                        </svg>
                                        <div className="tracking-widest text-sm title-font font-medium text-white my-3 italic">{item.title}</div>
                                        <div className="title-font text-2xl font-medium text-white mb-4 uppercase">{item.heading}</div>
                                        <div className="flex mb-4 mt-2 justify-center">
                                            <div className="w-28 h-[1px] rounded-full bg-white inline-flex"></div>
                                        </div>
                                        <div className="leading-relaxed text-white font-medium text-base mt-3 text-center">Professional construction services</div>
                                        <div className='absolute right-0 bottom-0'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export const ProjectHero = () => {
    return (
        <section className="text-gray-50 body-font bg-[#FF7417] mb-16 mt-5">
            <div className="container py-16 mx-auto">
                <div className="px-[95px] flex flex-col sm:flex-row sm:items-center items-start">
                    <div className="flex-grow sm:pr-16 text-3xl font-semibold title-font leading-[43px] tracking-wider uppercase">
                        <div>If you can envision it, then we can build it. <br/>Tell us more about your project!</div>
                    </div>
                    <button className="flex-shrink-0 text-black bg-white border-0 py-3 px-6 focus:outline-none hover:bg-black hover:text-white text-sm mt-10 sm:mt-0 uppercase">Contact Us</button>
                </div>
            </div>
        </section>
    )
}
