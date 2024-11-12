import { Table } from "react-bootstrap";
import { Categoria, Data, Descricao, Nome, Preco, Quantidade, SectionTabela, Status, Titulo } from "./styled";

export default function Tabela() {
    return (
        <SectionTabela>
            <Titulo>Últimas movimentações</Titulo>
            <Table>
                <thead>
                    <Status></Status>
                    <Data>Data</Data>
                    <Nome>Nome</Nome>
                    <Descricao>Descrição</Descricao>
                    <Preco>
                        Preço
                        <button className="bi bi-arrow-down-up" />
                    </Preco>
                    <Categoria>Categoria</Categoria>
                    <Quantidade>
                        Quantidade
                        <button className="bi bi-arrow-down-up" />
                    </Quantidade>
                    <Status></Status>
                    <Status></Status>
                </thead>
                <tbody>
                    <tr>
                        <Status>
                            <i className="bi bi-arrow-down" />
                        </Status>
                        <Data>20/20/2020</Data>
                        <Nome>Lorem ipsum</Nome>
                        <Descricao>Lorem ipsum dolor sit amet consectetur.</Descricao>
                        <Preco>R$ 1062,00</Preco>
                        <Categoria>Lorem ipsum</Categoria>
                        <Quantidade>100</Quantidade>
                        <Status>
                            <a href="">
                                <i className="bi bi-pencil-square" />
                            </a>
                        </Status>
                        <Status>
                            <button>
                                <i className="bi bi-trash"/>
                            </button>
                        </Status>
                    </tr>
                </tbody>
                <tfoot>
                    <button className="bi bi-chevron-double-left" />
                    <h5>Página 1 de 145</h5>
                    <button className="bi bi-chevron-double-right" />
                </tfoot>
            </Table>
        </SectionTabela>
    )
}