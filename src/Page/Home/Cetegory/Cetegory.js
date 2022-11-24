import { useContext } from 'react';
import { AuthContex } from '../../Share/UserContex/UserContext';
import CetegoryCard from '../CetegoryCard/CetegoryCard';

const Cetegory = () => {
    const { cetegorys } = useContext(AuthContex);

    if (!cetegorys) {
        return
    }

    return (
        <div>
            <h1 className='text-4xl font-bold text-orange-400 text-center mt-10'>Cetegories</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 mx-auto my-5'>
                {
                    cetegorys.map(cetegory => <CetegoryCard key={cetegory._id} cetegory={cetegory}></CetegoryCard>)
                }
            </div>
        </div>
    );
};

export default Cetegory;