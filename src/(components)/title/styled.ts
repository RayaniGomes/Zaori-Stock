import styled from "styled-components";

export const TitleWapper = styled.section`
    display: flex;
    align-items: center;
    gap: .5rem;

    button {
        color: var(--dark);
        background: var(--gradient);
        font-size: 20px;
        border-radius: 10px;
        padding: .5rem; 
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    h2 {
        margin-bottom: 0 !important;
    }

    @media (max-width: 768px) {
        button {
            font-size: 15px;
        }
    }

    @media (max-width: 320px) {
        align-items: flex-start;
    }
`