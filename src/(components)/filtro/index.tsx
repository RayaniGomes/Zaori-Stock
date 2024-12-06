import { useEffect, useState } from "react";
import CategoriaDropdown from "./categoriasDropdown";
import MovimentacaoDropdown from "./movimentacaoDropdown";
import { ContainerFiltro, Left, Pesquisar } from "./styled";
import { useProdutos } from "@/store/storeProdutos";
import { useMovimentacao } from "@/store/storeMovimentacao";

export default function Filtro() {
    const { filterName } = useProdutos();
    const { filtroNomeMovimentacao } = useMovimentacao();
    const [isPageProdutos, setIsPageProdutos] = useState(false);


    useEffect(() => {
        if (window.location.pathname === '/produtos') {
            setIsPageProdutos(true);
        } else {
            setIsPageProdutos(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.location.pathname]);

    return (
        <>
            <ContainerFiltro>
                <Left>
                    <Pesquisar>
                        
                        <input
                            type="search"
                            placeholder="Pesquisar.."
                            onChange={(e) => {isPageProdutos ? useProdutos.getState().filterName(e.target.value) : fil(e.target.value)}
                        />
                        <button
                            className="bi bi-search"
                        />
                    </Pesquisar>

                    {isPageProdutos ? <CategoriaDropdown /> : <MovimentacaoDropdown />}
                </Left>
                <a href="/cadastrar" className="bntPrincipal">
                    Novo produto
                </a>
            </ContainerFiltro>
        </>
    );
}