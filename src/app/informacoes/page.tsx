'use client';
import Navbar from "@/(components)/navbar";
import { Container, ContainerBody, ContainerMain, Main } from "../styled";
import Title from "@/(components)/title";
import Forms from "@/(components)/forms";
import Movimentacoes from "@/(components)/movimentacoes";

export default function Informacoes() {
    return (
        <Container>
            <Navbar />
            <Main>
                <ContainerMain>
                    <Title title="Informações do Produto" />
                    <ContainerBody>
                        <div className="col">
                            <Forms />
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