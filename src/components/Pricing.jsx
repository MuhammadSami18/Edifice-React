import React from 'react'
import { Price } from '../Data'

const Pricing = () => {
    return (
        <section className="text-[#222] text-sm  font-normal body-font overflow-hidden bg-[#f8f8f8]">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-10">
                    <h1 className="sm:text-3xl text-[30px] font-semibold title-font text-gray-900 mb-2 uppercase">Pricing</h1>
                    <div className="flex mt-3 justify-center">
                        <div className="w-12 h-[1px] rounded-full bg-[#FF7417] inline-flex"></div>
                    </div>
                </div>
                <div className=" flex flex-wrap -m-4 mx-16" >
                    {Price.map((item) => {
                        const {info}=item
                        return (
                            <div className="p-4 xl:w-1/4 md:w-1/2 w-auto" key={item.id}>
                                <div className="h-full p-6 border-[1px] border-[#ececee] flex flex-col relative overflow-hidden justify-center items-center">
                                    <div className="text-xl leading-[30px] tracking-[0.5] font-semibold mt-10 uppercase">{item.title}</div>
                                    <div className="text-[40px] text-[#FF7414] pb-4 mb-4 leading-[80px] font-thin">${item.price}<span className=' text-sm font-normal text-black'>/monthly</span></div>
                                    <div className="flex justify-center mb-10">
                                        <div className="w-60 h-[1px] rounded-full bg-[#ececee] inline-flex"></div>
                                    </div>
                                    <div className="mb-3">{info.h1}</div>
                                    <div className="mb-3">{info.h2}</div>
                                    <div className="mb-3">{info.h3}</div>
                                    <div className="mb-10">{info.h4}</div>
                                    <button className=" mt-auto text-white leading-[17px] tracking-[0.5] bg-[#FF7414] py-3 px-[25px] hover:bg-black mb-10 uppercase">Buy Now</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Pricing
