'use client';
import { Container, ContainerBody, ContainerMain, Main } from "../../styled";
import Title from "@/(components)/title";
import Movimentacoes from "@/(components)/movimentacoes";
import api from "@/service/api";
import { use, useEffect, useState } from "react";
import { PropProdutos } from "@/interfaces";
import Navbar from "@/(components)/navbar";
import FormsEditarProduto from "@/(components)/formularios/formEditarProduto";

type Params = Promise<{ id: string }>;

export default function Informacoes(props : {params: Params}) {
    const urlParams = use(props.params);
    const [produto, setProduto] = useState<PropProdutos>({} as PropProdutos);
    
    console.log(urlParams?.id);

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
                            
                            <Movimentacoes id={Number(urlParams?.id)} />
                        </div>
                    </ContainerBody>
                </ContainerMain>
            </Main>
        </Container>
    );
}