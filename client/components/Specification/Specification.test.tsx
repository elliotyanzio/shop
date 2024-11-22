import { ThemeProvider } from "styled-components";
import Specification from "./Specification";
import { render } from "@testing-library/react";
import { theme } from '../../styles/theme'
import { FormattedSpecifications } from "../ProductRight/ProductRight.types";

export const mockSpecifications: FormattedSpecifications = [
    {
        title: 'brand',
        value: 'apple'
    },
    {
        title: 'power',
        value: '10 Watts'
    },
    {
        title: 'camera',
        value: '12 megapixel'
    }
]

describe('Specification component tests', () => {
    it('Should render all specifications correctly', () => {
        const { getByText } = render(
            <ThemeProvider theme={theme}>
                <Specification specificationArr={mockSpecifications} />
            </ThemeProvider>
        )

        mockSpecifications.map((specification) => {
            expect(getByText(`${specification.title}:`)).toBeInTheDocument()
            expect(getByText(specification.value)).toBeInTheDocument()
        })
    })
})