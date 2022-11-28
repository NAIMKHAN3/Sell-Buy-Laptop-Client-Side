import { useEffect, useState } from "react";

const useBuyer = (email) => {
    const [isBuyer, setBuyer] = useState('')
    const [isLoadings, setIsLoadings] = useState(true)

    useEffect(() => {
        fetch(`https://sell-buy-laptop-server-side.vercel.app/checkbuyer?email=${email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setBuyer(data.role);
                setIsLoadings(false)
            })
            .catch(e => console.log(e))
    }, [email])



    return [isBuyer, isLoadings]
}


export default useBuyer;