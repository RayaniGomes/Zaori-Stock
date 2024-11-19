import { ContainerMovimentacoes, Tabela } from "./styled";

export default function Movimentacoes() {
    return (
        <ContainerMovimentacoes>
            <h3>Movimentação do produto</h3>
            <Tabela>
                <tbody>
                    <tr>
                        <td>
                            <i className="bi bi-arrow-down" />
                        </td>
                        <td>20/20/2020</td>
                        <td>Saida</td>
                    </tr>
                </tbody>
            </Tabela>
        </ContainerMovimentacoes>
    );
}