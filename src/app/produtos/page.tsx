'use client';
import Navbar from "@/(components)/navbar";
import Title from "@/(components)/title";
import Filtro from "@/(components)/filtro";
import Tabela from "@/(components)/tabelas/produtos";
import { Container, ContainerMain, Main } from "../styled";

export default function Produtos() {
    return (
        <Container>
            <Navbar />
            <Main>
                <ContainerMain>
                    <Title title="Produtos" />
                    <Filtro />
                    <div className="mt-5">
                        <Tabela />
                    </div>
                </ContainerMain>
            </Main>
        </Container>
    );
}