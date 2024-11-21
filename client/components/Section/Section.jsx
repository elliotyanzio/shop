import { SectionContainer } from "./Section.styles"

const Section = ({ type, children }) => {
    return (
        <SectionContainer type={type}>
            {children}
        </SectionContainer>
    )
}

export default Section