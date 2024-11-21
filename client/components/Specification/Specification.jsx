import SpecificationItem from "./SpecificationItem"

const Specification = ({ specificationArr }) => {
    return (
        <>
            <h2>Specifications</h2>
            {specificationArr.map((specificationItem, index) => <SpecificationItem key={index} specificationItem={specificationItem} />)}
        </>

    )
}

export default Specification