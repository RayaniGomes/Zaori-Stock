'use client';
import Navbar from "@/(components)/navbar";
import { Container, ContainerMain, Main } from "../styled";
import Title from "@/(components)/title";

export default function Cadastro() {
    return (
        <Container>
            <Navbar />
            <Main>
                <ContainerMain>
                    <Title title="Cadastrar Produto" />
                </ContainerMain>
            </Main>
        </Container>
    );
}