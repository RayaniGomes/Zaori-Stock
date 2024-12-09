export interface PropProdutos {
    id: number;
    name: string;
    description: string;
    price: number;
    stock_quantity: number;
    category: CategoriaProps;
}

export interface PropsMoviementacoes {
    id: number;
    product: PropProdutos;
    movement_type: string;
    quantity: string;
    reason: string;
    created_at: string;
}

export interface CategoriaProps {
    id: number;
    name: string;
}

export interface ModalProps {
    handleClose: () => void;
    getProdutos?: () => void;
    show: boolean;
    produto: PropProdutos
}

export interface PropUseProdutos {
    produtos: PropProdutos[];
    copyProdutos: PropProdutos[];
    getProdutos: () => void;
    deleteItem: (id: number) => void;
    filtroCategoriaProdutos: (idCategoria: number) => void;
    filterName: (nameProduto: string) => void
    getInfoProduto: (id: number) => void
}

export interface PropUseMovimentacao {
    movimentacoes: PropsMoviementacoes[];
    copyMovimentacoes: PropsMoviementacoes[];
    getMovimentacoes: () => void;
    filtroMovimentacoes: (tipoMovimentacao: string) => void;
    filtroNomeMovimentacao: (nameMovimentacao: string) => void;
    getIdProdtoMovimentacao: (id: number) => void
}
