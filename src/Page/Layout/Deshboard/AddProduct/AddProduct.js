import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContex } from '../../../Share/UserContex/UserContext';

const AddProduct = () => {
    const { user, cetegorys } = useContext(AuthContex)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const imgbbKey = process.env.REACT_APP_IMGBB_KEY;

    if (!cetegorys) {
        return
    }

    const handleAddProduct = (data) => {
        console.log(data)
        const { brand, location, use, resale, original, model } = data;
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)

        fetch(`https://api.imgbb.com/1/upload?key=${imgbbKey}`, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const image = data.data?.url;
                const sellername = user.displayName;
                const selleremail = user.email;
                const date = new Date().toLocaleDateString("de-DE");

                const product = {
                    brand,
                    model,
                    location,
                    resale,
                    original,
                    use,
                    image,
                    sellername,
                    selleremail,
                    date,
                }
                console.log(product)

            })
            .catch(e => console.log(e))

    }

    return (
        <div className=' my-30  shadow-lg  p-10'>
            <h1 className='text-center mt-10 text-4xl font-bold text-orange-400'>Add Product</h1>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className='flex mt-10'>
                    <div className="form-control w-full mr-3">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <select {...register("brand")} className="select select-bordered w-full">
                            <option defaultValue>HP</option>
                            <option>DELL</option>
                            <option>LENOVO</option>
                            <option>APPLE</option>
                            <option>WALTON</option>
                            <option>ACER</option>

                        </select>
                        {errors.brand && <span className='text-red-500'>This field is required</span>}
                    </div>
                    <div className="form-control w-full mr-3">
                        <label className="label">
                            <span className="label-text">Model</span>
                        </label>
                        <input {...register("model", { required: true })} type="text" className="input input-bordered w-full " />
                        {errors.model && <span className='text-red-500'>This field is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <select {...register("location")} className="select select-bordered w-full">
                            <option defaultValue>Dhaka</option>
                            <option>Chittagong</option>
                            <option>Cumilla</option>
                            <option>Faridhpur</option>
                            <option>Khulna</option>
                            <option>Rajshahi</option>
                            <option>Barisal</option>
                            <option>Sylet</option>
                            <option>Mymensing</option>

                        </select>
                        {errors.location && <span className='text-red-500'>This field is required</span>}
                    </div>
                </div>
                <div className='flex mt-5'>
                    <div className="form-control w-full mr-3">
                        <label className="label">
                            <span className="label-text">Resale Price</span>
                        </label>
                        <input {...register("resale", { required: true })} type="number" className="input input-bordered w-full " />
                        {errors.resale && <span className='text-red-500'>This field is required</span>}
                    </div>
                    <div className="form-control w-full mr-3">
                        <label className="label">
                            <span className="label-text">Original Price</span>
                        </label>
                        <input {...register("original", { required: true })} type="number" className="input input-bordered w-full " />
                        {errors.original && <span className='text-red-500'>This field is required</span>}
                    </div>
                    <div className="form-control w-full mr-3">
                        <label className="label">
                            <span className="label-text">Use Time</span>
                        </label>
                        <input {...register("use", { required: true })} type="text" className="input input-bordered w-full " />
                        {errors.use && <span className='text-red-500'>This field is required</span>}
                    </div>
                </div>
                <div className='flex mt-5-3'>

                    <div className="form-control w-full mr-3">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input {...register("image", { required: true })} type="file" className="input input-bordered  file-input-ghost w-full " />
                        {errors.password && <span className='text-red-500'>This field is required</span>}
                    </div>
                    <div className="form-control w-full mr-3">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input {...register("sellername")} type="text" defaultValue={user.displayName} readOnly className="input input-bordered w-full " />
                        {errors.sellername && <span className='text-red-500'>This field is required</span>}
                    </div>
                    <div className="form-control w-full mr-3">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input {...register("selleremail")} type="text" defaultValue={user.email} readOnly className="input input-bordered w-full " />
                        {errors.selleremail && <span className='text-red-500'>This field is required</span>}
                    </div>
                </div>



                <input className='btn bg-orange-400 w-full my-10 border-none font-bold' type="submit" />
            </form>

        </div>

    );
};

export default AddProduct;