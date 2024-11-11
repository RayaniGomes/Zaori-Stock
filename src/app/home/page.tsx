'use client';
import Navbar from "@/(components)/navbar";
import { Main, SectionContador } from "./styled";
import Contador from "@/(components)/contador";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Main>
        <SectionContador>
          <Contador title="Produtos no estoque" cont={1000} />
          <Contador title="Produtos no estoque" cont={1000} />
          <Contador title="Produtos no estoque" cont={1000} />
        </SectionContador>
      </Main>
    </main>
  );
}
