import NavDropdown from 'react-bootstrap/NavDropdown';

export default function CategoriaDropdown() {
    return (
        <>
            <NavDropdown
                id="nav-dropdown-dark-example"
                title="Categorias"
            >
                <NavDropdown.Item href="#action/3.1">Categoria</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Categoria</NavDropdown.Item>
            </NavDropdown>
        </>
    )
}