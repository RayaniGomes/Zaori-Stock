import styled from "styled-components";

export const ContainerFiltro = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3rem;
    border-radius: .625rem;
    padding: 1rem;
    background-color: var(--dark);
    gap: 1rem;
    box-shadow: var(--drop-shadow);
`

export const Left = styled.div`
    display: flex;
    gap: 2rem;
`

export const Pesquisar = styled.div`
    display: flex;
    align-items: center;
    width: 414px;
    height: 30px;
    background-color: var(--white);
    border-radius: .625rem;
    padding: .5rem;
    
    input {
        padding: 0 .5rem;
        width: 100%;
        border: none;
        border-radius: .625rem;
        font-size: 16px;
        font-weight: 400;
    }
`

export const Dropdown = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 130px;
    padding: .5rem;
    border-radius: .625rem;
    background-color: var(--white);
    cursor: pointer;
`

export const Option = styled.div`
    width: 127px;
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    padding: .5rem;
    border-radius: .625rem;
    position: absolute;
    left: 480px;
    top: 275px;
    gap: .5rem;
    opacity: 0;
    transition: all 0.8s ease-in-out;
    transform: translateX(100%);

    &.open {
        opacity: 1;
        transform: translateX(0);
        color: transparent;
    }
`

