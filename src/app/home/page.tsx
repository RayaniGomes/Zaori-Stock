'use client';
import Navbar from "@/(components)/navbar";
import { SectionContador } from "./styled";
import Contador from "@/(components)/contador";
import Filtro from "@/(components)/filtro";
import Tabela from "@/(components)/tabelas/movimentacoes";
import { Container, ContainerMain, Main } from "../styled";

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Main>
        <ContainerMain>
          <SectionContador>
            <Contador title="Produtos no estoque" cont={1000} />
            <Contador title="Produtos no estoque" cont={1000} />
            <Contador title="Produtos no estoque" cont={1000} />
          </SectionContador>
          <Filtro />
          <h3>Últimas movimentações</h3>
          <Tabela />
        </ContainerMain>
      </Main>
    </Container>
  );
}
