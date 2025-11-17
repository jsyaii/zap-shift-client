import React from 'react';
import Banner from '../pages/Banner/Banner';
import Brands from '../pages/Brands/Brands';
import Reviews from '../pages/Reviews/Reviews';
const reviewPromise = fetch('reviews.json')
.then(res =>res.json());
const HomeLayouts = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <Reviews reviewPromise={reviewPromise} ></Reviews>
            
            
        </div>
    );
}

export default HomeLayouts;
