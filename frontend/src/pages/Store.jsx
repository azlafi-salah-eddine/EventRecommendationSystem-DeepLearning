import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Store = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const perPage = 30;

    useEffect(() => {
        setLoading(true);
        axios.get('http://127.0.0.1:5000/api/products/random', {
            params: { page: currentPage, perPage: perPage }
        })
        .then((response) => {
            console.log("API Response:", response.data);
            setProducts(response.data.products || []);
            setTotalPages(Math.ceil(response.data.totalCount / perPage));
            setLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching products:", error);
            setError(error.message);
            setLoading(false);
        });
    }, [currentPage]);

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <section>
            <div className="font-[sans-serif] my-10 px-3 py-4 mx-auto lg:max-w-7xl sm:max-w-full">
                <div className="mb-16 max-w-2xl mx-auto px-3 relative">
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li className="inline-flex items-center">
                                <a href="#"
                                   className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-400 dark:hover:text-black">
                                    <svg className="w-3 h-3 me-2.5" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                                    </svg>
                                    Home
                                </a>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2" d="m1 9 4-4-4-4"/>
                                    </svg>
                                    <a href="#"
                                       className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:hover:text-black dark:text-gray-400">Products</a>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2" d="m1 9 4-4-4-4"/>
                                    </svg>
                                    <span
                                        className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400 hover:text-black">Random</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {loading ? (
                        Array.from({length: 12}).map((_, index) => (
                            <div key={index} className="bg-white p-3 shadow-sm rounded-md">
                                <div className="w-full h-[130px] bg-gray-200 animate-pulse rounded-md relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer"></div>
                                </div>
                                <div className="mt-4">
                                    <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4 mx-auto relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer"></div>
                                    </div>
                                    <div className="h-4 bg-gray-200 animate-pulse rounded w-1/2 mx-auto mt-2 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer"></div>
                                    </div>
                                </div>
                                <div className="h-10 bg-gray-200 animate-pulse rounded-xl mt-6 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer"></div>
                                </div>
                            </div>
                        ))
                    ) : error ? (
                        <p className="text-center text-red-500">Error: {error}</p>
                    ) : (
                        products.map((product, index) => (
                            <div key={product.id || index}
                                 className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                                <Link to={`/product/${product.id}`}>
                                    <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                                        <img
                                            src={product.img_url}
                                            alt={product.title}
                                            className="h-full w-5/6 mx-auto block object-contain"
                                        />
                                    </div>
                                    <div className="text-center mt-4">
                                        <h3 className="text-sm font-medium text-gray-800 truncate">
                                            {product.title.length > 30 ? product.title.slice(0, 30) + '...' : product.title}
                                        </h3>
                                    </div>
                                </Link>
                                <h4 className="text-base text-[#37B7C3] font-bold mt-2 text-center">{product.price}</h4>
                                <button
                                    type="button"
                                    className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-[#37B7C3] text-base text-gray-800 font-semibold rounded-xl"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} color={"#FFF"} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
                                    </svg>
                                    <span className="font-bold text-white">Add to Cart</span>
                                </button>
                            </div>
                        ))
                    )}
                </div>

                <div className="flex justify-center mt-6">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 mx-2 bg-[#37B7C3] text-white rounded-lg"
                    >
                        Previous
                    </button>
                    <span className="px-4 py-2 text-lg">{currentPage}</span>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 mx-2 bg-[#37B7C3] text-white rounded-lg"
                    >
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Store;