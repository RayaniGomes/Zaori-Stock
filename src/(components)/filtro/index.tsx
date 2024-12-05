import { useState } from "react";
import CategoriaDropdown from "./categoriasDropdown";
import MovimentacaoDropdown from "./movimentacaoDropdown";
import { ContainerFiltro, Left, Pesquisar } from "./styled";
import { PropProdutos } from "@/interfaces";
import Tabela from "../tabelas/movimentacoes";

export default function Filtro() {
    const [pesquisar, setPesquisar] = useState('');
    const [produtos, setProdutos] = useState<PropProdutos[]>([]);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = event.target.value.toLowerCase();
        setPesquisar(searchTerm);

        const filteredProducts = produtos.filter((product) =>
            product.name.toLowerCase().includes(searchTerm)
        );
        setProdutos(filteredProducts);
    };

    return (
        <>
            <ContainerFiltro>
                <Left>
                    <Pesquisar>
                        <input
                            type="search"
                            placeholder="Pesquisar.."
                            value={pesquisar}
                            onChange={handleSearch}
                        />
                        <button className="bi bi-search" />
                    </Pesquisar>
                    <CategoriaDropdown />
                    <MovimentacaoDropdown />
                </Left>
                <a href="/cadastrar" className="bntPrincipal">
                    Novo produto
                </a>
            </ContainerFiltro>

            <Tabela produtos={produtos} />
        </>
    );
}