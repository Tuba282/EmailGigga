
type CardProps = {
    title: string;
    description: string;
    imageUrl: string;
}

const cards: CardProps[] = [
    {
        title: "Advanced Automation",
        description: "Say goodbye to manual tasks and hello to efficiency! Our robust automation features allow you to automate every aspect of your email.",
        imageUrl: "/image-62-(3).png"
    },
    {
        title: "Dynamic Personalization",
        description: "Engage your audience like never before with personalized emails tailored to their interests, behaviors, and preferences.",
        imageUrl: "/image-62-(2).png"
    },
    {
        title: "Powerful Analytics",
        description: "Knowledge is power! Gain valuable insights into the performance of your email campaigns with our powerful analytics tools.",
        imageUrl: "/image-62-(1).png"
    }
]

const textImage = () => {
    return (
        <section className="sm:mt-6 min-h-[500px] lg:mt-8 mt-12 max-w-7xl mx-auto my-20 ">

            <div
                className="mt-10 mx-auto max-w-7xl flex lg:justify-between flex-col lg:flex-row">


                <div className="w-full lg:w-[50%] lg:h-[550px] h-[350px]">
                    <img className="h-full w-full object-cover" src="/Featrues.png" alt="" />
                </div>


                <div className="w-full lg:w-[50%] h-[550px] p-8 md:p-15 flex flex-col justify-between items-start bg-[var(--darkGreenColor)]">
                    <div className="text flex flex-col gap-5">
                        <p className="w-[180px] px-2 text-center text-[var(--darkGreenColor)] bg-[#EDFFED] rounded-full font-thin text-xs sm:text-sm py-0.5">CRM sales marketing</p>
                        <h1 className="text-2xl font-bold leading-tight text-white mb-4 w-full max-w-4xl font-[sora]">Increase your sales via email marketing</h1>
                    </div>
                    <div className="flex gap-7">
                        <div className=" text-white text-xs sm:text-sm">
                            <span className="text-2xl md:text-5xl font-bold block mb-2">34%</span>
                            Engage your audience on a whole new level with personalized emails tailored to their interests and behaviors.
                        </div>
                        <div className=" text-white text-xs sm:text-sm">
                            <span className="text-2xl md:text-5xl font-bold block mb-2">50K</span>
                            Our platform is designed to empower you with the tools and features you need to succeed.
                        </div>
                    </div>

                </div>



            </div>

            <div className='min-h-screen w-full relative overflow-hidden pt-30 pb-20 bg-[var(--blackColor)]'>

                <div className="text flex flex-col justify-center items-center">
                    <h1 className="text-2xl px-4 text-white text-center sm:text-4xl font-bold leading-tight mb-4 w-full max-w-3xl font-[sora]">Lots of extra features,</h1>
                    <h1 className="text-2xl px-4 text-white text-center sm:text-4xl font-bold leading-tight mb-4 w-full max-w-3xl font-[sora]">included with all services</h1>
                    <p className="text-[var(--grayColor)] px-3 text-center max-w-3xl w-full text-xs sm:text-sm">With our automated email solutions, you can say goodbye to tedious manual tasks and hello to efficiency and productivity. Our platform empowers you to automate every aspect of your email workflow</p>
                </div>

                <div className="cards flex flex-wrap gap-4 justify-center items-center mt-10 px-5 sm:px-0">
                    {cards.map((card, index) => (
                        <div key={index} className="w-full sm:w-[350px] md:h-[363px]  bg-[#0B0B0B] rounded-lg shadow-md overflow-hidden">
                            <div className="p-6">
                                <h3 className="text-xl  text-center sm:text-left text-[var(--greenColor)] mb-2 font-bold">{card.title}</h3>
                                <p className="text-[var(--grayColor)] text-center sm:text-left font-medium">{card.description}</p>
                            </div>
                            <div className="relative group">
                                <img src={card.imageUrl} alt="Card Image"
                                    className={`h-45 object-cover mx-auto transition-transform duration-300 group-hover:scale-105`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default textImage

/*
<section className="sm:mt-6 min-h-[600px] lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20 bg-[var(--darkGreenColor)]">

            <div
                className="my-10 mx-auto max-w-7xl flex lg:justify-between gap-8 flex-col lg:flex-row">


                <div className="w-full lg:w-[50%] lg:h-[550px] h-[350px] my-4">
                    <img className="h-full w-full object-cover" src="/Featrues.png" alt="" />
                </div>


                <div className="w-full lg:w-[50%] h-[550px]  my-4 p-8 md:p-15 flex flex-col justify-between  items-start">
                    <div className="text flex flex-col gap-5">
                        <p className="w-[180px] text-center px-2 text-[var(--darkGreenColor)] bg-[#EDFFED] rounded-full font-thin text-xs sm:text-sm py-0.5">CRM sales marketing</p>
                        <h1 className="text-2xl font-bold leading-tight text-white mb-4 w-full max-w-4xl font-[sora]">Increase your sales via email marketing</h1>
                    </div>
                    <div className="flex gap-7">
                        <div className=" text-white text-xs sm">
                            <span className="text-2xl md:text-5xl font-bold block mb-2">34%</span>
                            Engage your audience on a whole new level with personalized emails tailored to their interests and behaviors.
                        </div>
                        <div className=" text-white text-xs sm">
                            <span className="text-2xl md:text-5xl font-bold block mb-2">50K</span>
                            Our platform is designed to empower you with the tools and features you need to succeed.
                        </div>
                    </div>

                </div>



            </div>

        </section>



*/ 