import styled from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    background-color: #3B4651;
    position: relative;
    margin-bottom: 24px;
`;

export const ImageBackground = styled.img`
    width: 100%;
    height: 180px;
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 12px;
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;

    div{
        margin-left: 12px;
    }

    h4{
        font-style: normal;
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 2.5rem;
        color: #FFF;
    }

    p{
        font-style: normal;
        font-size: 1.2rem;
        line-height: 1.6rem;
        color: #FFF;
    }
`;

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 3px solid #FFF;
`;

export const PostInfo = styled.div`
    margin-bottom: 12px;

    h4{
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 2.5rem;
        color: #FFF;
    }

    p{
        font-size: 1.2rem;
        line-height: 1.6rem;
        color: #FFF;
    }

    strong{
        font-size: 12px
    }
`;

export const HasInfo = styled.div`
    margin-top: 12px;

    h4{
        font-weight: 700;
        font-size: 1.2rem;
        line-height: 1.6rem;
        color: #FFF;
    }

    p{
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 2.2rem;
        color: #FFF;
    }
`;
