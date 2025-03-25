import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const menuRef = useRef(null);



    const handleOutsideClick = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setMenuVisible(false);
        }
    };

    useEffect(() => {
        if (menuVisible) {
            document.addEventListener('click', handleOutsideClick);
        } else {
            document.removeEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [menuVisible]);

    return (
        <header className='shadow-lg font-[sans-serif] tracking-wide relative z-50'>
            <section className='md:flex lg:items-center relative py-3 lg:px-10 px-4 border-gray-200 border-b bg-white lg:min-h-[70px] max-lg:min-h-[60px]'>
                <a href="/" className="max-sm:w-full max-sm:mb-3 shrink-0">
                    <img src="/logoPR.png" alt="logo" className='w-[200px]' />
                </a>

                <div className='flex flex-wrap w-full items-center'>
                    <input type='text' placeholder='Search something...'
                           className='xl:w-80 max-lg:w-full lg:ml-10 max-md:mt-4 max-lg:ml-4 bg-white border border-[#37B7C3] px-4 rounded h-10 outline-none text-sm transition-all' />
                    <div className="ml-auto max-lg:mt-4">
                        <ul className='flex items-center'>
                            <li className='max-lg:border-b max-lg:py-3 px-3'>
                                <Link to="/" className='text-black text-[15px] font-medium block'>Home</Link>
                            </li>
                            <li className='max-lg:border-b max-lg:py-3 px-3'>
                                <Link to="/about" className='text-black text-[15px] font-medium block'>About</Link>
                            </li>
                            <li className='max-lg:border-b max-lg:py-3 px-3'>
                                <Link to="/store" className='text-black text-[15px] font-medium block'>Store</Link>
                            </li>
                            <li className='max-lg:border-b max-lg:py-3 px-3'>
                                <Link to="/contact" className='text-black text-[15px] font-medium block'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <div id="collapseMenu" className='lg:flex lg:flex-wrap lg:items-center lg:justify-center px-10 py-3 bg-[#37B7C3] min-h-[46px] gap-4'>
                <ul className='flex flex-wrap items-center'>
                    <li className='px-3'>
                        <Link to="/categories/books" className='hover:text-black text-white text-[15px] font-medium block'>
                            Books
                        </Link>
                    </li>
                    <li className='px-3'>
                        <Link to="/categories/Fashion" className='hover:text-black text-white text-[15px] font-medium block'>
                            Fashion
                        </Link>
                    </li>
                    <li className='px-3'>
                        <Link to="/categories/Electronics" className='hover:text-black text-white text-[15px] font-medium block'>
                            Electronics
                        </Link>
                    </li>
                    <li className='px-3'>
                        <Link to="/categories/Sports" className='hover:text-black text-white text-[15px] font-medium block'>
                            Sports
                        </Link>
                    </li>
                    <li className='px-3'>
                        <Link to="/categories/Homeware" className='hover:text-black text-white text-[15px] font-medium block'>
                            Homeware
                        </Link>
                    </li>
                    <li className='px-3'>
                        <Link to="/categories/Jewelry" className='hover:text-black text-white text-[15px] font-medium block'>
                            Jewelry
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
