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
    width: 100%;
    -webkit-margin-start: auto;
    margin-inline-start: auto;
    -webkit-margin-end: auto;
    margin-inline-end: auto;
    max-width: 1280px;
    -webkit-padding-start: 1rem;
    padding-inline-start: 1rem;
    -webkit-padding-end: 1rem;
    padding-inline-end: 1rem;

    .filterContainer {
        display: flex;
        grid-gap: 30em;
        align-items: flex-end;
    }

    .filter {
        padding: 0px 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 22px;
        text-align: center;
        letter-spacing: 0.199818px;
        color: #3F0B6D;
        border-bottom: 1px solid #3F0B6D;
    }
`

export const ShowcasesList = styled.div `
    display: grid;
    grid-gap: 60px;
    grid-template-columns: repeat(4, 1fr);
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin-top: 40px;
    margin-bottom: 40px;

    .showcase-item-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        grid-gap: 1em;
    }
    .showcase-item-info span {
        color: #450887;
    }
    
`