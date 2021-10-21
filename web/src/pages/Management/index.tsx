import lojaImg from '../../assets/icon-cabide.svg';
import pesquisarImg from '../../assets/icon-pesquisar.svg';
import editImg from '../../assets/icon-edit-regular.svg';
import deleteImg from '../../assets/x-icon.svg';
import fotoImg from '../../assets/foto1.png';

import { Summary } from "../../components/Summary";
import { Container, ProductItem, ProductList, Search } from './styles';

export function Management () {
    return (
        <>
        <Summary name="Gerenciar Vitrines" icone={lojaImg} description="Cadastre seus produtos"/>
        <Container>
            <Search>
                <div>
                    <img src={pesquisarImg} alt="seach"></img>
                </div>
                
                <input placeholder="Pesquisar nome do produto" value=""/>
            </Search>
            <ProductList>
                <ProductItem>
                    <div id="photo" className="item-photo">
                        <img src={fotoImg} alt="foto"></img>
                    </div>
                    <div id="detalhes" className="item-detalhes">
                        <strong>TOP CROPPED VISCOSE</strong>
                        <span>Marca: Unique Chic</span>
                        <span>Ref.: 0296845610</span>
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
                <ProductItem>
                    <div id="photo" className="item-photo">
                        <img src={fotoImg} alt="foto"></img>
                    </div>
                    <div id="detalhes" className="item-detalhes">
                        <strong>TOP CROPPED VISCOSE</strong>
                        <span>Marca: Unique Chic</span>
                        <span>Ref.: 0296845610</span>
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
                <ProductItem>
                    <div id="photo" className="item-photo">
                        <img src={fotoImg} alt="foto"></img>
                    </div>
                    <div id="detalhes" className="item-detalhes">
                        <span>TOP CROPPED VISCOSE</span>
                        <span>Marca: Unique Chic</span>
                        <span>Ref.: 0296845610</span>
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
                <ProductItem>
                    <div id="photo" className="item-photo">
                        <img src={fotoImg} alt="foto"></img>
                    </div>
                    <div id="detalhes" className="item-detalhes">
                        <span>TOP CROPPED VISCOSE</span>
                        <span>Marca: Unique Chic</span>
                        <span>Ref.: 0296845610</span>
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
                <ProductItem>
                    <div id="photo" className="item-photo">
                        <img src={fotoImg} alt="foto"></img>
                    </div>
                    <div id="detalhes" className="item-detalhes">
                        <span>TOP CROPPED VISCOSE</span>
                        <span>Marca: Unique Chic</span>
                        <span>Ref.: 0296845610</span>
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
            </ProductList>
        </Container>
        </>
    )
}