import { useEffect, useState } from "react";

const useSeller = (email) => {
    const [isSeller, setSeller] = useState('')
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://sell-buy-laptop-server-side.vercel.app/checkseller?email=${email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {

                setSeller(data.role);
                setLoading(false)
            })
            .catch(e => console.log(e))
    }, [email])



    return [isSeller, loading]
}


export default useSeller;