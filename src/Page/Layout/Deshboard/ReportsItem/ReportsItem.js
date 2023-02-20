import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ReportCard from './ReportCard/ReportCard';

const ReportsItem = () => {
    const [loading, setLoading] = useState(true)
    const { data: allReportItems = [], refetch } = useQuery({
        queryKey: ['allreportitem'],
        queryFn: async () => {
            const res = await fetch('https://sell-buy-laptop-server-side.vercel.app/allreportitem', { headers: { authorization: `Bearer ${localStorage.getItem('token')}` } })
            const data = await res.json()
            setLoading(false)
            return data
        }
    })
    if (loading) {
        return <div className="text-center">
            <div class="flex justify-center items-center mt-10">
                <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    }

    if (!allReportItems.length) {
        refetch()
        return <h1 className=' text-center font-bold text-4xl text-indigo-500 my-5'>Reported Item Empty</h1>
    }

    return (
        <div>
            <h1 className='my-5 text-center font-bold text-4xl text-orange-400'>Reports Product</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    allReportItems.map(reportItem => <ReportCard key={reportItem._id} reportItem={reportItem} refetch={refetch}></ReportCard>)
                }

            </div>

        </div>
    );
};

export default ReportsItem;