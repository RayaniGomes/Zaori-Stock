import styled from "styled-components";

export const SectionContador = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;

    @media (max-width: 1024px) {
        width: 100%;
        gap: 2rem;
    }

    @media (max-width: 768px) {
        gap: 1rem;
    }
`