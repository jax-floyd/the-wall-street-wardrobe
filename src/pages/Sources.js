import React from 'react';

const Sources = () => {
    return (
        <div class="max-w-5xl mx-auto px-12">
            <div>
                <div class="flex flex-col items-start justify-start space-y-8">
                    <p class="text-sm text-stone-800 text-left font-[600] uppercase tracking-widest">Photographic Sources</p>
                    <p class="text-sm text-stone-600 text-left">The images compiled for display on this website belong entirely to the photographers and original publishers of each respective image. The images are not owned by the creators of this website, nor are they intended to be used for commercial purposes. The images are used for educational purposes only, and are intended to be used in accordance with the Fair Use Doctrine.</p>
                    <p class="text-sm text-stone-600 text-left">The specific sources relied upon are listed below:</p>
                    <ul class="list-disc list-inside text-sm text-stone-600 text-left">
                        <li><a href="https://wwd.com/fashion-news/fashion-scoops/gallery/then-and-now-wall-street-power-dressing-1203236417/then-and-now-wall-street-power-dressing-28/" class="hover:underline">Pierre Schermann, George Chinsee for Womens Wear Daily</a></li>
                        <li><a href="https://www.nytimes.com/2021/08/02/business/wall-street-casual.html" class="hover:underline">Melodie Jeng for The New York Times</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sources;