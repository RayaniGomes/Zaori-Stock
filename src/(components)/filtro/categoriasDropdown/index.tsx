import { CategoriaProps } from '@/interfaces';
import api from '@/service/api';
import { useProdutos } from '@/store/storeProdutos';
import { useEffect, useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function CategoriaDropdown() {
    const { filtroCategoriaProdutos } = useProdutos();
    const [categorias, setCategorias] = useState<CategoriaProps[]>([]);
    const [categoiriaSelected, setCategoiriaSelected] = useState('');

    useEffect(() => {
        api.get('/categories')
            .then((res) => res.data)
            .then((data) => setCategorias(data));
    }, []);
    
    return (
        <>
            <NavDropdown
                id="nav-dropdown-dark-example"
                title={`Categoria ${categoiriaSelected !== '' ? ('- ' + categoiriaSelected) : ''}`}
            >
                <NavDropdown.Item onClick={() => {filtroCategoriaProdutos(0); setCategoiriaSelected('') }}>Todas</NavDropdown.Item>
                {categorias.map((categoria) => (
                    <NavDropdown.Item onClick={() => {filtroCategoriaProdutos(categoria.id); setCategoiriaSelected(categoria.name)}} key={categoria.id}>{categoria.name}</NavDropdown.Item>
                ))}
            </NavDropdown>
        </>
    )
}