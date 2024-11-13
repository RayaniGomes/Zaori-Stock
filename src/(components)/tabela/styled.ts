import styled from "styled-components";

export const SectionTabela = styled.section`
    width: 100%;
    height: auto;
    border-radius: .625rem;
    
    table {
        width: 100%;
        border-radius: .625rem;
        overflow: hidden;
        

        thead {
            width: 100%;

            tr {
                display: flex;
                padding: .5rem;
                align-items: center;
                justify-content: space-between;
                background-color: var(--dark);
                
                th {
                    background-color: var(--dark);
                    color: var(--white);
                    width: 200px;
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
                
                td {
                    width: 200px;
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

        tfoot {
            display: flex;
            justify-content: center;
            background-color: var(--dark);
            color: var(--white);
            padding: .25rem .5rem;
            font-size: 14px;

            tr{
                td {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    background-color: var(--dark);
                    color: var(--white);
                    border: none;
                    
                    button {
                        background-color: transparent;
                        border: none;
                        color: var(--white);
                        font-size: 18px;
                        cursor: pointer;
                    }
                }
            }
        }
    }

    .status {
        width: 60px;
        display: flex;
        align-items: center;
        gap: .5rem;
        padding: 0rem .25rem;
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