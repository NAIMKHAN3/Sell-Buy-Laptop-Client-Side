import React from 'react';
import toast from 'react-hot-toast';

const MyProductCard = ({ product, setRefetch, refetch }) => {
    const { image, brand, model, selleremail, _id, resale, status } = product;

    const handleDelete = () => {
        const procced = window.confirm('Are You Sure Product deleted?')
        if (procced) {
            fetch(`http://localhost:5000/deleteproduct?id=${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        setRefetch(!refetch)
                        toast.success(' Product Successfully Deleted')
                    }

                })
                .catch(e => console.log(e))
        }

    }
    const handleAdvertice = () => {
        const procced = window.confirm('Are You Sure This product Added a Advertice?')
        if (procced) {
            fetch(`http://localhost:5000/updateproduct?id=${_id}`, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.acknowledged) {
                        toast.success('Added Advertice Success')
                    }
                    else {
                        toast.error(data.message)
                    }

                })
                .catch(e => console.log(e))
        }

    }
    return (
        <div className="card border border-orange-300 p-3">
            {
                status === 'true' && <p className='pl-3 pt-3 text-green-600 font-bold'>Available</p>
            }
            {
                status === 'false' && <p className='pl-3 pt-3 text-red-600 font-bold'>Sold Out</p>
            }

            <figure><img src={image} alt="Shoes" className='lg:h-48 lg:w-full' /></figure>
            <div className="p-2 text-center">
                <h2 className=" text-center text-1xl font-bold">{brand} {model}</h2>

                <p className='font-bold'>S.U Email: <span>{selleremail}</span></p>
                <p className='font-bold'>R Price: <span>{resale}</span></p>
                <div className="card-actions justify-end">
                    <button onClick={handleAdvertice} className="btn btn-info  w-full mt-3">Add Advartice</button>
                    <button onClick={handleDelete} className="btn btn-primary w-full mt-3">Deleted Item</button>
                </div>
            </div>
        </div>
    );
};

export default MyProductCard;