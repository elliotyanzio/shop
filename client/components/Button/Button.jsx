import { StyledButton } from "./Button.styles"

const Button = ({ width, height, onClick, disabled, children }) => {
    return (
        <div>
            <StyledButton onClick={onClick} disabled={disabled} width={width} height={height}>
                {children}
            </StyledButton>
        </div>
    )
}

export default Button