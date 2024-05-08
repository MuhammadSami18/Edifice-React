const Footer = () => {
    return (
        <div>
            <footer className="text-white body-font bg-[#222]">
                <div className="container px-10 py-[86px] flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full mb-10 pr-12">
                            <h2 className="title-font font-semibold text-lg mb-3 uppercase">about</h2>
                            <div className=" font-normal text-sm leading-[22.75px] mt-5">Our core values have been shaped over more than 10 years of delivering the finest construction services to our clients. They stood to the test of time and these principles remain our bedrock lynchpins. We never tried to cut on either quality, the pace of work or any other construction aspect. We stay true to our full promise of efficiency!</div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full">
                            <h2 className="title-font font-semibold text-lg mb-3 uppercase">navigation</h2>
                            <nav className="list-none mb-10">
                                <li className="py-1">
                                    <a className=" hover:text-[#FF7417] cursor-pointer text-[#888] text-sm">About Us</a>
                                </li>
                                <li className="py-1">
                                    <a className=" hover:text-[#FF7417] cursor-pointer text-[#888] text-sm">Our Team</a>
                                </li>
                                <li className="py-1">
                                    <a className=" hover:text-[#FF7417] cursor-pointer text-[#888] text-sm">Our Clients</a>
                                </li>
                                <li className="py-1">
                                    <a className=" hover:text-[#FF7417] cursor-pointer text-[#888] text-sm">Services</a>
                                </li>
                                <li className="py-1">
                                    <a className=" hover:text-[#FF7417] cursor-pointer text-[#888] text-sm">News</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full pr-10">
                            <h2 className="title-font font-semibold text-lg mb-3 uppercase">recent comments</h2>
                            <nav className="list-none mb-10">
                                <li className="py-1">
                                    <a className=" text-[#888] text-sm italic font-normal">Brian Williamson on</a>
                                </li>
                                <li className="pb-3">
                                    <a className="text-base font-normal cursor-pointer hover:text-[#FF7417]">667 Congress Street Project is Finished!</a>
                                </li>
                                <li className="py-1">
                                    <a className=" text-[#888] text-sm italic font-normal">Brian Williamson on</a>
                                </li>
                                <li className="pb-3">
                                    <a className=" text-base font-normal cursor-pointer hover:text-[#FF7417]">Ribbon “Cut” to Open New Bus Center</a>
                                </li>
                                <li className="py-1">
                                    <a className=" text-[#888] text-sm italic font-normal">Brian Williamson on</a>
                                </li>
                                <li>
                                    <a className=" text-base font-normal cursor-pointer hover:text-[#FF7417]">New Doublered Residence Facility</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full">
                            <h2 className="title-font font-semibold tracking-widest text-lg mb-3 uppercase">contacts</h2>
                            <nav className="list-none mb-10 text-sm text-[#888]">
                                <li className="py-2">
                                    <a>Address: 4578 Marmora Road, Glasgow, D04 89GR</a>
                                </li>
                                <li className="py-2">
                                    <a>Phones: <span className="hover:text-[#FF7417] cursor-pointer">(800) 123-0045</span> <span className="hover:text-[#FF7417] cursor-pointer">(800) 123-0045</span></a>
                                </li>
                                <li className="py-2">
                                    <a>E-mail: <span className="hover:text-[#FF7417] cursor-pointer">info@demolink.org</span></a>
                                </li>
                                <li className="py-2">
                                    <a>We are open: Mn-Fr: 10 am-8 pm</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-[#111111]">
                    <div className="container mx-auto py-[22px] px-20 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-[#888] text-sm text-center sm:text-left">Edifice 2023. All Rights Reserved.
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a className="">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="hover:text-[#FF7417] cursor-pointer w-4 h-4" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 ">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="hover:text-[#FF7417] cursor-pointer w-4 h-4" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 hover:text-[#FF7417] cursor-pointer" viewBox="0 0 640 512">
                                    <path d="M386.1 228.5c1.8 9.7 3.1 19.4 3.1 32C389.2 370.2 315.6 448 204.8 448c-106.1 0-192-85.9-192-192s85.9-192 192-192c51.9 0 95.1 18.9 128.6 50.3l-52.1 50c-14.1-13.6-39-29.6-76.5-29.6-65.5 0-118.9 54.2-118.9 121.3 0 67.1 53.4 121.3 118.9 121.3 76 0 104.5-54.7 109-82.8H204.8v-66h181.3zm185.4 6.4V179.2h-56v55.7h-55.7v56h55.7v55.7h56v-55.7H627.2v-56h-55.7z"
                                        className="fill-current" />
                                </svg>

                            </a>
                            <a className="ml-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 hover:text-[#FF7417] cursor-pointer" viewBox="0 0 448 512">
                                    <path d="M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1-60.9 79.2-112.4 118.8-154.6 118.8-26.1 0-48.2-24.1-66.3-72.3C100.3 250 85.3 174.3 56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7 131.8-98.5 34.9-3.4 56.3 20.5 64.4 71.5 28.7 181.5 41.4 208.9 93.6 126.7 18.7-29.6 28.8-52.1 30.2-67.6 4.8-45.9-35.8-42.8-63.3-31 22-72.1 64.1-107.1 126.2-105.1 45.8 1.2 67.5 31.1 64.9 89.4"
                                        className="fill-current" />
                                </svg>
                            </a>
                            <a className="ml-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 hover:text-[#FF7417] cursor-pointer" viewBox="0 0 576 512">
                                    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
                                        className="fill-current" />
                                </svg>
                            </a>
                            <a className="ml-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 hover:text-[#FF7417] cursor-pointer" viewBox="0 0 496 512">
                                    <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"
                                        className="fill-current" />
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
