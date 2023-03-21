import React from 'react';
import BrandCard from './BrandCard';

const Brands = () => {
    const brands = [
        {
            name: "HP",
            details: "HP (short for Hewlett-Packard) is a well-known brand that produces a range of laptops that are suitable for both personal and professional use. Here are some of the features and specifications of HP laptops: Design: HP laptops are designed to be sleek, stylish, and portable. They come in a variety of form factors, including traditional clamshell, 2-in-1 convertible, and detachable tablet.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png",
        },
        {
            name: "DELL",
            details: "Dell is a well-known brand that produces a range of laptops suitable for both personal and professional use. Here are some of the features and specifications of Dell laptops: Design: Dell laptops are designed to be sleek, portable, and durable. They come in a variety of form factors, including traditional clamshell, 2-in-1 convertible, and detachable tablet.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/2048px-Dell_Logo.svg.png",
        },
        {
            name: "LENOVO",
            details: "Lenovo is a well-known brand that produces a range of laptops suitable for both personal and professional use. Here are some of the features and specifications of Lenovo laptops: Design: Lenovo laptops are designed to be sleek, portable, and durable. They come in a variety of form factors, including traditional clamshell, 2-in-1 convertible, and detachable tablet.",
            img: "https://image.pngaaa.com/151/94151-middle.png",
        },
        {
            name: "APPLE",
            details: "Apple laptops, also known as MacBooks, are known for their sleek design, powerful performance, and user-friendly interface. Here are some of the features and specifications of Apple laptops: Design: Apple laptops are designed to be slim, lightweight, and visually appealing. They are made from high-quality materials, such as aluminum, and come in a range of colors and finishes.",
            img: "https://static.vecteezy.com/system/resources/previews/002/520/838/original/apple-logo-black-isolated-on-transparent-background-free-vector.jpg",
        },
        {
            name: "WALTON",
            details: "Walton is a Bangladesh-based electronics brand that produces a range of laptops suitable for both personal and professional use. Here are some of the features and specifications of Walton laptops: Design: Walton laptops come in a variety of form factors, including traditional clamshell and 2-in-1 convertible. They are designed to be sleek and portable, making them easy to carry around.",
            img: "https://i.pinimg.com/originals/cd/ac/6c/cdac6c5cbed924120b9e1ecd3d61f96a.jpg",
        },
        {
            name: "ACCER",
            details: "Acer is a leading manufacturer of laptops that are known for their quality, durability, and affordability. Here are some of the features and specifications of Acer laptops: Design: Acer laptops come in a variety of form factors, including traditional clamshell, 2-in-1 convertible, and gaming laptops. They are designed to be sleek and portable, making them easy to carry around.",
            img: "https://1000logos.net/wp-content/uploads/2016/09/Acer-Logo-2001.png",
        },
    ]

    return (
        <div>
            <h1 className='text-4xl font-bold text-center my-10 text-slate-500'>Brands</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'>
                {
                    brands.map(brand => <BrandCard key={brand.name} brand={brand}></BrandCard>)
                }
            </div>
        </div>
    );
};

export default Brands;