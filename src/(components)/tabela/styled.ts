import styled from "styled-components";

export const Titulo = styled.h3`
    margin-top: 3rem;
`

export const SectionTabela = styled.section`
    table {
        width: 100%;
        border-radius: .625rem;
        box-shadow: var(--drop-shadow);
        overflow: hidden;
    }

    thead {
        background-color: var(--dark);
        color: var(--white);
        padding: .25rem .5rem;
        display: flex;
        align-items: center;

        th {
            padding: .5rem;
            font-size: 16px;
            font-weight: 400;

            button {
                background-color: transparent;
                color: var(--white);
                border: none;
            }
        }
    }

    tbody {
        display: flex;
        width: 100%;
        
        th {
            padding: .5rem .75rem;
            font-size: 14px;
            font-weight: 400;

            a {
                color: var(--dark);
                font-size: 20px;

                &:hover {
                    color: var(--yellow);
                }
            }

            button {
                background-color: transparent;
                color: var(--dark);
                border: none;
                font-size: 20px;

                &:hover {
                    color: var(--yellow);
                }
            }
        }
    }

    

    .bi-arrow-down {
        color: var(--red);
        font-size: 20px;
    }

    .bi-arrow-up {
        color: var(--green);
        font-size: 20px;
    }
`

export const Status = styled.th`
    width: 50px;
    margin: 0 auto;
`

export const Data = styled.th`
    width: 200px;
`

export const Nome = styled.th`
    width: 200px;
`

export const Descricao = styled.th`
    width: 400px;
`

export const Preco = styled.th`
    width: 200px;
`

export const Categoria = styled.th` 
    width: 200px;
`

export const Quantidade = styled.th`
    width: 200px;
`
