import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    margin-top: 50px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;

`

export const Content = styled.div `
    -webkit-margin-start: auto;
    margin-inline-start: auto;
    -webkit-margin-end: auto;
    margin-inline-end: auto;
    max-width: 1280px;
    -webkit-padding-start: 1rem;
    padding-inline-start: 1rem;
    -webkit-padding-end: 1rem;
    padding-inline-end: 1rem;
`

export const FromCadastro = styled.form `
    .formHeading {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 3em;
        grid-gap: 11.5em;
    }

    .headingTitle {
        font-weight: 500;
        font-size: 20px;
        color: #000000;
    }

    .headingSumary {
        display: flex;
        align-items: center;
        grid-gap: 1em;
        margin-bottom: 2em;
        font-weight: 500;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: 0.2px;
        color: #3F0B6D;
    }

    .productRow {
        display: flex;
        grid-gap: 4em;
        margin-bottom: 2em;
    }

`

export const ButtonCadastroProduto = styled.button `
    background: #3F0B6D;
    border-radius: 4px;
    width: 178px;
    height: 40px;
    color: var(--FFFFFF);
    align-content: center;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-gap: 1em;
`

export const IputNameProduct = styled.input `
    width: 308px;
    height: 36px;
    border-radius: 3px;
    background: linear-gradient(
    180deg, rgba(255, 255, 255, 0.02) -11.29%, rgba(255, 255, 255, 0.004) 100%);
    border: 1px solid #C5C5C5;
    box-sizing: border-box;
    border-radius: 3px;
    padding: 8px 12px;
`

export const IputPriceProduct = styled.input `
    width: 196px;
    height: 36px;
    background: linear-gradient(
    180deg, rgba(255, 255, 255, 0.02) -11.29%, rgba(255, 255, 255, 0.004) 100%);
    border: 1px solid #C5C5C5;
    box-sizing: border-box;
    border-radius: 3px;
    padding: 8px 12px;
    
`

export const TextareaDescriptionProduct = styled.textarea `
    width: 571px;
    height: 101px;
    background: linear-gradient( 180deg, rgba(255, 255, 255, 0.02) -11.29%, rgba(255, 255, 255, 0.004) 100%);
    border: 1px solid #C5C5C5;
    box-sizing: border-box;
    border-radius: 3px;
    padding: 8px 12px;
`