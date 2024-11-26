'use client';
import { Table } from "react-bootstrap";
import { SectionTabela } from "../styled";
import { useEffect, useState } from "react";
import api from "@/service/api";
import { PropProdutos } from "@/interfaces";
import { toast } from "react-toastify";
import Link from "next/link";

export default function Tabela() {
    const [produtos, setProdutos] = useState<PropProdutos[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const totalPages = Math.ceil(produtos.length / itemsPerPage);

    useEffect(() => {
        api.get('/products/')
            .then((res) => {
                console.log(res.data);
                setProdutos(res.data);
            })
    }, []);

    const deleteItem = (id: number) => {
        api.delete(`/products/${id}/`)
            .then((res) => {
                if (res.status === 204) {
                    setProdutos(produtos.filter((produto) => produto.id !== id));
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
                <Table>
                    <thead>
                        <tr>
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
                        {produtos.slice(indexOfFirstItem, indexOfLastItem).map((produto) => (
                            <tr key={produto.id}>
                                <td>{produto.name}</td>
                                <td className="descricao">{produto.description}</td>
                                <td>R$ {produto.price}</td>
                                <td>{produto.category.name}</td>
                                <td>{produto.stock_quantity}</td>
                                <td className="botoes">
                                    <Link href={`/informacoes/${produto.id}`}>
                                        <i className="bi bi-pencil-square" />
                                    </Link>
                                    <button onClick={() => { deleteItem(produto.id); }}>
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