import { AllProducts } from "../../hooks/useGraphQLFetch/types"

export type ProductRightProps = {
    productData: AllProducts
}

export type FormattedSpecification = {
    [key: string]: string | number
}

export type FormattedSpecifications = FormattedSpecification[]