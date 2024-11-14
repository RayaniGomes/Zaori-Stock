import styled from "styled-components";

export const Nav = styled.nav`
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: var(--dark);
    padding: 32px;

    @media (max-width: 840px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 5rem;
        width: 100vw;
        position: fixed;
        top: 0;
        z-index: 1000;
    }
`

export const Logo = styled.a`
    @media (max-width: 840px) {
        img {
            width: 80%;
            height: 80%;
            object-fit: cover;
        }
    }
`

export const Menu = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-top: 10rem;

    @media (max-width: 840px) {
        position: absolute;
        width: 50%;
        height: 100vh;
        top: 5rem;
        left: 50%;
        right: 0;
        margin-top: 0;
        background-color: var(--dark);
        box-shadow: -5px 10px 10px 0px #00000040;
        flex-direction: column;
        justify-content: flex-start;
        gap: 1rem;
        padding: 0 1rem;
        transition: all 0.8s ease-in-out;
        transform: translateX(100%);
        opacity: 0;
        pointer-events: none;
        
        &.open {
            transform: translateX(0);
            opacity: 1;
            pointer-events: all;
        }
    }

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

export const ButtonMenuHamburger = styled.button`
    width: 40px;
    height: 40px;
    background: var(--gradient);
    border: none;
    font-size: 40px;
    display: none;
    align-items: center;
    justify-content: center;
    border-radius: 7px;

    @media (max-width: 840px) {
        display: flex;
    }
`