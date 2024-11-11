import styled from "styled-components";

export const Nav = styled.nav`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--dark);
    padding: 32px;
`

export const Menu = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-top: 10rem;

    

    a {
    color: var(--white);
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    padding: .5rem 1rem;
    border-radius: .625rem;
    display: flex;
    align-items: center;
    gap: .5rem;

    i {
        color: var(--white);
        font-size: 24px;
    }

    &:hover {
        i {
            color: var(--dark);
        }

        background: var(--gradient);
        color: var(--dark);
    }
}
`