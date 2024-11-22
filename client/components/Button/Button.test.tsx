import { ThemeProvider } from "styled-components";
import Button from "./Button";
import { render, fireEvent } from "@testing-library/react";
import { theme } from '../../styles/theme'

const mockOnClick = jest.fn()

describe('Button component tests', () => {
    it('should render a button that contains the text, have the correct properties and fire the onClick method when clicked', () => {
        const { getByRole } = render(
            <ThemeProvider theme={theme}>
                <Button onClick={mockOnClick()} disabled={true} height={'50px'} width={'100%'}>
                    <p>Button text</p>
                </Button>
            </ThemeProvider>
        )

        const testButton = getByRole('button')
        expect(testButton).toHaveStyle({ height: '50px', width: '100%' })
        expect(testButton).toHaveTextContent('Button text')

        fireEvent.click(testButton)
        expect(mockOnClick).toHaveBeenCalledTimes(1)
    })

    it('should render a disbaled button', () => {
        const { getByRole } = render(
            <ThemeProvider theme={theme}>
                <Button onClick={mockOnClick()} disabled={true}>
                    <p>Button text</p>
                </Button>
            </ThemeProvider>
        )
        const testButton = getByRole('button')
        expect(testButton).toBeDisabled()
    })
})