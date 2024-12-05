import styled from "styled-components";

export const Container = styled.main`
    display: grid;
    grid-template-columns: 250px auto;
    height: 100vh;

    @media (max-width: 840px) {
        grid-template-columns: 1fr;
    }
`  

export const Main = styled.section`
    width: 100%;
    height: 100vh;
    background-color: var(--dark);
    overflow-x: auto;
`

export const ContainerMain = styled.section`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 5rem 2rem;
    border-radius: 50px 0 0 50px;
    background-color: var(--white);
    box-shadow: var(--inner-shadow);

    h3 {
        margin-top: 3rem;
        margin-bottom: 1rem;
    }

    @media (max-width: 768px) {
        position: fixed;
        top: 5rem;
        padding: 3rem 1rem;
        border-radius: 30px 30px 0 0;
        box-shadow: 0px 10px 15px 0px #00000040 inset;
        overflow-y: auto;
    }
`

export const ContainerBody = styled.div`
    width: 100%;
    display: flex;
    gap: 3rem;

    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        gap: 1rem;
    }
`

export const ContainerMovimentacoes = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    background: var(--gradient);
    border-radius: 1.25rem;
    padding: 1rem;
    margin-top: 3rem;
    overflow: hidden;

    .btnMov {
        background: transparent;
        border: none;
        color: var(--dark);
        font-size: 20px;
        cursor: pointer;
    }
    
    h3 {
        margin: 0;
    }

    @media (max-width: 768px) {
        width: 100%;
        margin: 2rem 0 5rem 0;
    }
`