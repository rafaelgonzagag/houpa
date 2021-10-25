import styled from 'styled-components';

export const ContainerLogin = styled.div `
    padding: 10% 40%;

    form {
        display: flex;
        flex-direction: column;
    }

    input {
        margin-bottom: 1em;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.02) -11.29%, rgba(255, 255, 255, 0.004) 100%);
    border: 1px solid #C5C5C5;
    box-sizing: border-box;
    border-radius: 3px;
    height: 36px;
    padding: 3px 12px;
    }

    button {
        background: #3F0B6D;
        border-radius: 4px;
        height: 40px;
        color: var(--FFFFFF);
        border: none;
    }
`