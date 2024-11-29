'use client';
import { Container, ContainerBody, ContainerMain, Main } from "../../styled";
import Title from "@/(components)/title";
import Movimentacoes from "@/(components)/movimentacoes";
import api from "@/service/api";
import { useEffect, useState } from "react";
import { PropProdutos } from "@/interfaces";
import Navbar from "@/(components)/navbar";
import FormsEditarProduto from "@/(components)/formularios/formEditarProduto";

export default function Informacoes({ params }: { params: { id: number } }) {
    const [produto, setProduto] = useState<PropProdutos>({} as PropProdutos);
    const getInformacoes = () => {
        api.get(`/products/${params.id}/`)
            .then((res) => {
                setProduto(res.data);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getInformacoes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                            <Movimentacoes id={params.id} />
                        </div>
                    </ContainerBody>
                </ContainerMain>
            </Main>
        </Container>
    );
}