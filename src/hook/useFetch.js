import { useState, useEffect } from "react";


export function useFetch(url){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() =>{
        setLoading(true);
        fetch(url)
        .then(response =>{
            return (response.json());
        })
        .then(res =>{
            return setData(res);
        })
        .catch((e)=>{
            setError(e);
        })
        .finally(()=>{
            setLoading(false);
        })
    },[url]);

    return {data, loading, error};
}