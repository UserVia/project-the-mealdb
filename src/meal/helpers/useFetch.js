import { useEffect, useState } from 'react'

export const useFetch = () => {
    const [data, setData] = useState([]);

    const fetchData = async() => {
        const resp = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=w');
        const data = await resp.json();
        console.log(data.meals);
        setData(data.meals)
    }

    useEffect(() => {
        fetchData();
    }, []);

    return {
        data
    }
}
