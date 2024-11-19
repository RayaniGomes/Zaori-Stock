import styled from "styled-components";

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
    
    h3 {
        margin: 0 0 1rem 0;
    }

    @media (max-width: 768px) {
        width: 100%;
        margin: 2rem 0 5rem 0;
    }
`
export const Tabela = styled.table`
    width: 100%;
    height: 100%;
    border-radius: .625rem;
    
    tbody {
        overflow: auto;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        tr {
            width: 100%;
            height: 40px;
            background-color: #FFFFFE40;
            border-radius: .625rem;
            margin-bottom:  .5rem;
            display: flex;
            align-items: center;
            gap: 2rem;
            padding: 0 1rem;
            font-size: 14px;
        }
    }

    .bi-arrow-down, .bi-arrow-up {
        font-size: 16px;
    }
`