import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IoPlayOutline } from "react-icons/io5";


const Hero = () => {
    return (
        <div className="min-h-screen w-full bg-[var(--blackColor)] relative overflow-hidden">
            {/* Green Center Glow */}
            <div
                className="absolute inset-0 z-0 pointer-events-none bg-[var(--blackColor)]"
                style={{
                    backgroundImage: `radial-gradient(circle 500px at 50% 300px, rgba(16,185,129,0.35), transparent)`,
                    // backgroundImage: `radial-gradient(circle at center, #3FA11B, transparent)`,
                    backgroundSize: `100% 100%`
                }}
            />
            <div className="min-h-screen relative text-white overflow-hidden lg:p-50 sm:px-30 pt-20 px-5">

                <div className="relative flex flex-col sm:flex-row gap-3 justify-center items-center h-full text-center my-2">
                    <div className="rounded-full text-xs bg-[#2F872D] text-white p-1 px-2 border-1 border-[#40853f] drop-shadow-xs drop-shadow-black/20 font-[sora]"> ⭐️⭐️⭐️⭐️ Review from 7,000 customer</div>
                    <div className="rounded-full text-xs bg-[#2F872D] text-white p-1 px-2 border-1 border-[#40853f] drop-shadow-xs drop-shadow-black/20 font-[sora]"> 🎉  We reach 12,000 active user </div>

                </div>
                <div className="relative flex flex-col justify-center items-center h-full text-center">
                    <h1 className="text-2xl sm:text-5xl font-bold leading-tight mb-4 w-full max-w-4xl font-[sora]">Power Your Email Marketing Campaigns with <span className="text-[#96EF76]">Ease</span> and <span className="text-[#96EF76]">Efficiency</span></h1>
                    <p className="text-gray-300 mb-8 w-full max-w-3xl text-xs sm:text-sm">Are you ready to supercharge your email marketing efforts and unlock the true potential of your campaigns? Look no further than EmailGigga, the all-in-one solution for businesses of all sizes seeking to engage their audience, boost conversions, and build lasting customer relationships.</p>
                    <div className="px-8 grid sm:items-start sm:justify-center gap-4 sm:px-0 sm:space-x-5 sm:flex mt-9">

                        <Button variant="outlined" className='py-3! px-4! gap-3! rounded-full! border-[var(--darkGreenColor)]! bg-[var(--darkGreenColor)]!'>
                            <Typography sx={{ fontSize: '14px' }} className='text-white capitalize! duration-300!'>
                                Get Started
                            </Typography>
                        </Button>
                        <Button variant="outlined" className='py-3! group px-4! gap-3! rounded-full! border-white! hover:border-[white]! hover:bg-[white]!'>
                            <IoPlayOutline className="text-xl text-white group-hover:text-[var(--darkGreenColor)]!" />
                            <Typography sx={{ fontSize: '14px' }} className='text-white group-hover:text-[var(--darkGreenColor)]! capitalize! duration-300!'>
                                Watch Video
                            </Typography>
                        </Button>

                    </div>
                    <img src="/fram-(3).png" className="absolute bottom-20 -left-20 hidden xl:block" alt="Wow" width={100} />
                    <img src="/fram-(2).png" className="absolute -bottom-10 right-50 hidden xl:block" alt="canva" width={80} />
                    <img src="/fram-(1).png" className="absolute top-0 -right-30 hidden xl:block" alt="Monkey" width={173} />

                </div>


                <div className="bigImg my-20">
                    <img src="/Frame389.png" className="" alt="Monkey" />
                </div>
                <p className="text-[var(--grayColor)] text-center text-xs sm:text-sm">BRANDS THAT TRUSTED US</p>
                
                <div className="bigImg my-20">
                    <img src="/Frame390.png" className="" alt="Monkey" />
                </div>
            </div >
        </div>
    )
}

export default Hero