type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  button: string;
  date: string;
}

const cards: CardProps[] = [
  {
    title: "Global benefits",
    description: "Crafting Irresistible Subject Lines: The Key to Email Marketing Success",
    imageUrl: "/Rectangle15-(1).png",
    button: "Marketing",
    date: "May 19, 2023"
  },
  {
    title: "Automated",
    description: "The Power of Personalization: How Tailored Content Drives Email Engagement",
    imageUrl: "/Rectangle15-(2).png",
    button: "Sales",
    date: "Aug 15, 2021"
  },
  {
    title: "Efficiency",
    description: "Automation Unleashed: Streamlining Your Email Marketing with Workflows",
    imageUrl: "/Rectangle15-(3).png",
    button: "Marketing",
    date: "Sep 15, 2024"
  }
]

const Blogs = () => {
  return (
    <div className='min-h-screen  max-w-7xl mx-auto sm:my-20 '>

      <div className="text flex flex-col my-6 gap-5 p-6">
        <p className="w-[250px] text-[var(--darkGreenColor)] bg-[#96ef7686] rounded-full font-thin text-center text-xs sm:text-sm py-0.5">BRANDS THAT TRUSTED US</p>
        <h1 className="text-2xl sm:text-4xl font-bold leading-tight w-full max-w-4xl font-[sora]">Our Blog</h1>
        <p className="max-w-3xl w-full text-xs sm:text-sm py-0.5">At EmailGigga, we take immense pride in providing a cutting-edge email marketing solution that empowers businesses to achieve unparalleled success. But don't just take our word for it - listen to what our valued users have to say about their experience with EmailGigga!</p>
      </div>
      <div className="cards flex flex-wrap gap-2 xl:justify-between justify-center items-center mt-10 p-5">
        {cards.map((card, index) => (
          <div key={index} className="w-full sm:w-[420px] border-1 border-gray-200 rounded-3xl shadow-md overflow-hidden pt-4">
            <div className="relative group px-6">
              <img src={card.imageUrl} alt="Card Image"
                className={`w-full object-cover mx-auto transition-transform duration-300 group-hover:scale-105`} />
            </div>
            <div className="flex justify-between items-center px-6 mt-4 mb-2">
              <span className={`w-[120px]  ${index == 1 ? 'bg-[#FFF5E7] text-[#F29100]': 'bg-[#96ef7686] text-[var(--darkGreenColor)]' } rounded-full font-thin text-center text-xs sm:text-sm py-0.5`}>{card.button}</span>
                <span className="text-sm text-end leading-tight  w-full max-w-4xl font-[sora]">{card.date}</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl  text-gray-800 mb-2 font-bold">{card.title}</h3>
              <p className="text-gray-700 font-medium">{card.description}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Blogs