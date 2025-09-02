

type CardProps = {
    title: string;
    description: string;
    imageUrl: string;
}

const cards: CardProps[] = [
    {
        title: "Global benefits",
        description: "One place to start, manage and scale your benefits globally",
        imageUrl: "/market-(1).png"
    },
    {
        title: "Automated",
        description: "Sync your HR tools and watch your benefits work on autopilot",
        imageUrl: "/market-(2).png"
    },
    {
        title: "Efficiency",
        description: "Meet your auto-enrol pension requirements in the UK and Ireland",
        imageUrl: "/market-(3).png"
    }
]

const Marketing = () => {
    return (
        <div className='min-h-screen w-full relative overflow-hidden pt-30 pb-20' id="features">

            <div className="text flex flex-col justify-center items-center gap-5">
                <p className="w-[250px] text-[var(--darkGreenColor)] bg-[#96ef7686] rounded-full font-thin text-center text-xs sm:text-sm py-0.5">BRANDS THAT TRUSTED US</p>
                <h1 className="text-2xl text-center sm:text-5xl font-bold leading-tight mb-4 w-full max-w-4xl font-[sora]">Revolutionize Your Email Marketing Campaigns with Global Benefits</h1>
            </div>

            <div className="cards flex flex-wrap gap-4 justify-center items-center mt-10 px-5 sm:px-0">
                {cards.map((card, index) => (
                    <div key={index} className="w-full sm:w-[350px] md:h-[363px]  bg-gray-200 rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl  text-gray-800 mb-2 font-bold">{card.title}</h3>
                            <p className="text-gray-700 font-medium">{card.description}</p>
                        </div>
                        <div className="relative group px-6">
                            <img src={card.imageUrl} alt="Card Image"
                                className={` ${index === 2 ? 'h-50' : ''} object-cover mx-auto transition-transform duration-300 group-hover:scale-105`} />
                        </div>
                    </div>
                ))}
            </div>
            <div className="cards flex flex-wrap gap-4 justify-center items-center mt-5 px-5 sm:px-0">
                <div className="w-full sm:w-[530px] md:h-[363px]  bg-gray-200 rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                        <h3 className="text-xl  text-gray-800 mb-2 font-bold">Affordability </h3>
                        <p className="text-gray-700 font-medium">Control spend, remove reporting admin, and say goodbye to broker fees</p>
                    </div>
                    <div className="relative group p-6">
                        <img src={'/market-(4).png'} alt="Card Image"
                            className={`  object-cover mx-auto transition-transform duration-300 group-hover:scale-105`} />
                    </div>
                </div>
                <div className="w-full sm:w-[530px] md:h-[363px]  bg-gray-200 rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                        <h3 className="text-xl  text-gray-800 mb-2 font-bold">All-in-one Place</h3>
                        <p className="text-gray-700 font-medium">Manage policies from multiple providers in one single platform</p>
                    </div>
                    <div className="relative group p-6">
                        <img src={'/market-(5).png'} alt="Card Image"
                            className={`  object-cover mx-auto transition-transform duration-300 group-hover:scale-105`} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Marketing