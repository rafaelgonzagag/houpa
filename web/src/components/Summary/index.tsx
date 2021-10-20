

import { Container, Content } from "./styles";

interface SummaryProps {
    name: string,
    icone: string,
    description?: string,
}

export function Summary(props: SummaryProps) {
    return (
        <Container>
            <Content>
                <header>
                    <span>houpa! - {props.name}</span>
                </header>
                <img src={props.icone} alt="loja"></img>
                <strong>{props.name}</strong>
                <p>{props.description}</p>
            </Content>
        </Container>
    )
} 