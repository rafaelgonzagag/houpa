import styled from 'styled-components';

export const ContentMenu = styled.div`
    display:flex;
    align-items: center;
    max-width:  80rem;
    margin:0 auto;
    height: 44px;
    grid-gap: 1rem;
    width: 100%;
    margin-inline-start: auto;
    margin-inline-end: auto;
    padding-inline-start: 1rem;
    padding-inline-end: 1rem;
    -webkit-box-align: center;

    a {
        cursor: pointer;
        text-decoration: none;
        color: var(--FFFFFF);
        line-height: 18px;
    }

    .link-menu {
        
    }

    .link-ative{
        transition-property: var(--chakra-transition-property-common);
        transition-duration: var(--chakra-transition-duration-fast);
        transition-timing-function: var(--chakra-transition-easing-ease-out);
        cursor: pointer;
        -webkit-text-decoration: none;
        text-decoration: none;
        outline: 2px solid transparent;
        outline-offset: 2px;
        color: var(--FFFFFF);
        line-height: 18px;
    }
    .link-desative{
        transition-property: var(--chakra-transition-property-common);
        transition-duration: var(--chakra-transition-duration-fast);
        transition-timing-function: var(--chakra-transition-easing-ease-out);
        cursor: pointer;
        -webkit-text-decoration: none;
        text-decoration: none;
        outline: 2px solid transparent;
        outline-offset: 2px;
        color: var(--B5B5B5);
        line-height: 18px;
    }
`
export const Content = styled.div`
    background: var(--5F12B6);
    display:flex;
    align-items: center;
    justify-content: center;
    height: 78px;

    img {
        width: 50px;
        height: 50px;
    }
`

export const Container = styled.header`
    background: var(--450887);
`