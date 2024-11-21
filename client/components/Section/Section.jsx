import { SectionContainer } from "./Section.styles"

const Section = ({ type, children }) => {
    console.log(type)
    return (
        <SectionContainer type={type}>
            {children}
        </SectionContainer>
    )
}

export default Section