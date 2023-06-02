import React from 'react';

const Nav = () => {

    const pages = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'About',
            path: '/about'
        },
        {
            name: 'Early',
            path: '/'
        },
        {
            name: 'Middle',
            path: '/'
        },
        {
            name: 'Late',
            path: '/'
        },
        {
            name: 'Contemporary',
            path: '/'
        },
        {
            name: 'Sources',
            path: '/sources'
        },
        {
            name: 'Questions',
            path: '/questions'
        }
    ];

    return (
        <nav class="w-full flex flex-row items-center justify-center">
            <ul class="w-full flex flex-row items-center justify-center space-x-14">
                {pages.map((page, index) => (
                    <li key={index}>
                        <a href={page.path} class="text-xs text-stone-600 hover:text-stone-800 uppercase tracking-widest whitespace-nowrap">
                            {page.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;