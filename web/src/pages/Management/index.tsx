import lojaImg from '../../assets/icon-cabide.svg';
import pesquisarImg from '../../assets/icon-pesquisar.svg';
import editImg from '../../assets/icon-edit-regular.svg';
import deleteImg from '../../assets/x-icon.svg';
import fotoImg from '../../assets/foto1.png';

import { Summary } from "../../components/Summary";
import { Container, ProductItem, ProductList, Search } from './styles';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
//import { useHistory } from 'react-router';

interface Product {
    id: number;
    name: string;
    image: string;
}

export function Management () {
    const [products, setProducts] = useState<Product[]>([]);
    //const history = useHistory();
    useEffect(() => {
        api.get('products')
        .then((response) => {
            
            setProducts(response.data.products)
        }).catch((err) => {
            if(err.response.data.message) {
                localStorage.removeItem('@Houpa:token');
                localStorage.removeItem('@Houpa:user');
                //history.push("login");
            }           
        });
    }, []);

    return (
        <>
        <Summary name="Gerenciar Vitrines" icone={lojaImg} description="Cadastre seus produtos" showMeButtton={true}/>
        <Container>
            <Search>
                <div>
                    <img src={pesquisarImg} alt="seach"></img>
                </div>
                
                <input placeholder="Pesquisar nome do produto" value=""/>
            </Search>
            <ProductList>
                {products.map(product => (
                    <ProductItem>
                        <div id="photo" className="item-photo">
                            <img src={fotoImg} alt="foto"></img>
                        </div>
                        <div id="detalhes" className="item-detalhes">
                            <strong>{product.name}</strong>
                        </div>
                        <div id="controles" className="item-action">
                            <div id="edit">
                                <img src={editImg} alt="edit"></img>
                            </div>
                            <div id="delete">
                                <img src={deleteImg} alt="delete"></img>
                            </div>
                        </div>
                    </ProductItem>
                ))}
            </ProductList>
        </Container>
        </>
    )
}