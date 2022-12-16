import { Link } from 'react-router-dom';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';

import Header from "../../components/Header/Header"
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import { Container, Main } from "../home/styles";
import { FormContainer } from "../login/styles";
import { DeclareParagraph, LoginAdvice, SignupParagraph, Sub } from "./styles";

const linkStyle = {
    color: "#23DD7A",
    fontSize: "1.4rem",
    textDecoration: "none"
};

const iconStyle = {
    fontSize: "1.6rem",
    color: "#8647AD",
}

const Signup = () => {
    return (
        <>
            <Header />
            <Main>
                <Container>
                    <SignupParagraph>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</SignupParagraph>
                    <FormContainer>
                        <h2>Comece agora grátis</h2>
                        <Sub>Crie sua conta e make the change._</Sub>
                        <form>
                            <Input placeholder="Nome completo" leftIcon={<MdPerson style={iconStyle} />} />
                            <Input placeholder="E-mail" type="email" leftIcon={<MdEmail style={iconStyle} />} />
                            <Input placeholder="Password" type="password" leftIcon={<MdLock style={iconStyle} />} />
                            <Button large={true}>Criar minha conta</Button>
                        </form>
                        <DeclareParagraph>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</DeclareParagraph>
                        <LoginAdvice>Já tenho conta. <Link style={linkStyle} to="/entrar">Fazer login</Link></LoginAdvice>
                    </FormContainer>
                </Container>
            </Main>
        </>
    )
}

export default Signup;
