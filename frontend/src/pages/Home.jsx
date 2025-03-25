import React, { useEffect, useState } from "react";
import axios from "axios";
import HeroBanner from "../components/HeroBanner";
import Categories from "../components/Categories";
import ProductsGrid from "../components/ProductsGrid";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

function Home() {
    const [blackFridayProducts, setBlackFridayProducts] = useState([]);
    const [noelProducts, setNoelProducts] = useState([]);
    const [loading, setLoading] = useState({
        blackFriday: true,
        noel: true
    });
    const [error, setError] = useState({
        blackFriday: null,
        noel: null
    });

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/predict/black_friday/top_deals')
            .then(response => {
                setBlackFridayProducts(response.data);
                setLoading(prev => ({...prev, blackFriday: false}));
            })
            .catch(error => {
                console.error("Error fetching Black Friday predictions:", error);
                setError(prev => ({...prev, blackFriday: error}));
                setLoading(prev => ({...prev, blackFriday: false}));
            });

        axios.get('http://127.0.0.1:5000/api/products/noel')
            .then(response => {
                const products = response.data.products || [];
                setNoelProducts(products);
                setLoading(prev => ({...prev, noel: false}));
            })
            .catch(error => {
                console.error("Error fetching Noel products:", error);
                setError(prev => ({...prev, noel: error}));
                setLoading(prev => ({...prev, noel: false}));
            });
    }, []);

    return (
        <div>
            <HeroBanner />
            <Categories />
            

            <ProductsGrid 
                title="Black Friday Deals" 
                products={blackFridayProducts} 
                loading={loading.blackFriday}
                error={error.blackFriday}
            />
            
            <ProductsGrid 
                title="Christmas Specials" 
                products={noelProducts} 
                loading={loading.noel}
                error={error.noel}
            />
            
            <Subscribe />
            <Footer />
        </div>
    );
}

export default Home;