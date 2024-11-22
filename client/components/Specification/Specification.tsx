import { FC } from "react"
import SpecificationItem from "./SpecificationItem"
import { SpecificationProps } from "./Specification.types"

const Specification: FC<SpecificationProps> = ({ specificationArr }): JSX.Element => {
    return (
        <>
            {specificationArr.map((specificationItem, index) => <SpecificationItem key={index} specificationItem={specificationItem} />)}
        </>

    )
}

export default Specification