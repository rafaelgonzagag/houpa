import styled from 'styled-components';

export const SearchInput = styled.div `
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