import NavDropdown from 'react-bootstrap/NavDropdown';

export default function MovimentacaoDropdown() {
    return (
        <>
            <NavDropdown
                id="nav-dropdown-dark-example"
                title="Movimentações"
            >
                <NavDropdown.Item href="#action/3.1">Entradas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Saidas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">novos produtos</NavDropdown.Item>
            </NavDropdown>
        </>
    )
}