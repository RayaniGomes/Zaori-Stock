import { PropsMoviementacoes } from "@/interfaces";
import { ContainerMovimentacoes, Tabela } from "./styled";
import { useEffect, useState } from "react";
import api from "@/service/api";
import { fomatarData } from "../tabelas/movimentacoes";

interface PropsInfoMov {
    id: number
}

export default function Movimentacoes({ id }: PropsInfoMov) {
    const [movimentacoes, setMovimentecoes] = useState<PropsMoviementacoes[]>([]);

    const getTnfoMovimentacoes = () => {
        api.get(`/movements/`, {
            params: {
                product: id
            }
        })
            .then((res) => {
                setMovimentecoes(res.data);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getTnfoMovimentacoes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ContainerMovimentacoes>
            <h3>Movimentação do produto</h3>
            <Tabela>
                <tbody>
                    {movimentacoes.map((mov) => (
                        <tr className="d-flex justify-content-between" key={mov.id}>
                            <div className="d-flex gap-4">
                                <td>
                                    {mov.movement_type !== "IN" ? <i className="bi bi-arrow-down" /> : <i className="bi bi-arrow-up" />}
                                </td>
                                <td>{fomatarData(mov.created_at)}</td>
                                <td>{mov.reason}</td>
                            </div>
                            <td>{mov.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </Tabela>
        </ContainerMovimentacoes>
    );
}