

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
                <div className="breadcrumb-container">
                    <div className="breacrumb-stack">
                        <nav aria-label="breadcrumb" className="breadcrumb">
                            <ol className="breadcrumb__list">
                                <li className="breadcrumb__list-item ">
                                    <a className="chakra-breadcrumb__link link1" href="/">houpa!</a>
                                    <span role="presentation" className="css-10go69x">
                                        <svg viewBox="0 0 24 24" focusable="false" className="icon-breadcrumb">
                                            <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                                        </svg>
                                    </span>
                                </li>
                                <li className="breadcrumb__list-item "><a className="breadcrumb__link link2" href="/vitrines"> Vitrines</a></li>
                            </ol>
                        </nav>
                        <div className="stack-summary-container">
                            <div className="stack-summary">
                                <div className="stack-summary-icone">
                                    <img src={props.icone} alt="icone"></img>
                                </div>
                                <h6 className="stack-summary-heading">{props.name}</h6>
                                
                                
                            </div>
                            <div>
                                <p>{props.description}</p>
                            </div>
                        </div>
    
                    </div>
                    
                </div>
                
             
            </Content>
        </Container>
    )
} 