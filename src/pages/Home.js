import React from 'react';

const Home = () => {

    // We have a list of sequencially ordered file names that I will use a for loop to build a list of file names to import
    const photos1975 = [];
    const photos2019 = [];
    const photos2021 = [];
    for (let i = 1; i <= 21; i++) {
        if (i < 10) {
            photos1975.push(`wall-street-1975-00${i}.jpg`);
        } else if (i >= 10) {
            photos1975.push(`wall-street-1975-0${i}.jpg`);
        }
    }

    for (let i = 1; i <= 10; i++) {
        if (i < 10) {
            photos2019.push(`wall-street-2019-00${i}.jpg`);
        } else if (i >= 10) {
            photos2019.push(`wall-street-2019-0${i}.jpg`);
        }
    }

    for (let i = 1; i <= 26; i++) {
        if (i < 10) {
            photos2021.push(`wall-street-2021-00${i}.jpg`);
        } else if (i >= 10) {
            photos2021.push(`wall-street-2021-0${i}.jpg`);
        }
    }

    let photos = [];
    for (let i = 0; i < photos1975.length; i++) {
        photos.push(photos1975[i]);
    }

    for (let i = 0; i < photos2019.length; i++) {
        photos.push(photos2019[i]);
    }

    for (let i = 0; i < photos2021.length; i++) {
        photos.push(photos2021[i]);
    }

    // randomly order the photos
    photos.sort(() => Math.random() - 0.5);

    return (
        <div class="max-w-8xl mx-auto px-12">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
                {photos && photos.length > 0 && photos.map((photo, index) => {
                    return (
                        <div key={index}>
                            <img src={require(`../assets/photos/${photo}`)} alt="" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;