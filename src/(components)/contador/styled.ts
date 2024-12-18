import styled from "styled-components";

export const ContadorContainer = styled.div`
    width: 13.5rem;
    height: 6.25rem;
    display: flex;
    flex-direction: column;
    gap: .75rem;
    padding: .5rem;
    background: var(--gradient);
    border-radius: .625rem;
    box-shadow: var(--drop-shadow);

    h2 {
        text-align: center;
    }

    @media (max-width: 1024px) {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 768px) {
        gap: 0rem;
    }
`