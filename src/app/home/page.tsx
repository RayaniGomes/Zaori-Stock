'use client';
import Navbar from "@/(components)/navbar";
import { Container, ContainerHome, SectionContador, SessaoMain } from "./styled";
import Contador from "@/(components)/contador";
import Filtro from "@/(components)/filtro";
import Tabela from "@/(components)/tabela";

export default function Home() {
  return (
    <ContainerHome>
      <Navbar />
      <SessaoMain>
        <Container>
          <SectionContador>
            <Contador title="Produtos no estoque" cont={1000} />
            <Contador title="Produtos no estoque" cont={1000} />
            <Contador title="Produtos no estoque" cont={1000} />
          </SectionContador>
          <Filtro />
          <h3>Últimas movimentações</h3>
          <Tabela />
        </Container>
      </SessaoMain>
    </ContainerHome>
  );
}
