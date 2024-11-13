import styled from "styled-components";

export const ContainerHome = styled.section`
    display: grid;
    grid-template-columns: 250px auto;
    width: 100%;
    height: 100vh;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const SessaoMain = styled.main`
    width: 100%;
    height: 100vh;
    background-color: var(--dark);
`

export const Container = styled.section`
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

    @media (max-width: 768px) {
        position: fixed;
        top: 5rem;
        border-radius: 50px 50px 0 0;
        box-shadow: 0px 10px 15px 0px #00000040 inset;
        overflow-y: auto;
    }
`

export const SectionContador = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
`