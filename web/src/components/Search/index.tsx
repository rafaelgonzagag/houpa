import { SearchInput } from "./styles";
import pesquisarImg from '../../assets/icon-pesquisar.svg';

export function Search () {
    return (
        <SearchInput>
            <div>
                    <img src={pesquisarImg} alt="seach"></img>
                </div>
                
                <input placeholder="Pesquisar nome do produto" type="text" value=""/>
        </SearchInput>
    )
}