'use client';
import { Container, ContainerBody, ContainerMain, ContainerMovimentacoes, Main } from "../../styled";
import Title from "@/(components)/title";
import Movimentacoes from "@/(components)/movimentacoes";
import api from "@/service/api";
import { use, useEffect, useState } from "react";
import { PropProdutos } from "@/interfaces";
import Navbar from "@/(components)/navbar";
import FormsEditarProduto from "@/(components)/formularios/formEditarProduto";
import ModalMovimentacao from "@/(components)/modalMovimentacao";

type Params = Promise<{ id: string }>;

export default function Informacoes(props: { params: Params }) {
    const urlParams = use(props.params);
    const [produto, setProduto] = useState<PropProdutos>({} as PropProdutos);
    const [showModal, setShowModal] = useState(false);

    const getInformacoes = () => {
        api.get(`/products/${urlParams?.id}/`)
            .then((res) => {
                console.log(res.data);
                setProduto(res.data);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getInformacoes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleShow = () => {
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);

    return (
        <Container>
            <Navbar />
            <Main>
                <ContainerMain>
                    <Title title="Informações do Produto" />
                    <ContainerBody>
                        <div className="col">
                            <FormsEditarProduto produto={produto} />
                        </div>
                        <div className="col">
                            <ContainerMovimentacoes >
                                <div className="d-flex align-items-center gap-3 mb-4">
                                    <h3>Movimentação do produto</h3>
                                    <button className="btnMov" onClick={() => handleShow()}>
                                        <i className="bi bi-box-arrow-right" />
                                    </button>
                                </div>
                                <Movimentacoes id={Number(urlParams?.id)} />
                            </ContainerMovimentacoes>
                        </div>
                    </ContainerBody>
                </ContainerMain>
            </Main>

            <ModalMovimentacao
                produto={produto}
                handleClose={handleClose}
                show={showModal}
                getProdutos={getInformacoes}
            />
        </Container >
    );
}