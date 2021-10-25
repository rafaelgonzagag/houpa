import lojaImg from '../../assets/icon-loja.svg';
import fotoImg from '../../assets/foto1.png';
import { Search } from '../../components/Search';


import { Summary } from '../../components/Summary';
import { Container, Content, ShowcasesList } from './styles';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';


interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

export function Home () {
    
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        api.get('showcases')
        .then(response => setProducts(response.data.products))
    }, []);
    
    return (
        <>
            <Summary name="Vitrines" icone={lojaImg} />
            <Container>
                <Content>
                    <div id="filter-container" className="filterContainer">
                        <div id="filter" className="filter">
                            <span>Todos</span>
                        </div>
                        <div id="vitrine-search">
                            <Search />
                        </div>
                    </div>
                    
                    <div id="outro"></div>
                    <ShowcasesList>
                        {products.map(product => (
                            <div id="showcases-item" key={product.id}>
                                <div id="showcase-item-photo">
                                    <img src={fotoImg} alt="foto"></img>
                                </div>
                                <div  id="showcase-item-info" className="showcase-item-info">
                                    <strong>{product.name}</strong>
                                    <span>{new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(product.price)}</span>
                                </div>
                               
                            </div>
                        ))}  
                    </ShowcasesList>

                </Content>
            </Container>
        
        </>
    )
}