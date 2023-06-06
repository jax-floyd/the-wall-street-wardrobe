import React from 'react';

import Logo from '../UI/Logo';
import LogoAlt from '../UI/LogoAlt';
import Nav from './Nav';

const Header = () => {
    return (
        <div class=" py-12">
            <div class="max-w-5xl mx-auto">
                <div class="hidden sm:flex flex-col items-center justify-between space-y-12">
                    <a href="/" class="cursor-pointer">
                        <Logo />
                    </a>
                    <Nav />
                </div>
                <div class="sm:hidden flex flex-row items-center justify-between px-4">
                    <a href="/" class="cursor-pointer">
                        <LogoAlt />
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>


                </div>
            </div>
        </div>
    );
};

export default Header;