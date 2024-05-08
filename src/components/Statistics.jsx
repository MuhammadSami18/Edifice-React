import { Stats } from "../Data";

const pic = process.env.PUBLIC_URL + '/bg.jpg';
const Statistics = () => {
    return (
        <section className=" bg-slate-800">
            <div className="container px-5 py-24 mx-auto mb-12">
                <div className="flex flex-wrap -m-4 text-center">
                    {Stats.map(item => {
                        return (
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full" key={item.id}>
                                <div className="px-4 py-6 rounded-lg">
                                    {item.icon}
                                    <h2 className="title-font font-medium text-3xl text-[#FF7417] mb-3">{item.value}</h2>
                                    <p className="leading-relaxed font-normal text-white uppercase">{item.title}</p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    )
}

export default Statistics
