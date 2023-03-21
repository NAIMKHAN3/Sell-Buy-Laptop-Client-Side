import React from 'react';
import FeatureCard from './FeatureCard';
import { MdSell } from "react-icons/md";
import { AiOutlineShopping } from "react-icons/ai";
import { CgPerformance } from "react-icons/cg";

const Features = () => {

    const icon = [
        <MdSell />, <AiOutlineShopping />, <CgPerformance />
    ]

    const features = [
        {
            name: "Seller",
            details: "As a seller on a laptop website, you have a unique opportunity to tap into a growing market of tech-savvy customers looking for high-quality laptops and accessories. Here are some of the top opportunities for sellers on a laptop website. High demand: Laptops are in high demand, as more people are working remotely and relying on technology for work and entertainment. By selling laptops and accessories on a website, you can tap into this growing market and meet the needs of customers who are looking for high-quality, reliable devices."
        },
        {
            name: "Buyer",
            details: "As a buyer on a seller laptop website, you have a unique opportunity to find the perfect laptop and related accessories that meet your needs and budget. Here are some of the top opportunities for buyers on a seller laptop website. Wide range of options: A laptop seller website can offer a wide range of laptops and related accessories from various brands, price points, and configurations. This gives you the opportunity to compare and choose the best option that meets your specific needs."
        },
        {
            name: "Feature",
            details: "This website has a responsive nav bar to navigate the website easily and a modern-looking footer. The website has some essential components, like a banner and an advertisement section with several product categories. I implemented authorization and authentication systems to secure the user and website data on this website. The vital part of this website is the user and admin route; with these routes, anyone can use this website efficiently."
        },
    ]

    return (
        <div className='mx-3'>
            <h1 className='text-4xl font-bold  text-center my-10 text-slate-500'>Features</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {
                    features.map((feature, i) => <FeatureCard key={feature.name} feature={feature} icon={icon[i]}></FeatureCard>)
                }
            </div>
        </div>
    );
};

export default Features;