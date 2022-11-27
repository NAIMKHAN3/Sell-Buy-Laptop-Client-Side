import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ReportCard from './ReportCard/ReportCard';

const ReportsItem = () => {
    const { data: allReportItems = [], refetch } = useQuery({
        queryKey: ['allreportitem'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allreportitem', { headers: { authorization: `Bearer ${localStorage.getItem('token')}` } })
            const data = await res.json()
            return data
        }
    })

    if (!allReportItems.length) {
        refetch()
        return <h1 className=' text-center font-bold text-4xl text-orange-400 my-5'>Reported Item Empty</h1>
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