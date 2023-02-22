import React from 'react';
import Advertice from './Advertise/Advertice';
import Brands from './Brands/Brands';
import Cetegory from './Cetegory/Cetegory';
import ExtraSection from './ExtraSection/ExtraSection';
import Features from './Features/Features';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Features></Features>
            <Brands></Brands>
            <Advertice></Advertice>
            <Cetegory></Cetegory>
            <ExtraSection></ExtraSection>

        </div>
    );
};

export default Home;