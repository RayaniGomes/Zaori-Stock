'use client';
import Navbar from "@/(components)/navbar";
import { SectionContador } from "./styled";
import Contador from "@/(components)/contador";
import Filtro from "@/(components)/filtro";
import Tabela from "@/(components)/tabelas/movimentacoes";
import { Container, ContainerMain, Main } from "../styled";
import api from "@/service/api";
import { useState, useEffect } from 'react';

export default function Home() {
  const [contProdutos, setContProdutos] = useState(0);
  const [contEntradas, setContEntradas] = useState(0);
  const [contSaidas, setContSaidas] = useState(0);

  useEffect(() => {
    api.get("/products/")
      .then(response => {
        setContProdutos(response.data.length);
      })
      .catch(error => {
        console.error(error);
      });

      api.get("movements/?movement_type=IN")
      .then(response => {
        setContEntradas(response.data.length);
      })
      .catch(error => {
        console.error(error);
      });

      api.get("movements/?movement_type=OUT")
      .then(response => {
        setContSaidas(response.data.length);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Container>
      <Navbar />
      <Main>
        <ContainerMain>
          <SectionContador>
            <Contador title="Produtos no estoque" cont={contProdutos} />
            <Contador title="Entradas de produtos" cont={contEntradas} />
            <Contador title="Saidas de produtos" cont={contSaidas} />
          </SectionContador>
          <Filtro />
          <h3>Últimas movimentações</h3>
          <Tabela />
        </ContainerMain>
      </Main>
    </Container>
  );
}
