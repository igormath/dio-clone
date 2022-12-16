import Header from "../../components/Header/Header";
import StudentCloud from '../../assets/image 1.png';
import { Article, Container, HomeImage, Main, HomeTite } from "./styles";
import Button from "../../components/Button/Button";

const Homepage = () => {
    return (
        <>
            <Header />
            <Main>
                <Container>
                    <Article>
                        <HomeTite>
                            <span>Implemente <br /></span> o seu futuro global agora!
                        </HomeTite>
                        <p>Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.</p>
                        <Button>Começar agora</Button>
                    </Article>
                    <HomeImage src={StudentCloud} alt="Nuvem com alguns alunos da DIO" />
                </Container>
            </Main>

        </>
    );
}

export default Homepage;
