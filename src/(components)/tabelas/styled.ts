import styled from "styled-components";

export const SectionTabela = styled.section`
    width: 100%;
    height: auto;
    border-radius: .625rem;
    
    .tabela {
        overflow-x: auto;
    }
    
    table {
        min-width: 1024px;
        width: 100%;
        border-radius: .625rem;
        overflow: hidden;
        
        thead {
            tr {
                display: flex;
                padding: .5rem;
                align-items: center;
                justify-content: space-between;
                background-color: var(--dark);
                padding: .5rem 1rem;
                
                th {
                    width: 150px;
                    background-color: var(--dark);
                    color: var(--white);
                    font-size: 16px;
                    font-weight: 400;
                    border: none;
        
                    button {
                        background-color: transparent;
                        color: var(--white);
                        border: none;
                        margin-left: .5rem;
                    }
                }
            }

        }

        tbody {
            display: flex;
            flex-direction: column;
            width: 100%;

            tr {
                display: flex;
                justify-content: space-between;
                border-bottom: 1px solid #3B36334D;
                padding: 0 1rem;
                
                td {
                    width: 150px;
                    font-size: 14px;
                    font-weight: 400;
                    border: none;

                    a {
                        font-size: 20px;
                        color: var(--dark);
    
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
            
        }   
    }

    .footerTable {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--dark);
        color: var(--white);
        padding: .25rem .5rem;
        font-size: 14px;
        
        tr{
            display: flex;
            align-items: center;    
        }
        td {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            background-color: var(--dark);
            color: var(--white);
            border: none;
        }
        button {
            background-color: transparent;
            border: none;
            color: var(--white) !important;
            font-size: 18px;
            cursor: pointer;
            padding: 0 .5rem;
        }
    }

    .status {
        width: 10px;
        display: flex;
        align-items: center;
        gap: .5rem;
        padding: 0rem 1rem;
    }

    .botoes{
        width: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .descricao {
        width: 200px;
    }
`