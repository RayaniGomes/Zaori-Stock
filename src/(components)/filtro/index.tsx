import CategoriaDropdown from "./categoriasDropdown";
import MovimentacaoDropdown from "./movimentacaoDropdown";
import { ContainerFiltro, Left, Pesquisar } from "./styled";


export default function Filtro() {
    return (
        <ContainerFiltro>
            <Left>
                <Pesquisar>
                    <input type="search" placeholder="Pesquisar.." />
                    <i className="bi bi-search" />
                </Pesquisar>
                <CategoriaDropdown />
                <MovimentacaoDropdown />
            </Left>
            <button className="bntPrincipal">
                Novo produto
            </button>
        </ContainerFiltro>
    );
}