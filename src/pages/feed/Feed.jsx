import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import UserInfo from "../../components/UserInfo/UserInfo";

import { Column, Container, Title, TitleHighlight } from "./styles";

const Feed = () => {
    return (
        <>
            <Header authenticated={true} />
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                    <UserInfo percentual={90} nome="Igor Matheus" image="https://avatars.githubusercontent.com/u/66342961?v=4" />
                    <UserInfo percentual={57} nome="Igor Matheus" image="https://avatars.githubusercontent.com/u/66342961?v=4" />
                    <UserInfo percentual={41} nome="Igor Matheus" image="https://avatars.githubusercontent.com/u/66342961?v=4" />
                    <UserInfo percentual={32} nome="Igor Matheus" image="https://avatars.githubusercontent.com/u/66342961?v=4" />
                    <UserInfo percentual={16} nome="Igor Matheus" image="https://avatars.githubusercontent.com/u/66342961?v=4" />
                </Column>
            </Container>
        </>
    );
}

export default Feed;
