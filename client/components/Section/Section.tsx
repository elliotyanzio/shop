import { FC } from "react"
import { SectionContainer } from "./Section.styles"
import { SectionProps } from "./Section.types"

const Section: FC<SectionProps> = ({ type = 'Primary', children }): JSX.Element => {
    return (
        <SectionContainer type={type} data-testid={'section-container'}>
            {children}
        </SectionContainer>
    )
}

export default Section