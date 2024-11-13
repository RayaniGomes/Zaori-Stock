import Image from "next/image";
import { ButtonMenuHamburger, Logo, Menu, Nav } from "./styled";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    

    return (
        <Nav>
            <Logo href="/app/page">
                <Image 
                    width={183} 
                    height={61} 
                    objectFit="cover"
                    src="./logo.svg" 
                    alt="logo da Zaori Stock" 
                />
            </Logo>

            <Menu className={isMenuOpen ? 'open' : ''}>
                <Link href="/">
                    <i className="bi bi-grid" />
                    Home
                </Link>
                <Link href="" >
                    <i className="bi bi-boxes" />
                    Produtos
                </Link>
                <Link href="" >
                    <i className="bi bi-tags" />
                    Novo Produto
                </Link>
            </Menu>
            
            <ButtonMenuHamburger className={isMenuOpen ? 'bi bi-x' : 'bi bi-list'} onClick={toggleMenu} />
        </Nav>
    )    
}