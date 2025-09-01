import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const plans = [
            {
                title: 'Personal',
                price: 5,
                features: [
                    { label: '1 integration', included: true },
                    { label: 'Analytics', included: true },
                    { label: 'Insight', included: true },
                    { label: 'Shared features', included: false },
                    { label: 'No custom setting', included: false },
                ],
                button: 'default',
            },
            {
                title: 'Professional',
                price: 10,
                features: [
                    { label: '1 integration', included: true },
                    { label: 'Analytics', included: true },
                    { label: 'Insight', included: true },
                    { label: 'Shared features', included: true },
                    { label: 'No custom setting', included: false },
                ],
                button: 'highlight',
            },
            {
                title: 'Business',
                price: 15,
                features: [
                    { label: '1 integration', included: true },
                    { label: 'Analytics', included: true },
                    { label: 'Insight', included: true },
                    { label: 'Shared features', included: true },
                    { label: 'No custom setting', included: true },
                ],
                button: 'default',
            },
        ];


const Prising = () => {
    return (
        <div className="w-full min-h-screen ">
            <div className="text flex flex-col justify-center items-center gap-3 md:px-10 px-5">
                <p className="w-[180px] text-center px-2 text-[var(--darkGreenColor)] bg-[#EDFFED] rounded-full font-thin text-xs sm:text-sm py-0.5">LOCAL BENCHMARK</p>
                <h1 className="text-2xl sm:text-4xl max-w-xl w-full text-center mt-5 font-bold leading-tight font-[sora]">Seamless integration to all your best Apps</h1>
                <p className="text-xs sm:text-base max-w-3xl my-5 w-full text-center">Maximize your growth potential with our powerful integrations, fueled by data-driven insights. Embrace the future of business by leveraging our cutting-edge tools to bring in more data and drive unparalleled growth for your company. </p>
                <Button variant="outlined" className='py-3! px-4! gap-3! rounded-full! border-[var(--darkGreenColor)]! bg-[var(--darkGreenColor)]!'>
                    <Typography sx={{ fontSize: '14px' }} className='text-white capitalize! duration-300!'>
                        Get Started
                    </Typography>
                </Button>
                
                <div className="bigImg w-full max-w-3xl">
                    <img src="/Frame-408.png" className="" alt="Monkey" />
                </div>
            </div>
            <div className="text flex flex-col justify-center items-center gap-3 bg-[var(--blackColor)] md:p-10 p-5">
                
                <h1 className="text-2xl text-white sm:text-4xl max-w-xl w-full text-center mt-5 font-bold leading-tight font-[sora]">Discover Flexible Pricing Options for Our Exceptional Services</h1>
                <p className="text-xs text-[var(--grayColor)] sm:text-base max-w-3xl my-5 w-full text-center">we believe in providing top-notch services to cater to your unique requirements. That's why we offer a range of carefully crafted pricing plans designed to suit businesses of all sizes.</p>
                <section className="bg-[var(--blackColor)] w-full">
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-6xl mx-auto">
                            {plans.map((plan) => (
                                <div
                                    key={plan.title}
                            className="bg-[#111] border border-white/15 rounded-2xl px-8 py-8 w-full max-w-xs min-h-[480px] flex flex-col items-start shadow-lg"
                        >
                            <div className="font-semibold text-white mb-4 text-base">{plan.title}</div>
                            <div className="text-4xl font-bold text-white mb-1">
                                ${plan.price}
                                <span className="text-lg font-normal ml-1">p/month</span>
                            </div>
                                            <ul className="list-none p-0 my-6 w-full">
                                                {plan.features.map((feature) => (
                                                    <li
                                                        key={feature.label}
                                        className={`flex items-center mb-3 text-base ${feature.included ? 'text-white font-medium' : 'text-gray-500 font-normal'}`}
                                    >
                                        <span className="mr-3">
                                            {feature.included ? (
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="10" cy="10" r="10" fill="#22c55e" />
                                                    <path d="M6 10.5L9 13.5L14 8.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            ) : (
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="10" cy="10" r="10" fill="#222" />
                                                    <path d="M7 7L13 13M13 7L7 13" stroke="#888" strokeWidth="2" strokeLinecap="round" />
                                                </svg>
                                            )}
                                        </span>
                                        <span className={feature.included ? '' : 'opacity-50'}>{feature.label}</span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                className={`w-full py-3 rounded-full border border-gray-700 mt-auto text-lg font-medium transition-colors duration-200
                                    ${plan.button === 'highlight' ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-[#111] text-white hover:bg-gray-900'}`}
                            >
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </section>
            </div>
        </div>
    )
}

export default Prising

