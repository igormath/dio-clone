import { ButtonContainer } from "./style";

const Button = ({ children, large }) => {
    return (
        <ButtonContainer large={large}>{children}</ButtonContainer>
    )
}

export default Button;
