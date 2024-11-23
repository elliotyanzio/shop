import { useEffect, useState, useCallback } from 'react'
import { UseGraphQLFetchResponse } from './types'


const useGraphQLFetch = <T,>(url: string, query: string): UseGraphQLFetchResponse<T> => {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

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
            setData(gqlRes.data.allProducts[0])
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