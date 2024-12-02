import { Table } from "react-bootstrap";
import { SectionTabela } from "../styled";
import { useEffect, useState } from "react";
import api from "@/service/api";
import { PropsMoviementacoes } from "@/interfaces";
import { toast } from "react-toastify";
import Link from "next/link";

export const fomatarData = (date: string) => {
    const data = new Date(date);
    const dia = data.getDate().toString();
    const diaF = (dia.length == 1) ? '0' + dia : dia;
    const mes = (data.getMonth() + 1).toString();
    const mesF = (mes.length == 1) ? '0' + mes : mes;
    const anoF = data.getFullYear();

    return diaF + "/" + mesF + "/" + anoF;
};

export const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
});

export default function Tabela() {
    const [movimentacoes, setMovimentecoes] = useState<PropsMoviementacoes[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const totalPages = Math.ceil(movimentacoes.length / itemsPerPage);

    useEffect(() => {
        api.get('/movements/')
            .then((res) => {
                console.log(res.data);
                setMovimentecoes(res.data);
            })
    }, []);

    const deleteItem = (id: number) => {
        api.delete(`/movements/${id}/`)
            .then((res) => {
                if (res.status === 204) {
                    setMovimentecoes(movimentacoes.filter((movimentacao) => movimentacao.id !== id));
                    toast.success("Excluido com sucesso!")
                }
            })
            .catch((err) => console.log(err));
    };

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
                        {movimentacoes.sort((a, b) => b.id - a.id).slice(indexOfFirstItem, indexOfLastItem).map((movimentacao) => (
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
                        ))}
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