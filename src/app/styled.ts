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
    overflow: auto;
`

export const ContainerMain = styled.section`
    width: 100%;
    height: 100vh;
    padding: 5rem 2rem;
    border-radius: 50px 0 0 50px;
    background-color: var(--white);
    box-shadow: var(--inner-shadow);

    h3 {
        margin-top: 3rem;
        margin-bottom: 1rem;
    }

    @media (max-width: 840px) {
        position: fixed;
        top: 5rem;
        padding: 3rem 1rem;
        border-radius: 30px 30px 0 0;
        box-shadow: 0px 10px 15px 0px #00000040 inset;
        overflow-y: auto;
    }
`