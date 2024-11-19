'use client';
import Navbar from "@/(components)/navbar";
import { Container, ContainerMain, Main } from "../styled";
import Title from "@/(components)/title";
import Forms from "@/(components)/forms";

export default function Cadastro() {
    return (
        <Container>
            <Navbar />
            <Main>
                <ContainerMain>
                    <Title title="Cadastrar Produto" />
                    <Forms />
                </ContainerMain>
            </Main>
        </Container>
    );
}