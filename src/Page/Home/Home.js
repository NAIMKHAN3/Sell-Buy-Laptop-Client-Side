import React from 'react';
import Advertice from './Advertise/Advertice';
import Brands from './Brands/Brands';
import Cetegory from './Cetegory/Cetegory';
import Contact from './Contact/Contact';
import ExtraSection from './ExtraSection/ExtraSection';
import Features from './Features/Features';
import Header from './Header/Header';
import MarqueSection from './MarqueSection/MarqueSection';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <MarqueSection></MarqueSection>
            <Advertice></Advertice>
            <Cetegory></Cetegory>
            <Features></Features>
            <Brands></Brands>
            <ExtraSection></ExtraSection>
            <Contact></Contact>
        </div>
    );
};

export default Home;