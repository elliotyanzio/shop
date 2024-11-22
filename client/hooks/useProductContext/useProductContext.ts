import { createContext, useContext } from 'react';
import { ProductContextObj } from './useProductContext.types';

export const ProductContext = createContext<ProductContextObj | undefined>(undefined)

const useProductContext = () => {
    const productContext = useContext(ProductContext)

    if (productContext === undefined) {
        throw new Error('useProductContext must have a value')
    }

    return productContext
}

export default useProductContext