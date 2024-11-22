import { FC } from "react"
import { StyledButton } from "./Button.styles"
import { ButtonProps } from "./Button.types"

const Button: FC<ButtonProps> = ({ width, height, onClick, disabled, children }): JSX.Element => {
    return (
        <div>
            <StyledButton onClick={onClick} disabled={disabled} width={width} height={height}>
                {children}
            </StyledButton>
        </div>
    )
}

export default Button