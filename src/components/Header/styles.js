import styled from "styled-components";

export const HeaderElement = styled.header`
    display: flex;
    height: 47px;
    width: 100%;
    background-color: #151515;
`;

export const Logo = styled.img`
    height: 25px;
    width: 63px;
`;

export const Btn = styled.button`
    height: 22px;
    width: 120px;
    color: #FFF;
    background-color: #565656;
    border: none;
    border-radius: 11px;
    font-size: 1.8rem;
    line-height: 2vh;
    cursor: pointer;

    margin: 0 ${props => props.center ? "1.4vw" : "0"};

    &:hover{
        background-color: #E4105D;
        transition: 0.2s ease-out 0s;
    }
`;

export const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${({ authenticated }) => authenticated ? "flex-end" : "space-between"};
    padding: 0 9vh;
`;

export const HomeLink = styled.p`
    color: #FFF;
    font-size: 1.8rem;
    line-height: 2vh;
    text-decoration: none;
`;

export const Navigation = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Options = styled.a`
    color: #FFF;
    font-weight: 700;
    font-size: 1.8rem;
    text-decoration: none;
`;
