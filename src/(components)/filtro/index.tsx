import CategoriaDropdown from "./categoriasDropdown";
import MovimentacaoDropdown from "./movimentacaoDropdown";
import { ContainerFiltro, Left, Pesquisar } from "./styled";


export default function Filtro() {
    return (
        <ContainerFiltro>
            <Left>
                <Pesquisar>
                    <input type="search" placeholder="Pesquisar.." />
                    <button className="bi bi-search" />
                </Pesquisar>
                <CategoriaDropdown />
                <MovimentacaoDropdown />
            </Left>
            <a href="/cadastrar" className="bntPrincipal">
                Novo produto
            </a>
        </ContainerFiltro>
    );
}