import { useEffect, useState } from "react";

function useFetch(url) {
   const [data, setData] = useState(null);
   const [loadning, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(()=>{
    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false)
        }
    }
    fetchData();
   },[url])

   return {data,loadning,error}
}


export default useFetch;