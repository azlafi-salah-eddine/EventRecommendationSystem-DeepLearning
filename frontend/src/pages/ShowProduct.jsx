import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ShowProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cartError, setCartError] = useState(null); 

    useEffect(() => {
        setLoading(true);
        setError(null);

        axios.get(`http://127.0.0.1:8000/api/products/${id}`)
            .then((response) => {
                setProduct(response.data.product);
                const category = response.data.product.category_name;

                return axios.get(`http://127.0.0.1:8000/api/products/by-category/${category}`);
            })
            .then((response) => {
                setRelatedProducts(response.data.products);
            })
            .catch((error) => {
                setError('Error fetching product details');
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    const handleAddToCart = async (productId) => {
        setCartError(null);

        try {
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('user_id');

            if (!token || !userId) {
                setCartError('You must be logged in to add items to the cart.');
                return;
            }

            console.log('Sending request with payload:', { product_id: productId, user_id: userId });
            console.log('Authorization header:', `Bearer ${token}`);

            const response = await axios.post(
                'http://127.0.0.1:8000/api/cart/add',
                {
                    product_id: productId,
                    user_id: userId,
                    token: token, 
                },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                }
            );

            console.log('Product added to cart:', response.data);
        } catch (error) {
            console.error('Error adding product to cart:', error);
            if (error.response) {
                setCartError(error.response.data.message || 'Failed to add product to cart.');
            } else {
                setCartError('An unexpected error occurred. Please try again.');
            }
        }
    };

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    return (
        <section className="py-8 bg-white md:py-16 antialiased">
            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                {/* Product Details Section */}
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                    {/* Image Placeholder */}
                    <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                        {loading ? (
                            <div className="w-full h-[400px] bg-gray-200 animate-pulse rounded-lg"></div>
                        ) : (
                            <img
                                className="w-full h-[400px] object-contain"
                                src={product.image_url || '/default-product.png'}
                                alt={product.title}
                                onError={(e) => {
                                    e.target.src = '/default-product.png'; // Fallback image if the URL is invalid
                                }}
                            />
                        )}
                    </div>

                    {/* Product Details Placeholder */}
                    <div className="mt-6 sm:mt-8 lg:mt-0">
                        {loading ? (
                            <>
                                <div className="h-8 bg-gray-200 animate-pulse rounded w-3/4"></div>
                                <div className="mt-4 h-6 bg-gray-200 animate-pulse rounded w-1/2"></div>
                            </>
                        ) : (
                            <>
                                <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                                    {product.title}
                                </h1>
                                <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                                    <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                                        {product.price}
                                    </p>
                                </div>
                            </>
                        )}

                        {/* Product Action Buttons Placeholder */}
                        <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                            {loading ? (
                                <div className="w-full h-12 bg-gray-200 animate-pulse rounded-xl"></div>
                            ) : (
                                <>
                                    <button
                                        type="button"
                                        className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-[#37B7C3] text-base text-gray-800 font-semibold rounded-xl"
                                        onClick={() => handleAddToCart(product.id)} // Pass the product ID
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} color={"#FFF"} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
                                        </svg>
                                        <span className="text-white">Add to cart</span>
                                    </button>
                                    {cartError && (
                                        <p className="text-red-500 text-sm mt-2">{cartError}</p>
                                    )}
                                </>
                            )}
                        </div>

                        <hr className="my-6 md:my-8 border-gray-200"/>
                    </div>
                </div>

                {/* Related Products Section */}
                <div className="mt-12">
                    <h2 className="text-lg font-semibold text-gray-800">
                        {loading ? (
                            <div className="h-6 bg-gray-200 animate-pulse rounded w-1/4"></div>
                        ) : (
                            "You May Also Like"
                        )}
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
                        {loading ? (
                            // Skeleton Loading for Related Products
                            Array.from({ length: 6 }).map((_, index) => (
                                <div key={index} className="bg-white p-3 shadow-sm rounded-md">
                                    <div className="w-full h-[130px] bg-gray-200 animate-pulse rounded-md"></div>
                                    <div className="mt-4">
                                        <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4 mx-auto"></div>
                                        <div className="h-4 bg-gray-200 animate-pulse rounded w-1/2 mx-auto mt-2"></div>
                                    </div>
                                    <div className="h-10 bg-gray-200 animate-pulse rounded-xl mt-6"></div>
                                </div>
                            ))
                        ) : (
                            relatedProducts.map((relatedProduct) => (
                                <div key={relatedProduct.id}
                                     className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                                    <Link to={`/product/${relatedProduct.id}`}>
                                        <div
                                            className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                                            <img
                                                className="h-full w-5/6 mx-auto block object-contain"
                                                src={relatedProduct.image_url || '/default-product.png'}
                                                alt={relatedProduct.title}
                                                onError={(e) => {
                                                    e.target.src = '/default-product.png'; // Fallback image if the URL is invalid
                                                }}
                                            />
                                        </div>
                                        <div className="text-center mt-4">
                                            <h3 className="text-sm font-medium text-gray-800 truncate">
                                                {relatedProduct.title.length > 30 ? relatedProduct.title.slice(0, 30) + '...' : relatedProduct.title}
                                            </h3>
                                            <p className="text-sm text-gray-500">{relatedProduct.price}</p>
                                        </div>
                                    </Link>
                                    <button
                                        type="button"
                                        className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-[#37B7C3] text-base text-gray-800 font-semibold rounded-xl"
                                        onClick={() => handleAddToCart(relatedProduct.id)} // Pass the related product ID
                                    >
                                        <span className="text-white">Add to cart</span>
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowProduct;
