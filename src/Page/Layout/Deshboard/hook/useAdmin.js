import { useEffect, useState } from "react";

const useAdmin = (email) => {
    const [isAdmin, setAdmin] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`https://sell-buy-laptop-server-side.vercel.app/checkadmin?email=${email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setAdmin(data.role);
                setIsLoading(false)
            })
            .catch(e => console.log(e))
    }, [email])



    return [isAdmin, isLoading]
}


export default useAdmin;