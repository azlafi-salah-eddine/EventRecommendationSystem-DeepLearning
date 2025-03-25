import React from "react";

function Subscribe() {
    return (
        <>
            <div className="bg-[#fff] border border-2 border-t-[#63C8D1] border-b-[#63C8D1] py-20 sm:px-6 px-4">
                <div className="max-w-4xl text-[#63C8D1] w-full mx-auto text-center">
                    <h2 className="md:text-4xl  text-3xl font-extrabold">Subscribe Our Newsletter</h2>
                    <p className="mt-6">Stay updated with our latest news and exclusive offers. Join our community
                        today!</p>
                    <div
                        className="mt-10 bg-white flex items-center p-2 max-w-xl mx-auto rounded-2xl border border-gray-300">
                        <input type="email" placeholder="Enter your email"
                               className="w-full bg-transparent text-black py-4 px-2 border-none outline-none"/>
                        <button
                            className="px-6 py-3 rounded-xl text-white"
                            style={{ backgroundColor: "#37B7C3", transition: "all 0.3s", hover: { backgroundColor: "#2D9B8D" } }}>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Subscribe;
