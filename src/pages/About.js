import React from 'react';

const About = () => {
    return (
        <div class="max-w-7xl mx-auto px-12">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div>
                    <img src={require('../assets/photos/wall-street-2021-008.jpg')} alt="" />
                </div>
                <div class="flex flex-col items-center justify-start space-y-8">
                        <p class="text-sm text-stone-p00 text-center font-[600] uppercase tracking-widest">About <span class="italic">The Wall Street Wardrobe</span></p>
                        <p class="text-sm text-stone-600 text-center">The Wall Street Wardrobe is a project explorative normative standards of professionalism within the finance profession, and specifically amongst Wall Street Bankers. The goal of this project is simple and clear: To uncover the nature and character of the change in normative standards of professionalism over the history of the finance industry.</p> 
                        <p class="text-sm text-stone-600 text-center">Time and attention should be dedicated to explaining the genre of choice employed to present the purpose and results of the project. As mentioned, the effort is one of characterization - it is the goal to present a compelling argument that Wall Street normative professionalism standards have changed over the years, in part because of an increasingly diverse workforce. In short, this change is seen no better than through direct observation. This site serves as a means of viewing a collection of photographs that capture the essence of the change in professionalism standards.</p>
                        <p class="text-sm text-stone-600 text-center">Regarding the actual site (the one you are currently on, to be clear): When you navigate to the home page, a random selection of photos of Wall Street professionals will load in a grid. The ordering of these images is random intentionally. It is intended to show a sharp contrast between the standards of dress in the different period of the industry's history. It should be noted that the images that appear next to one another - due to their random ordering - are likely to stand in sharp contrast with one another. This reflects the somewhat radical nature of the change the industry's dress, diverse workforce, and standards of professionalism more broadly, have experienced over the years.</p> 
                        <p class="text-sm text-stone-600 text-center">Finally, this project is available to all - those in academia, those in finance, and the general public. It is not supported by substantial funding, nor is it actively maintained. Still, the research team can be contacted with questions or feedback, about the content of the project or its presentation. To get in touch, please see the <a href='/questions' class="hover:underline">questions</a> page.</p>
                </div>
            </div>
        </div>
    );
};

export default About;