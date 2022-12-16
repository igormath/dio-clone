import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.h3`
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.5rem;
    color: #FFF;
    margin-bottom: 24px;
`;

export const TitleHighlight = styled.h3`
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.5rem;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 24px;
`;

export const Column = styled.div`
    flex: ${({ flex }) => flex};
    padding-right: 24px;
`;
