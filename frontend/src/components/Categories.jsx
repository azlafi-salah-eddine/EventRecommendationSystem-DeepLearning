import * as React from "react";

function Categories() {
    return (
        <section>
            <div className="px-2 sm:px-10">
                <div className="mt-2 max-w-7xl mx-auto">
                    <div className="mb-16 max-w-2xl text-center mx-auto">
                        <h2 className="md:text-4xl text-[#37B7C3] text-3xl font-extrabold mb-6">Shop by category</h2>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 max-md:max-w-lg mx-auto gap-8">
                        <div
                            className="sm:p-6 p-4 flex bg-white rounded-md border border-[#37B7C3] shadow-[0_14px_40px_-11px_rgba(55,183,195,0.5)]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 className="w-12 h-12 mr-6 bg-blue-50 p-3 rounded-md shrink-0" viewBox="0 0 32 32">
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    color={"#37B7C3"}
                                    height="2em"
                                    width="2em"
                                >
                                    <path
                                        d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 000 2.5v11a.5.5 0 00.707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 00.78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0016 13.5v-11a.5.5 0 00-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                                </svg>
                            </svg>
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-[#37B7C3]">Books</h3>
                                <p>Explore a vast collection of books, from bestsellers to timeless classics, across all
                                    genres.</p>
                            </div>
                        </div>
                        <div className="sm:p-6 p-4 flex bg-white rounded-md border border-[#37B7C3] shadow-[0_14px_40px_-11px_rgba(55,183,195,0.5)]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 className="w-12 h-12 mr-6 bg-blue-50 p-3 rounded-md shrink-0">
                                 viewBox="0 0 682.667 682.667">
                                <svg
                                    viewBox="0 0 512 512"
                                    fill="currentColor"
                                    color={"#37B7C3"}
                                    height="24px"
                                    width="24px"
                                >
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={32}
                                        d="M314.56 48s-22.78 8-58.56 8-58.56-8-58.56-8a31.94 31.94 0 00-10.57 1.8L32 104l16.63 88 48.88 5.52a24 24 0 0121.29 24.58L112 464h288l-6.8-241.9a24 24 0 0121.29-24.58l48.88-5.52L480 104 325.13 49.8a31.94 31.94 0 00-10.57-1.8zM333.31 52.66a80 80 0 01-154.62 0"
                                    />
                                </svg>
                            </svg>
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-[#37B7C3]">Fashion</h3>
                                <p>Discover trendy fashion pieces for all seasons, styles, and occasions.</p>
                            </div>
                        </div>
                        <div className="sm:p-6 p-4 flex bg-white rounded-md border border-[#37B7C3] shadow-[0_14px_40px_-11px_rgba(55,183,195,0.5)]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 className="w-12 h-12 mr-6 bg-blue-50 p-3 rounded-md shrink-0">
                                viewBox="0 0 682.667 682.667">
                                <svg
                                    fill="none"
                                    color={"#37B7C3"}
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                    height="24px"
                                    width="24px"

                                >
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <path d="M3 5h6v14H3zM12 9h10v7H12zM14 19h6M17 16v3M6 13v.01M6 16v.01"/>
                                </svg>
                            </svg>
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-[#37B7C3]">Electronics</h3>
                                <p>Shop the latest gadgets, from smartphones to home appliances, with cutting-edge
                                    technology.</p>
                            </div>
                        </div>
                        <div className="sm:p-6 p-4 flex bg-white rounded-md border border-[#37B7C3] shadow-[0_14px_40px_-11px_rgba(55,183,195,0.5)]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 className="w-12 h-12 mr-6 bg-blue-50 p-3 rounded-md shrink-0" viewBox="0 0 24 24">
                                <svg
                                    viewBox="0 0 512 512"
                                    fill="currentColor"
                                    height="24px"
                                    color={"#37B7C3"}
                                    width="24px"
                                >
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeMiterlimit={10}
                                        strokeWidth={32}
                                        d="M448 256 A192 192 0 0 1 256 448 A192 192 0 0 1 64 256 A192 192 0 0 1 448 256 z"
                                    />
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={32}
                                        d="M256 175.15l-76.09 63.83L200 320h112l20.09-81.02L256 175.15zM332.09 238.98l52.87-22.4 25.78-73.26M447 269.97l-62.04-53.39M179.91 238.98l-52.87-22.4-25.78-73.26M65 269.97l62.04-53.39M256 175.15v-57.57l64-42.64M192 74.93l64 42.65M312 320l28 48-28 71M410.74 368H342M200 320l-28 48 28.37 71.5M101.63 368H172"
                                    />
                                </svg>
                            </svg>
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-[#37B7C3]">Sports</h3>
                                <p>Find sports equipment, apparel, and accessories for every activity and athlete.</p>
                            </div>
                        </div>
                        <div className="sm:p-6 p-4 flex bg-white rounded-md border border-[#37B7C3] shadow-[0_14px_40px_-11px_rgba(55,183,195,0.5)]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 className="w-12 h-12 mr-6 bg-blue-50 p-3 rounded-md shrink-0" viewBox="0 0 24 24">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    color={"#37B7C3"}
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                    height="24px"
                                    width="24px"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <path
                                        d="M5 11a2 2 0 012 2v2h10v-2a2 2 0 114 0v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4a2 2 0 012-2z"/>
                                    <path d="M5 11V6a3 3 0 013-3h8a3 3 0 013 3v5M6 19v2M18 19v2"/>
                                </svg>
                            </svg>
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-[#37B7C3]">Homeware</h3>
                                <p>Enhance your living space with stylish home decor, furniture, and kitchen
                                    essentials.</p>
                            </div>
                        </div>
                        <div className="sm:p-6 p-4 flex bg-white rounded-md border border-[#37B7C3] shadow-[0_14px_40px_-11px_rgba(55,183,195,0.5)]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 className="w-12 h-12 mr-6 bg-blue-50 p-3 rounded-md shrink-0" viewBox="0 0 24 24">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    color={"#37B7C3"}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M6 5h12l3 5l-8.5 9.5a.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5"/>
                                    <path d="M10 12l-2 -2.2l.6 -1"/>
                                </svg>
                            </svg>
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-[#37B7C3]">Jewelry</h3>
                                <p>Adorn yourself with elegant and unique jewelry pieces for every occasion.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Categories;
