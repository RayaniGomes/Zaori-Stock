import { PropsMoviementacoes } from "@/interfaces";
import { Tabela } from "./styled";
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
        <Tabela>
            <tbody>
                {movimentacoes.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()).map((mov) => (
                    <tr className="d-flex justify-content-between" key={mov.id}>
                        <td className="d-flex gap-4 align-items-center p-1">
                            <div>
                                {mov.movement_type !== "IN" ? <i className="bi bi-arrow-down" /> : <i className="bi bi-arrow-up" />}
                            </div>
                            <h5>{fomatarData(mov.created_at)}</h5>
                            <h5>{mov.reason}</h5>
                        </td>
                        <td>{mov.quantity}</td>
                    </tr>
                ))}
            </tbody>
        </Tabela>
    );
}