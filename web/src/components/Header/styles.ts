import styled from 'styled-components';

export const ContentMenu = styled.div`
    display:flex;
    align-items: center;
    max-width: 1120px;
    margin:0 auto;
    height: 44px;

    a {
        cursor: pointer;
        text-decoration: none;
        color: var(--FFFFFF);
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