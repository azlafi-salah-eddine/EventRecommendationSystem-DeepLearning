import React from "react";

function ProductsGrid({ title, products }) {
    const formatPrice = (price) => {
        const priceStr = String(price);
        return parseFloat(priceStr.replace(/[^\d.-]/g, '')).toFixed(2);
    };

    return (
        <section>
            <div className="font-[sans-serif] my-24 px-3 py-4 mx-auto lg:max-w-7xl sm:max-w-full">
                <div className="flex justify-center items-center mb-16 max-w-2xl mx-auto px-3 relative">
                    <h2 className="md:text-4xl text-[#37B7C3] text-3xl font-extrabold mb-6">
                        {title}
                    </h2>
                    <button
                        className="px-4 py-2 text-sm font-semibold text-[#37B7C3] border border-[#37B7C3] bg-transparent hover:bg-[#37B7C3] hover:text-white transition-all absolute right-0">
                        View All
                    </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {products.map((product, index) => (
                        <div key={index} className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                            <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                                <img
                                    src={product.img_url}
                                    alt={product.title}
                                    className="h-full w-5/6 mx-auto block object-contain"
                                />
                            </div>
                            <div className="text-center mt-4 h-[125px] flex flex-col justify-center">
                                <h3 className="text-sm font-bold text-gray-800 line-clamp-2">
                                    {product.title.length > 50 ? `${product.title.substring(0, 50)}...` : product.title}
                                </h3>
                                <div className="flex justify-center items-center gap-2 mt-2">
                                    {/* Check if old price exists */}
                                    {product.old_price && (
                                        <span className="text-gray-500 text-sm">
                                            List: <span className="line-through">${formatPrice(product.old_price)}</span>
                                        </span>
                                    )}
                                    {/* Display discount */}
                                    {product.discount_rate && (
                                        <span className="text-sm text-white rounded bg-red-600 p-1 font-bold">
                                            -{Math.round(product.discount_rate * 100)}%
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-red-600">Limited time deal</p>
                                {/* Check if predicted price exists, otherwise show price */}
                                <h4 className="text-lg text-[#37B7C3] font-bold mt-1">
                                    ${product.predicted_price ? formatPrice(product.predicted_price) : formatPrice(product.price)}
                                </h4>
                            </div>
                            <button
                                type="button"
                                className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-[#37B7C3] text-base text-gray-800 font-semibold rounded-xl"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    color={"#FFF"}
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                    />
                                </svg>
                                <span className="text-white">Add to cart</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProductsGrid;
