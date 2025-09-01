



const Sales = () => {
    return (
        <section className="sm:mt-6 min-h-[500px] lg:mt-8 mt-12 max-w-7xl mx-auto my-20 ">

            <div
                className="my-10 mx-auto max-w-7xl flex lg:justify-between gap-8 flex-col lg:flex-row">




                <div className="w-full lg:w-[50%] lg:h-[550px]  my-4 md:p-15 flex flex-col gap-8  p-5 items-start">
                    <div className="text flex flex-col gap-5">
                        <p className="w-[180px] text-center px-2 text-[var(--darkGreenColor)] bg-[#EDFFED] rounded-full font-thin text-xs sm:text-sm py-0.5">CRM sales marketing</p>
                        <h1 className="text-2xl sm:text-4xl font-bold leading-tight mb-4 w-full max-w-4xl font-[sora]">Increase your sales via email marketing</h1>
                    </div>
                    <div className="flex flex-col gap-7">
                        <div className="flex gap-6 text-xs sm">
                            <img src="/icon.png" className="w-10 h-10 " alt="" />
                            <div className="  text-xs sm">
                                <span className="text-xl md:text-xl font-bold block mb-2">Simply Copy & Paste</span>
                                Use limited-time offers or exclusive deals to prompt immediate action.
                            </div>
                        </div>
                        <div className="flex gap-6 text-xs sm">
                            <img src="/icon-(1).png" className=" h-10 w-10" alt="" />
                            <div className="  text-xs sm">
                                <span className="text-xl md:text-xl font-bold block mb-2">Optimize for Mobile</span>
                                Ensure emails are mobile-friendly to reach customers on-the-go
                            </div>
                        </div>
                        <div className="flex gap-6 text-xs sm">
                            <img src="/icon-(2).png" className=" h-10 w-10" alt="" />
                            <div className="  text-xs sm">
                                <span className="text-xl md:text-xl font-bold block mb-2">Test and Iterate</span>
                                Continuously test different strategies and analyze results to refine your approach.
                            </div>
                        </div>
                    </div>

                </div>


                <div className="w-full lg:w-[50%] lg:h-[550px] my-4 p-5 md:p-15">
                    <img className="h-full w-full object-cover" src="/Frame-1618873114-(1).png" alt="" />
                </div>

            </div>


            <div
                className="my-10 mx-auto max-w-7xl flex lg:justify-between gap-8 flex-col-reverse lg:flex-row">



                <div className="w-full lg:w-[50%] lg:h-[550px] my-4 p-5 md:p-15">
                    <img className="h-full w-full object-cover" src="/Frame-1618873113.png" alt="" />
                </div>


                <div className="w-full lg:w-[50%] lg:h-[550px]  my-4 md:p-15 flex flex-col gap-8  p-5 items-start">
                    <div className="text flex flex-col">
                        <p className="w-[180px] text-center px-2 text-[var(--darkGreenColor)] bg-[#EDFFED] rounded-full font-thin text-xs sm:text-sm py-0.5">LOCAL BENCHMARK</p>
                        <h1 className="text-2xl sm:text-4xl mt-5 font-bold leading-tight w-full max-w-4xl font-[sora]">Compare against the market</h1>
                        <p className="text-xs sm:text-base">Easily benchmark against local companies and create
                            packages based on market data</p>
                    </div>
                    <div className="flex flex-col gap-7">
                        <div className="flex items-center gap-6 text-xs sm">
                            <img src="/checkbox-circle-fill.png" className="w-5 h-5 " alt="" />
                            <div className="  text-xs sm">
                                Use limited-time offers or exclusive deals to prompt immediate action.
                            </div>
                        </div>
                        <div className="flex items-center gap-6 text-xs sm">
                            <img src="/checkbox-circle-fill.png" className="w-5 h-5 " alt="" />
                            <div className="  text-xs sm">
                                Use limited-time offers or exclusive deals to prompt immediate action.
                            </div>
                        </div>
                        <div className="flex items-center gap-6 text-xs sm">
                            <img src="/checkbox-circle-fill.png" className="w-5 h-5 " alt="" />
                            <div className="  text-xs sm">
                                Use limited-time offers or exclusive deals to prompt immediate action.
                            </div>
                        </div>
                        <div className="flex items-center gap-6 text-xs sm">
                            <img src="/checkbox-circle-fill.png" className="w-5 h-5 " alt="" />
                            <div className="  text-xs sm">
                                Use limited-time offers or exclusive deals to prompt immediate action.
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </section>
    )
}

export default Sales