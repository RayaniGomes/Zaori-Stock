import { Table } from "react-bootstrap";
import { SectionTabela } from "../styled";
import { useEffect, useState } from "react";
import api from "@/service/api";
import { PropsMoviemntacoes } from "@/interfaces";

export default function Tabela() {
    const [movimentacoes, setMovimentecoes] = useState<PropsMoviemntacoes[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    
    useEffect(() => {
        api.get('/movements')
            .then((res) => res.data)
            .then((data) => setMovimentecoes(data));
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const totalPages = Math.ceil(movimentacoes.length / itemsPerPage);

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

    return (
        <SectionTabela>
            <div className="tabela">
                <Table >
                    <thead>
                        <tr>
                            <th className="status"></th>
                            <th>Data</th>
                            <th>Nome</th>
                            <th className="descricao">Descrição</th>
                            <th>
                                Preço
                                <button className="bi bi-arrow-down-up" />
                            </th>
                            <th>Categoria</th>
                            <th>
                                Quantidade
                                <button className="bi bi-arrow-down-up" />
                            </th>
                            <th className="botoes"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {movimentacoes.slice(indexOfFirstItem, indexOfLastItem).map((movimentacao) => (
                            <tr key={movimentacao.id}>
                                <td className="status">
                                    {movimentacao.reason === "IN" ? <i className="bi bi-arrow-down" /> : <i className="bi bi-arrow-up" />}
                                </td>
                                <td>{movimentacao.created_at}</td>
                                <td>
                                    {movimentacao.product.name}
                                </td>
                                <td className="descricao">{movimentacao.product.description}</td>
                                <td>R$ {movimentacao.product.price}</td>
                                <td>{movimentacao.product.category.name}</td>
                                <td>{movimentacao.quantity}</td>
                                <td className="botoes">
                                    <a href="/informacoes">
                                        <i className="bi bi-pencil-square" />
                                    </a>
                                    <button>
                                        <i className="bi bi-trash" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        <tr className="footerTable">
                            <td colSpan={8}>
                                <button className="bi bi-chevron-double-left" onClick={handlePreviousPage}/>
                                Página {currentPage} de {totalPages}
                                <button className="bi bi-chevron-double-right" onClick={handleNextPage}/>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </SectionTabela>
    )
}