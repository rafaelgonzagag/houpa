import logoImg from '../../assets/logo.svg';
import { Container, Content, ContentMenu } from './styles';

export function Header() {
    return (
        <Container>
            <ContentMenu>
                <a className="link-menu link-ative" href="/">Vitrines</a>
                <a className="link-menu link-desative" href="/gerenciar-vitrines">Gerenciar vitrines</a>
            </ContentMenu>
            <Content>
                <img src={logoImg} alt="houpa" />
            </Content>
        </Container>
    )
}   