import React from 'react';
import toast from 'react-hot-toast';

const ReportCard = ({ reportItem, refetch }) => {
    const { image, brand, model, reporteduser, selleremail, _id, productId } = reportItem;
    const handleDelete = () => {
        const procced = window.confirm('Are you sure deleted product?')
        if (procced) {
            fetch(`http://localhost:5000/deletereport?id=${_id}&email=${reporteduser}&productId=${productId}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        refetch();
                        toast.success('Report Item Deleted Success')
                    }

                })
                .catch(e => console.log(e))
        }

    }
    return (
        <div className="card border border-orange-300 p-3">
            <figure><img src={image} alt="Shoes" className='lg:h-48 lg:w-full' /></figure>
            <div className="p-2 text-center">
                <h2 className=" text-center text-3xl font-bold">{brand} {model}</h2>
                <p className='my-3'>R.U Email: <span className='font-bold'>{reporteduser}</span></p>
                <p>S.U Email: <span className='font-bold'>{selleremail}</span></p>
                <div className="card-actions justify-end">
                    <button onClick={handleDelete} className="btn btn-primary w-full my-3">Deleted Item</button>
                </div>
            </div>
        </div>
    );
};

export default ReportCard;