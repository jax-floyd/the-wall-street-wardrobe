import React from 'react';

import Logo from '../UI/Logo';
import Nav from './Nav';

const Header = () => {
    return (
        <div class=" py-12">
            <div class="max-w-5xl mx-auto">
                <div class="flex flex-col items-center justify-between space-y-12">
                    <a href="/" class="cursor-pointer">
                        <Logo />
                    </a>
                    <Nav />
                </div>
            </div>
        </div>
    );
};

export default Header;