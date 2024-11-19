import styled from "styled-components";

export const ContainerForms = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
`

export const CampoTextoDuplo = styled.div`
    display: flex;
    gap: 1rem;
`