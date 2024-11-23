export type ProductCounterProps = {
    productStock: number,
    productQuantity: number,
    incrementFn: () => void,
    decrementFn: () => void
}