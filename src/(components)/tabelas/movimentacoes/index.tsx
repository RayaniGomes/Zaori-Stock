import { Table } from "react-bootstrap";
import { SectionTabela } from "../styled";
import { useEffect, useState } from "react";
import { PropsMoviementacoes } from "@/interfaces";
import Link from "next/link";
import { useProdutos } from "@/store/storeProdutos";
import { useMovimentacao } from "@/store/storeMovimentacao";
import { fomatarData, formatter } from "@/formatacao";

export default function Tabela() {
    const { deleteItem } = useProdutos();
    const { movimentacoes, getMovimentacoes } = useMovimentacao();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const totalPages = Math.ceil(movimentacoes.length / itemsPerPage);
    const [ordem, setOrdem] = useState(-1);
    const [ordenarColuna, setOrdenarColuna] = useState('id');

    useEffect(() => {
        getMovimentacoes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const ordenar = (fieldName: string) => {
        setOrdem(ordem === 1 ? -1 : 1);
        setOrdenarColuna(fieldName);
    }

    const comparadores = {
        price: (a: PropsMoviementacoes, b: PropsMoviementacoes) => (a.product.price - b.product.price) * ordem,
        quantity: (a: PropsMoviementacoes, b: PropsMoviementacoes) => (Number(a.quantity) - Number(b.quantity)) * ordem,
        id: (a: PropsMoviementacoes, b: PropsMoviementacoes) => (a.id - b.id) * ordem,
        name: (a: PropsMoviementacoes, b: PropsMoviementacoes) => a.product.name.localeCompare(b.product.name) * ordem,
    };

    const sortedMovimentacoes = [...movimentacoes].sort(comparadores[ordenarColuna as keyof typeof comparadores] || comparadores.id);

    const movimentacoesList = sortedMovimentacoes.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <SectionTabela>
            <div className="tabela">
                <Table >
                    <thead>
                        <tr>
                            <th className="status"></th>
                            <th>
                                Data
                                <button className="bi bi-arrow-down-up" onClick={() => { ordenar('id') }} />
                            </th>
                            <th>Nome</th>
                            <th className="descricao">Descrição</th>
                            <th>
                                Preço
                                <button className="bi bi-arrow-down-up" onClick={() => { ordenar('price') }} />
                            </th>
                            <th>Razão</th>
                            <th>Categoria</th>
                            <th>
                                Quantidade
                                <button className="bi bi-arrow-down-up" onClick={() => { ordenar('quantity') }} />
                            </th>
                            <th className="botoes"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {movimentacoesList.length === 0
                            ? <tr className="feedbackTable">
                                <td className="text-center w-100" colSpan={8}>Nenhuma movimentação cadastrada ou encontrado com esse filtro</td>
                            </tr>
                            : movimentacoesList.map((movimentacao) => (
                                <tr key={movimentacao.id}>
                                    <td className="status">
                                        {movimentacao.movement_type !== "IN" ? <i className="bi bi-arrow-down" /> : <i className="bi bi-arrow-up" />}
                                    </td>
                                    <td>{fomatarData(movimentacao.created_at)}</td>
                                    <td>
                                        {movimentacao.product.name}
                                    </td>
                                    <td className="descricao">{movimentacao.product.description}</td>
                                    <td>{formatter.format(movimentacao.product.price)}</td>
                                    <td>{movimentacao.reason}</td>
                                    <td>{movimentacao.product?.category?.name}</td>
                                    <td>{movimentacao.quantity}</td>
                                    <td className="botoes">
                                        <Link href={`/informacoes/${movimentacao.product.id}`}>
                                            <i className="bi bi-pencil-square" />
                                        </Link>
                                        <button onClick={() => { deleteItem(movimentacao.id); }}>
                                            <i className="bi bi-trash" />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                        <tr className="footerTable">
                            <td colSpan={8}>
                                <button className="bi bi-chevron-double-left" onClick={handlePreviousPage} />
                                Página {currentPage} de {totalPages}
                                <button className="bi bi-chevron-double-right" onClick={handleNextPage} />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </SectionTabela>
    )
}