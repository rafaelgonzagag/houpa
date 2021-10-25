import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    justify-content: center;
    background: var(--FFFFFF);
    box-shadow: 0px 4px 10px rgb(0 0 0 / 10%);
    height: 141px;
    padding-top: 6px;
    padding-bottom: 6px;
    
`

export const Content = styled.div `
    width: 100%;
    margin-inline-start: auto;
    margin-inline-end: auto;
    max-width: 80rem;
    padding-inline-start: 1rem;
    padding-inline-end: 1rem;

    .breadcrumb-container {
        display: flex;
        flex-direction: row;
        -webkit-box-align: center;
        align-items: center;
        justify-content: space-between;
    }

    .breacrumb-stack {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        height: 20px;
    }

    .breadcrumb {
        border-color: var(--707070);
         word-wrap: break-word;
    }

    ol, ul {
        margin: 0;
        padding: 0;
    }

    .breadcrumb__list-item {
        display: inline-flex;
        -webkit-box-align: center;
        align-items: center;
    }

    .link1 {
        transition-property: var(--chakra-transition-property-common);
        transition-duration: var(--chakra-transition-duration-fast);
        transition-timing-function: var(--chakra-transition-easing-ease-out);
        cursor: pointer;
        -webkit-text-decoration: none;
        text-decoration: none;
        outline: 2px solid transparent;
        outline-offset: 2px;
        color: var(--707070);
    }

    .link2 {
        transition-property: var(--chakra-transition-property-common);
        transition-duration: var(--chakra-transition-duration-fast);
        transition-timing-function: var(--chakra-transition-easing-ease-out);
        cursor: pointer;
        -webkit-text-decoration: none;
        text-decoration: none;
        outline: 2px solid transparent;
        outline-offset: 2px;
        color: #000;
    }
    
    img {
        width: 24px;
        height: 24px;
    }

    .icon-breadcrumb {
        width: 1em;
        height: 1em;
        display: inline-block;
        line-height: 1em;
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        color: var(--707070);
        vertical-align: middle;
    }

    .stack-summary-container {
        margin-top: 2em;
        -webkit-margin-end: 0px;
        margin-inline-end: 0px;
        margin-bottom: 0px;
        -webkit-margin-start: 0px;
        margin-inline-start: 0px;
    }

    .stack-summary {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
    }

    .stack-summary-icone {
        display: inline-block;
        max-width: 100%;
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
        margin: 0;
    }

    .stack-summary-heading {
        margin-top: 0px;
        -webkit-margin-end: 0px;
        margin-inline-end: 0px;
        margin-bottom: 0px;
        -webkit-margin-start: 0.5rem;
        margin-inline-start: 0.5rem;
        font-family: var(--chakra-fonts-heading);
        font-weight: var(--chakra-fontWeights-normal);
        font-size: 24px;
        line-height: 36px;
    }


    .buttonCadastrarProduto {
        display: flex;
        align-items: center;
        margin-top: 1e;
        position: absolute;
        left: 90em;
        top: 11em;
        background: #3F0B6D;
        border-radius: 4px;
        color: #fff;
        border: none;
        height: 40px;

    }

    .buttonCadastrarProduto a {
        font-size: 14px;
        line-height: 20px;
        color: #FAFAFA;
        
        margin: 0px 10px;
        text-decoration: none;
    }

`