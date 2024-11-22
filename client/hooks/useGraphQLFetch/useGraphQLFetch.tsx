import { useEffect, useState, useCallback } from 'react'
import { AllProducts, UseGraphQLFetchResponse } from './types'


const useGraphQLFetch = (url: string, query: string): UseGraphQLFetchResponse => {
    const [data, setData] = useState<AllProducts>([])
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