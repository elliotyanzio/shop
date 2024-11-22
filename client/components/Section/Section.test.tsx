import { ThemeProvider } from "styled-components";
import Section from "./Section";
import { render, fireEvent } from "@testing-library/react";
import { theme } from '../../styles/theme'

describe('Section component tests', () => {
    it('Should render the section component with the primary background', () => {
        const { getByTestId } = render(
            <ThemeProvider theme={theme}>
                <Section>
                    <p>Test section</p>
                </Section>
            </ThemeProvider>
        )

        const testSection = getByTestId('section-container')
        expect(testSection).toHaveStyle({ backgroundColor: theme.colors.siphon })
        expect(testSection).toHaveTextContent('Test section')
    })

    it('Should render the section component with the secondary background', () => {
        const { getByTestId } = render(
            <ThemeProvider theme={theme}>
                <Section type={'Secondary'}>
                    <p>Secondary test section</p>
                </Section>
            </ThemeProvider>
        )

        const testSection = getByTestId('section-container')
        expect(testSection).toHaveStyle({ backgroundColor: theme.colors.hemocyanin })
        expect(testSection).toHaveTextContent('Secondary test section')
    })

    it('Should render the section component with the footer styling', () => {
        const { getByTestId } = render(
            <ThemeProvider theme={theme} >
                <Section type={'Footer'}>
                    <p>Footer section</p>
                </Section>
            </ThemeProvider>
        )

        const testSection = getByTestId('section-container')
        expect(testSection).toHaveStyle({ backgroundColor: theme.colors.hemocyanin, textAlign: 'center' })
        expect(testSection).toHaveTextContent('Footer section')
    })
})