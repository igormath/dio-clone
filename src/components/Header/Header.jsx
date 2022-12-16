import { MdKeyboardArrowDown, MdSearch } from "react-icons/md";
import Input from "../Input/Input";

import DioLogo from '../../assets/logo-dio 1.png'

import { HeaderElement, Logo, Navigation, Row, Btn, Options } from "./styles";

import { Link } from 'react-router-dom';
import { UserPicture } from '../UserInfo/style';
import { InputContainer } from "../Input/styles";

const linkStyle = {
    color: "#FFF",
    fontSize: "1.8rem",
    lineHeight: "2vh",
    textDecoration: "none"
};

const iconStyle = {
    fontSize: "2rem",
    color: "#FFF",
}

const Header = ({ authenticated }) => {
    return (
        <HeaderElement>
            <Row>
                <Logo src={DioLogo} alt='Logo da DIO' />
                {authenticated ? (
                    <>
                        <InputContainer>
                            <Input placeholder="BUSCAR" headerInput={true} leftIcon={<MdSearch style={iconStyle} />} />
                        </InputContainer>
                        <Options href="#">Live Code</Options>
                        <Options href="#">Global</Options>
                    </>
                ) : null}
            </Row>
            {authenticated ? (
                <Row authenticated={authenticated}>
                    <UserPicture src='https://avatars.githubusercontent.com/u/66342961?v=4' />
                    <MdKeyboardArrowDown style={iconStyle} />
                </Row>
            ) : (
                <Row>

                    <Navigation>
                        <Link to="/" style={linkStyle}>Home</Link>
                        <Link to="/entrar"><Btn center>Entrar</Btn></Link>
                        <Link to="/cadastrar"><Btn>Cadastrar</Btn></Link>
                    </Navigation>
                </Row>)
            }
        </HeaderElement >
    );
}

export default Header;
