import { DotLottieReact } from '@lottiefiles/dotlottie-react';
function HeroBanner() {

    return (

        <section>
            <div
                className="my-5 py-5 grid md:grid-cols-2 items-center md:gap-8 gap-6 font-[sans-serif] max-w-5xl max-md:max-w-md mx-auto">
                <div className="max-md:order-1 max-md:text-center">
                    <h2 className="md:text-3xl text-3xl md:leading-10 font-extrabold text-gray-800 mb-4">Personalized
                        Smart Recommendations for Major Sales Events</h2>
                    <p className="mt-4 text-base text-gray-600 leading-relaxed">
                        Enhance promotions during Black Friday, Christmas, and sales seasons with AI-driven insights.</p>
                    <div className="mt-8 flex max-sm:flex-col sm:space-x-4 max-sm:space-y-6">
                        <a href="javascript:void(0);"
                            className="px-6 py-3 text-base font-semibold text-white bg-[#37B7C3] rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#37B7C3] focus:outline-none focus:ring-opacity-50">Explore
                            Our Menu</a>
                        <a href="javascript:void(0);"
                            className="px-6 py-3 text-base font-semibold text-[#37B7C3] border border-[#37B7C3] rounded-full hover:text-white hover:bg-[#37B7C3] transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#37B7C3] focus:outline-none focus:ring-opacity-50">Order
                            Now</a>
                    </div>
                </div>
                <div className="md:h-[500px] transition-all duration-10000">
                    <DotLottieReact
                        src="https://lottie.host/0fe21d8d-77eb-47cd-9302-1c03ac2372b3/CqhkBVGye0.lottie"
                        loop
                        autoplay
                    />
                </div>

            </div>
        </section>

    )
        ;
}


export default HeroBanner;
