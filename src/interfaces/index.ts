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