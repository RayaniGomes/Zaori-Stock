import { Table } from "react-bootstrap";
import { SectionTabela } from "./styled";

export default function Tabela() {
    return (
        <SectionTabela>
            <Table responsive>
                <thead>
                    <tr>
                        <th className="status"></th>
                        <th>Data</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>
                            Preço
                            <button className="bi bi-arrow-down-up" />
                        </th>
                        <th>Categoria</th>
                        <th>
                            Quantidade
                            <button className="bi bi-arrow-down-up" />
                        </th>
                        <th className="status"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="status">
                            <i className="bi bi-arrow-down" />
                        </td>
                        <td >20/20/2020</td>
                        <td >Lorem ipsum</td>
                        <td >Lorem ipsum dolor sit amet consectetur.</td>
                        <td >R$ 1062,00</td>
                        <td >Lorem ipsum</td>
                        <td >100</td>
                        <td className="status">
                            <a href="">
                                <i className="bi bi-pencil-square" />
                            </a>
                            <button>
                                <i className="bi bi-trash" />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="status">
                            <i className="bi bi-arrow-down" />
                        </td>
                        <td >20/20/2020</td>
                        <td >Lorem ipsum</td>
                        <td >Lorem ipsum dolor sit amet consectetur.</td>
                        <td >R$ 1062,00</td>
                        <td >Lorem ipsum</td>
                        <td >100</td>
                        <td className="status">
                            <a href="">
                                <i className="bi bi-pencil-square" />
                            </a>
                            <button>
                                <i className="bi bi-trash" />
                            </button>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            <button className="bi bi-chevron-double-left" />
                            Página 1 de 145
                            <button className="bi bi-chevron-double-right" />
                        </td>
                    </tr>
                </tfoot>
            </Table>
        </SectionTabela>
    )
}