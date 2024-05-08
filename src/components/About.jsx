import { AboutUs } from "../Data"

const About = () => {
    return (
        <div>
            <div className="text-center mb-24">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 uppercase">About us</h1>
                <div className="flex mt-6 justify-center">
                    <div className="w-12 h-[1px] rounded-full bg-[#FF7417] inline-flex"></div>
                </div>
                <div className="flex justify-center mt-10 gap-[170px] flex-wrap">
                    <div className="w-1/3">
                        <div className=" text-left text-[13px] leading-[26px] font-normal">For over 30 years, commitment to our Core Values has made Edifice Construction Company the ideal building partner for the region’s most forward-thinking organizations. Our success comes from a steadfast commitment to the client’s vision and a culture of balance, integrity, leadership, and dedication to our customers.</div>
                        {AboutUs.map(item => {
                            return (
                                <div className="flex gap-2 ml-6 pt-12" key={item.id}>
                                    <div>
                                        {item.icon}
                                    </div>
                                    <div className=" text-left">
                                        <div className=" font-semibold text-lg uppercase hover:text-[#FF7417] cursor-pointer">{item.name}</div>
                                        <div className=" leading-[26px] font-normal text-[13px] mt-[10px]">{item.info}</div>
                                    </div>
                                </div>
                            )

                        })}
                    </div>
                    <div><img className="w-[655px] h-[600px]" src="https://livedemo00.template-help.com/wt_prod-19302/images/home-variant-3-555x500.jpg" alt="" /></div>
                </div>
            </div>
        </div >
    )
}

export default About
