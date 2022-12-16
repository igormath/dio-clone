import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    padding: 20vh 60px 10vh;
`;


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

export const Article = styled.article`
    width: 50%;
    p{
        color: #FFF;
        font-size: 16px;
        padding-right: 18vw;
        margin: 4vh 0 8vh;
    }

`;

export const HomeTite = styled.h2`
    font-size: 3.2rem;
    color: #FFF;
    padding-right: 20vw;

    span{
        font-size: 3.2rem;
        color: #E4105D;
    }
`

export const HomeImage = styled.img`
    width: 50%;
`;
