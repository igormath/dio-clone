import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    max-width: 275px;
    height: 30px;
    border-bottom: 1px solid #3B3450;
    background-color: ${({ headerInput }) => headerInput ? "#2D2D37" : "transparent"};
    border-radius: ${({ headerInput }) => headerInput ? "8px" : "0"};
    display: flex;
    align-items: center;
    margin: 33px 0;
`;

export const IconContainer = styled.div`
    margin-right: 10px;
`;

export const InputText = styled.input`
    color: #FFF;
    width: 100%;
    border: 0;
    background-color: ${({ headerInput }) => headerInput ? "#2D2D37" : "transparent"};
    border-radius: ${({ headerInput }) => headerInput ? "8px" : "0"};
    height: 30px;
    font-size: 1.8rem;

    &::placeholder{
        color: #FFF;
    }
`;
