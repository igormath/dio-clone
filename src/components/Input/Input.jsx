import { IconContainer, InputContainer, InputText } from "./styles";

const Input = ({ leftIcon, name, headerInput, ...rest }) => {
    return (
        <InputContainer headerInput={headerInput}>
            {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
            <InputText {...rest} headerInput={headerInput} />
        </InputContainer>
    );
}

export default Input;