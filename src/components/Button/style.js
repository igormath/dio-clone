import styled from "styled-components";

export const ButtonContainer = styled.button`
    min-width: ${props => props.large ? "264px" : "167px"};
    height: 33px;
    border-radius: 22px;
    position: relative;
    color: #FFF;
    padding: 2px 12px;
    background: #E41050;
    font-size: 1.8rem;
    border: none;
    cursor: pointer;
    
    &::after{
        content: '';
        position: absolute;
        border: 1px solid #E41050;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
    }

    &:hover{
        opacity: 0.6;
        transition: 0.2s ease-out 0s;
    }
`;
