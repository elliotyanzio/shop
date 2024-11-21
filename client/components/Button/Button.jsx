import { StyledButton } from "./Button.styles"

const Button = ({ text, onClick, disabled }) => {
    return (
        <div>
            <StyledButton onClick={onClick} disabled={disabled}>{text}</StyledButton>
        </div>
    )
}

export default Button