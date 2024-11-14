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

    .nav-link {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: auto;
        height: 40px !important;
        font-size: 14px;
        background-color: var(--white) !important;
        padding: 0 .5rem !important;
        border-radius: .625rem ;
    }

    .dropdown-menu {
        width: 100%;
        font-size: 14px;
    }

    .dropdown-item.active,
    .dropdown-item:active {
        color: var(--dark) !important;
        background: var(--gradient) !important;
    }

    .dropdown-item:focus,
    .dropdown-item:hover {
        color: var(--dark);
        background: var(--gradient)
    }

    @media (max-width: 1024px) {
        width: 100%;
        display: grid;
        grid-template-columns: auto auto;

        .nav-link {
            width: 100%;
        }
    }

    @media (max-width: 768px) {
        width: 100%;
        display: grid;
        grid-template-columns: 400px auto;

        .nav-link, 
        .dropdown-item {
            font-size: 12px !important;
        }
    }

    @media (max-width: 550px) {
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        .nav-link {
            padding: 0 .25rem !important;
        }
    }

    @media (max-width: 475px) {
        gap: .5rem;
        .nav-link {
            padding: 0 .25rem !important;
        }
    }
`

export const Left = styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
    
    @media (max-width: 1024px) {
        gap: .5rem;
    }

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 200px 80px 110px;
        gap: .5rem;
    }

    @media (max-width: 500px) {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    @media (max-width: 320px) {
        flex-wrap: wrap;
    }
`

export const Pesquisar = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    background-color: var(--white);
    border-radius: .625rem;
    
    button {
        background-color: transparent;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 .5rem;
        cursor: pointer;
    }

    input {
        padding: 0 .5rem;
        width: 100%;
        height: 40px;
        border: none;
        border-radius: .625rem;
        font-size: 14px;
        font-weight: 400;
    }

    @media (max-width: 768px) {
        input {
            font-size: 12px;
        }

        button {
            padding: 0 .25rem;
        }
    }

    @media (max-width: 500px) {
        width: 100%;
    }
`