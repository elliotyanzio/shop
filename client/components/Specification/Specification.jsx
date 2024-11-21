import SpecificationItem from "./SpecificationItem"

const Specification = ({ specificationArr }) => {
    return (
        <>
            {specificationArr.map((specificationItem, index) => <SpecificationItem key={index} specificationItem={specificationItem} />)}
        </>

    )
}

export default Specification