export interface PropProdutos{
    id: number;
    name: string;
    description: string;
    price: number;
    stock_quantity: number;
    category: {
        id: number,
        name: string;
    };
}

export interface PropsMoviemntacoes {
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