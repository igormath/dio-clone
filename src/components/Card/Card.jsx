import { FiThumbsUp } from 'react-icons/fi'

import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from "./style";

import PostBackground from '../../assets/Rectangle 6.png'

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src={PostBackground} />
            <Content>
                <UserInfo>
                    <UserPicture src='https://avatars.githubusercontent.com/u/66342961?v=4' />
                    <div>
                        <h4>Igor Matheus</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para o curso de HTML e CSS</h4>
                    <p>Projeto feito no curso de html e css no bootcamp da dio do Global avanade...<strong>Ver Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export default Card;
