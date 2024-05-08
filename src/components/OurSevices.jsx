import { Services } from "../Data"

const OurSevices = () => {
  return (
    <div>
      <section className="text-black body-font">
        <div className="container px-5 pt-0 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-3xl text-[30px] font-semibold title-font text-gray-900 mb-2 uppercase">our services</h1>
            <div className="flex mt-3 justify-center">
              <div className="w-12 h-[1px] rounded-full bg-[#FF7417] inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap mx-[50px]">
            {Services.map(item => {
              return(
                <div className="xl:w-1/3 md:w-1/2 p-2 flex flex-wrap mb-8" key={item.id}>
              <div className="p-6 flex gap-5">
                <div>
                  {item.icon}
                </div>
                <div>
                  <div className="text-lg font-semibold tracking-[0.5px] title-font mb-2 uppercase"><span className="hover:text-[#FF7417] cursor-pointer">{item.title}</span></div>
                  <div className="leading-[26px] text-[13px] text-justify">{item.info}</div>
                </div>
              </div>
            </div>
              )
            })}
            
          </div>
        </div>
      </section>
    </div>
  )
}
export default OurSevices
