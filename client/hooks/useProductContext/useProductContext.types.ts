import { Dispatch, SetStateAction } from "react";

export type ProductContextObj = {
    productQuantity: number;
    setProductQuantity: Dispatch<SetStateAction<number>>;
    basketQuantity: number;
    setBasketQuantity: Dispatch<SetStateAction<number>>;
}