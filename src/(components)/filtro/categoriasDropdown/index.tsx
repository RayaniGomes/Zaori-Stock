import { CategoriaProps } from '@/interfaces';
import api from '@/service/api';
import { useEffect, useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function CategoriaDropdown() {
    const [categorias, setCategorias] = useState<CategoriaProps[]>([]);

    useEffect(() => {
        api.get('/categories')
            .then((res) => res.data)
            .then((data) => setCategorias(data));
    }, []);
    
    return (
        <>
            <NavDropdown
                id="nav-dropdown-dark-example"
                title="Categorias"
            >
                {categorias.map((categoria) => (
                    <NavDropdown.Item href="#" key={categoria.id}>{categoria.name}</NavDropdown.Item>
                ))}
            </NavDropdown>
        </>
    )
}