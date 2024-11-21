import { SpecificationItemContainer, SpecificationItemSide, SpecificationItemText } from "./Specification.styles"

const SpecificationItem = ({ specificationItem }) => {
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