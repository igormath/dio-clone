import { Link } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md';

import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import { Container, Main } from "../home/styles";
import { ContainerAnchor, FormContainer, LoginAnchors, Paragraph, SubtitleLogin } from "./styles";

const linkStyle = {
    fontSize: "1.4rem",
    marginRight: "6vw",
    textDecoration: "none",
    color: "#23DD7A",
}

const iconStyle = {
    fontSize: "1.6rem",
    color: "#8647AD",
}

const Login = () => {
    return (
        <>
            <Header />
            <Main>
                <Container>
                    <Paragraph>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Paragraph>
                    <FormContainer>
                        <h2>Faça seu cadastro</h2>
                        <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                        <form>
                            <Input placeholder="E-mail" type="email" leftIcon={<MdEmail style={iconStyle} />} />
                            <Input placeholder="Password" type="password" leftIcon={<MdLock style={iconStyle} />} />
                            <Link to="/feed"><Button large={true}>Entrar</Button></Link>
                        </form>
                        <ContainerAnchor>
                            <LoginAnchors href="#">Esqueci minha senha</LoginAnchors>
                            <Link to="/cadastrar" style={linkStyle}>Criar conta</Link>
                        </ContainerAnchor>
                    </FormContainer>
                </Container>
            </Main>
        </>
    )
};

export default Login;
