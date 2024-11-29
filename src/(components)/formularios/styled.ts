import styled from "styled-components";

export const ContainerForms = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 3rem;
`

export const CampoTexto = styled.div`
    display: flex;
    flex-direction: column;
    gap: .25rem;
    width: 100%;

    label {
        font-size: 14px;
        color: var(--dark);
    }

    input, select {
        width: 100%;
        height: 40px;
        border-radius: .625rem;
        border: none;
        background-color: var(--white);
        padding: 0 .5rem;
        box-shadow: var(--drop-shadow);
    }

    textarea {
        width: 100%;
        height: 100px;
        border-radius: .625rem;
        border: none;
        background-color: var(--white);
        padding: .5rem;
        box-shadow: var(--drop-shadow);
    }
`

export const CampoTextoDuplo = styled.div`
    display: flex;
    gap: 1rem;

    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
    }
`

export const Quantidade = styled.div`
    display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        width: 100%;
        height: 40px;
        border-radius: .625rem;
        border: none;
        background-color: var(--white);
        padding: 0 .5rem;
        box-shadow: var(--drop-shadow);

        input {
            background-color: transparent;
            box-shadow: none;
            text-align: center;
        }

        button {
            background: var(--gradient);
            border: none;
            border-radius: 5px;
            font-size: 20px;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;

        } 

        button:hover {
            background: var(--dark);
            color: var(--white);
        }
`

export const CampoButtons = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 5rem;

    @media (max-width: 768px) {
        width: 80%;
        margin: 0 auto;
        margin-top: 2rem;
    }
`
