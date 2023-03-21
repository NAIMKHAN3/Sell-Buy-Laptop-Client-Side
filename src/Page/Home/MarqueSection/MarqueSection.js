import React from 'react';
import Marquee from "react-fast-marquee";

const MarqueSection = () => {
    const brands = ["Hp", "Dell", "Lenovo", "Apple", "Walton", "Accer"]
    const hp = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png"
    const dell = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/2048px-Dell_Logo.svg.png";
    const lenovo = "https://image.pngaaa.com/151/94151-middle.png";
    const apple = "https://static.vecteezy.com/system/resources/previews/002/520/838/original/apple-logo-black-isolated-on-transparent-background-free-vector.jpg";
    const walton = "https://i.pinimg.com/originals/cd/ac/6c/cdac6c5cbed924120b9e1ecd3d61f96a.jpg";
    const accer = "https://1000logos.net/wp-content/uploads/2016/09/Acer-Logo-2001.png";

    const image = (brand) => {
        if (brand === "Hp") {
            return hp;
        }
        if (brand === "Dell") {
            return dell;
        }
        if (brand === "Lenovo") {
            return lenovo;
        }
        if (brand === "Apple") {
            return apple;
        }
        if (brand === "Walton") {
            return walton;
        }
        if (brand === "Accer") {
            return accer;
        }
    }
    return (
        <Marquee reverse={true} speed={50} height="250px">
            {brands.map((brand, i) => (
                <div className='zoom' key={i}>
                    <div className='border rounded-md shadow-lg w-48 text-center bg-dark m-3 '>
                        <img className='w-24 h-24 rounded-full mx-auto my-3' src={image(brand)} alt="" />
                        <h1 className='text-slate-500'>{brand}</h1>
                    </div>
                </div>
            ))}
        </Marquee>
    );
};

export default MarqueSection;