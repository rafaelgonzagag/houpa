import logoImg from '../../assets/logo.svg';
import { Container, Content, ContentMenu } from './styles';

export function Header() {
    return (
        <Container>
            <ContentMenu>
                <a href="/">Vitrines</a>
                <a href="/gerenciar-vitrines">Gerenciar vitrines</a>
            </ContentMenu>
            <Content>
                <img src={logoImg} alt="houpa" />
            </Content>
        </Container>
    )
}   