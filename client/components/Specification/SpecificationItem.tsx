import { FC } from "react"
import { SpecificationItemContainer, SpecificationItemSide, SpecificationItemText } from "./Specification.styles"
import { SpecificationItemProps } from "./Specification.types"

const SpecificationItem: FC<SpecificationItemProps> = ({ specificationItem }): JSX.Element => {
    return (
        <SpecificationItemContainer>
            <SpecificationItemSide>
                <SpecificationItemText>{specificationItem.title}:</SpecificationItemText>
            </SpecificationItemSide>
            <SpecificationItemSide>
                <SpecificationItemText>{specificationItem.value}</SpecificationItemText>
            </SpecificationItemSide>
        </SpecificationItemContainer>
    )
}

export default SpecificationItem