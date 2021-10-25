import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router';
import lojaImg from '../../assets/icon-blusa.svg';
import iconSave from '../../assets/icon-save.svg';
import imgVestido from '../../assets/vestido-icon.svg';

import { Summary } from "../../components/Summary";
import { api } from '../../services/api';
import { ButtonCadastroProduto, Container, Content, FromCadastro, IputNameProduct, IputPriceProduct, TextareaDescriptionProduct } from './styles';



export function Product () {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const history = useHistory();

    function handleCreateProduct (event: FormEvent) {
        event.preventDefault();

        const data = {
            name,
            price,
            description,
            items: {},
            photos: {}
        }

        api.post('products', data)
            .then((response) => {
                alert(response.data.message);
                history.push("/gerenciar-vitrines");
            }).catch((err) => {
                alert(err.response.data.message);
            
                if(err.response.data.message ==='Unauthenticated.') {
                    localStorage.removeItem('@Houpa:token');
                    localStorage.removeItem('@Houpa:user');
                    history.push("/login");
                }
                  
            });
    }
    return (
        <>
        <Summary name="Cadastrar Produto" icone={lojaImg} />
        <Container>
            <Content>
                <FromCadastro onSubmit={handleCreateProduct}>
                    <div id="cabecalho" className="formHeading">
                        <div id="cabecalho-heading">
                            <h1 className="headingTitle">Cadastro de Produto</h1>
                        </div>
                        <ButtonCadastroProduto>
                            <img src={iconSave} alt="buttonsave" />
                            <span>Salvar produto</span>
                        </ButtonCadastroProduto>
                    </div>
                    <div id="headingSumary" className="headingSumary">
                    <img src={imgVestido} alt="iconvestido" />
                        <span>Informações do Produto</span>
                    </div>
                    <div id="formBody">
                        <div className="productRow"> 
                            <div id="groupNameProduct" >
                                <legend>Nome do produto*</legend>
                                <IputNameProduct 
                                    value={name} 
                                    onChange={event => setName(event.target.value.toUpperCase())} 
                                />
                            </div>
                            <div id="groupPriceProduct">
                                <legend>Preço</legend>
                                <IputPriceProduct 
                                    value={price} 
                                    onChange={event => setPrice(Number(event.target.value))} 
                                />
                            </div>
                        </div>
                        <div id="groupDescriptionProduct">
                            <legend>Descrição da peça*</legend>
                            <TextareaDescriptionProduct
                                value={description} 
                                onChange={event => setDescription(event.target.value.toUpperCase())} 
                            />
                        </div>
                    
                    </div>
                </FromCadastro>

        
            </Content>
        </Container>
        </>
    )
} 