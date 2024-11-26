'use client';
import Navbar from "@/(components)/navbar";
import { Container, ContainerBody, ContainerMain, Main } from "../../styled";
import Title from "@/(components)/title";
import Forms from "@/(components)/forms";
import Movimentacoes from "@/(components)/movimentacoes";
import api from "@/service/api";
import { useEffect, useState } from "react";
import { PropProdutos } from "@/interfaces";

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
    }, []);

    return (
        <Container>
            <Navbar />
            <Main>
                <ContainerMain>
                    <Title title="Informações do Produto" />
                    <ContainerBody>
                        <div className="col">
                            <Forms produto={produto} />
                        </div>
                        <div className="col">
                            <Movimentacoes />
                        </div>
                    </ContainerBody>
                </ContainerMain>
            </Main>
        </Container>
    );
}