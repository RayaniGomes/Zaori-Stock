import { PropProdutos, PropsMoviementacoes } from "@/interfaces";
import { Tabela } from "./styled";
import { useEffect, useState } from "react";
import api from "@/service/api";
import { fomatarData } from "../tabelas/movimentacoes";
import { ContainerMovimentacoes } from "@/app/styled";
import ModalMovimentacao from "../modalMovimentacao";

interface PropsInfoMov {
    id: number;
    produto: PropProdutos;
}

export default function Movimentacoes({ id, produto }: PropsInfoMov) {
    const [movimentacoes, setMovimentecoes] = useState<PropsMoviementacoes[]>([]);
    const [showModal, setShowModal] = useState(false);

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

    const handleShow = () => {
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);

    return (

        <ContainerMovimentacoes >
            <div className="d-flex align-items-center gap-3 mb-4">
                <h3>Movimentação do produto</h3>
                <button className="btnMov" onClick={() => handleShow()}>
                    <i className="bi bi-box-arrow-right" />
                </button>
            </div>

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
            <ModalMovimentacao
                produto={produto}
                handleClose={handleClose}
                show={showModal}
                getProdutos={getTnfoMovimentacoes}
            />
        </ContainerMovimentacoes>
    );
}