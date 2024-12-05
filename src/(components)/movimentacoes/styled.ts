import styled from "styled-components";

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