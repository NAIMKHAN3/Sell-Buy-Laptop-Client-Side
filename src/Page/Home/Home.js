import React from 'react';
import Advertice from './Advertise/Advertice';
import Cetegory from './Cetegory/Cetegory';
import ExtraSection from './ExtraSection/ExtraSection';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Advertice></Advertice>
            <Cetegory></Cetegory>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;