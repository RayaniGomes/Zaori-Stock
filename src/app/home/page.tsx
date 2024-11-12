'use client';
import Navbar from "@/(components)/navbar";
import { MainContainer, SectionContador } from "./styled";
import Contador from "@/(components)/contador";
import Filtro from "@/(components)/filtro";
import Tabela from "@/(components)/tabela";

export default function Home() {
  return (
    <>
      <Navbar />
      <MainContainer>
        <SectionContador>
          <Contador title="Produtos no estoque" cont={1000} />
          <Contador title="Produtos no estoque" cont={1000} />
          <Contador title="Produtos no estoque" cont={1000} />
        </SectionContador>
        <Filtro />
        <Tabela />
      </MainContainer>
    </>
  );
}
