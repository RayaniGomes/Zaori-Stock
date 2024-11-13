import styled from "styled-components";

export const Container = styled.section`
    position: fixed;
    top: 0;
    right: 0;
    width: 85vw;
    height: 100%;
    padding: 5rem 2rem;
    border-radius: 50px 0 0 50px;
    background-color: var(--white);
    box-shadow: var(--inner-shadow);

    h3 {
        margin-top: 3rem;
        margin-bottom: 1rem;
    }
`

export const SectionContador = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
`