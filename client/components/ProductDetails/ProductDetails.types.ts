import { Product } from "../../hooks/useGraphQLFetch/types"

export type ProductDetailsProps = {
    productData: Product
}

export type FormattedSpecification = {
    [key: string]: string | number
}

export type FormattedSpecifications = FormattedSpecification[]