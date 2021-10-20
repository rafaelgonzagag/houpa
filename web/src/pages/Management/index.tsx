import lojaImg from '../../assets/icon-cabide.svg';
import { Summary } from "../../components/Summary";

export function Management () {
    return (
        <>
        <Summary name="Gerenciar Vitrines" icone={lojaImg} description="Cadastre seus produtos"/>
        </>
    )
}