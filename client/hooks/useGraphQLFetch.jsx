import { useEffect, useState, useCallback } from 'react'

const useGraphQLFetch = (url, query) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchProductData = useCallback(async () => {
        try {
            setLoading(true)
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query })
            })
            const gqlRes = await response.json()
            setData(gqlRes.data.allProducts)
        }
        catch (e) {
            setError(true)
        }
        finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchProductData()
    }, [fetchProductData])

    return {
        data,
        loading,
        error
    }
}

export default useGraphQLFetch;