import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
    padding:20px;
`


export const Search = styled.div `
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    border-width: 1px;
    border-style: solid;
    border-color: #C8C8C8;
    box-sizing: border-box;
    border-radius: 5px;
    max-width: 500px;
    width: 351px;
    height: 44px;
    padding: 12px;
    background: var(--FFFFFF);
    grid-gap: 2px;

    input {
        flex: 1;
        font-size: 100%;
        border: none;
    }
`

export const ProductList = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ProductItem = styled.div `
    width: 613px;
    height: 65px;
    background: #FAFAFA;
    border: 1.29364px solid #E9E9E9;
    box-sizing: border-box;
    border-radius: 6px;
    display: flex;

    margin: 10px;
    padding: 7px;

    justify-content: space-around;


    .item-photo {
        width: 35.82px;
        border: 0.833499px solid #C8C8C8;
        box-sizing: border-box;
        height: 46.57px;

        img {
            width: 35.82px;
            height: 46.57px;
        }
    }

    .item-detalhes {
        display: flex;
        flex-direction: column;
        font-weight: 600;
        font-size: 10px;
        line-height: 13px;
        letter-spacing: 0.2px;
        color: #707070;
    }

    .item-action {
        display: flex;
        justify-content: flex-start;
    }
`
