import { useMovimentacao } from '@/store/storeMovimentacao';
import { useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function MovimentacaoDropdown() {
    const { filtroMovimentacoes } = useMovimentacao();
    const [movimentacaoSelected, setMovimentacaoSelected] = useState('');

    return (
        <>
            <NavDropdown
                id="nav-dropdown-dark-example"
                title={`Movimentação ${movimentacaoSelected !== '' ? ('- ' + movimentacaoSelected) : ''}`}
            >
                <NavDropdown.Item onClick={() => { filtroMovimentacoes('Todas'); setMovimentacaoSelected('') }}>Todos</NavDropdown.Item>
                <NavDropdown.Item onClick={() => { filtroMovimentacoes('IN'); setMovimentacaoSelected('Entradas') }}>Entradas</NavDropdown.Item>
                <NavDropdown.Item onClick={() => { filtroMovimentacoes('OUT'); setMovimentacaoSelected('Saidas') }}>Saidas</NavDropdown.Item>
            </NavDropdown>
        </>
    )
}