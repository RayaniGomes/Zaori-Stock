import Image from "next/image";
import { Menu, Nav } from "./styled";

export default function Navbar() {
    return (
        <Nav>
            <a href="/app/page">
                <Image 
                    width={183} 
                    height={61} 
                    src="./logo.svg" 
                    alt="logo da Zaori Stock" 
                />
            </a>

            <Menu>
                <a href="/app/page">
                    <i className="bi bi-grid" />
                    Home
                </a>
                <a href="" >
                    <i className="bi bi-boxes" />
                    Produtos
                </a>
                <a href="" >
                    <i className="bi bi-tags" />
                    Novo Produto
                </a>
            </Menu>
        </Nav>
    )    
}