import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("No Network Response!")
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        fetchData();
    }, [url])

    return { data, loading, error }
}

export default useFetch;