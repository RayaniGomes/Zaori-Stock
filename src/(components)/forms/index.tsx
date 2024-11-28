import { useEffect, useState } from "react";
import { CampoButtons, CampoTexto, CampoTextoDuplo, ContainerForms, Quantidade } from "./styled";
import { CategoriaProps, PropProdutos } from "@/interfaces";
import api from "@/service/api";

interface PropsDataProduto {
    produto?: PropProdutos
}

export default function Forms({ produto = {} as PropProdutos }: PropsDataProduto) {
    const [nomeProduto, setNomeProduto] = useState<PropProdutos>({} as PropProdutos);
    const [precoProduto, setPrecoProduto] = useState<PropProdutos>({} as PropProdutos);
    const [descricaoProduto, setDescricaoProduto] = useState<PropProdutos>({} as PropProdutos);

    const [quantidade, setQuantidade] = useState(1);
    const [InfoCategoria, setInfoCategoria] = useState<CategoriaProps[]>([]);

    const getCategoria = () => {
        api.get('/categories/')
            .then((res) => setInfoCategoria(res.data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getCategoria();
    }, []);

    const aumentarQuantidade = () => {
        setQuantidade(prevQuantidade => prevQuantidade + 1);
    };

    const diminuirQuantidade = () => {
        if (quantidade > 1) {
            setQuantidade(prevQuantidade => prevQuantidade - 1);
        }
    };

    const criarProduto = (e: React.FormEvent) => {
        e.preventDefault();

        console.log(nomeProduto, precoProduto, quantidade, descricaoProduto);

        const novoProduto = {
            name: nomeProduto.name,
            description: descricaoProduto.description,
            price: precoProduto.price,
            stock_quantity: quantidade,
            category: produto.category
        }
        api.post('/products/', novoProduto)
        .then((res) => {
            console.log(res.data);
        })
            .catch((err) => console.log(err));
    }

    return (
        <ContainerForms onSubmit={(e) => criarProduto(e)}>
            <CampoTexto>
                <label>Nome:</label>
                <input
                    type="text"
                    placeholder="Nome do produto"
                    defaultValue={produto.name}
                    onChange={(e) => setNomeProduto({ ...nomeProduto, name: e.target.value })}
                />
            </CampoTexto>
            <CampoTextoDuplo>
                <CampoTexto>
                    <label>Categoria:</label>
                    <select
                        defaultValue={produto?.category?.id}                                                         
                    >
                        <option defaultValue={produto?.category?.id}>{produto?.category?.name}</option>
                        {InfoCategoria.map((categoria) => (
                            <option key={categoria.id} defaultValue={categoria.id}>
                                {categoria.name}
                            </option>
                        ))}
                    </select>
                </CampoTexto>
            </CampoTextoDuplo>
            <CampoTextoDuplo>
                <CampoTexto>
                    <label htmlFor="">Preço:</label>
                    <input
                        type="number"
                        defaultValue={produto.price}
                        onChange={(e) => setPrecoProduto({ ...precoProduto, price: parseFloat(e.target.value) })}
                    />
                </CampoTexto>
                <CampoTexto>
                    <label htmlFor="">Quantidade:</label>
                    <Quantidade>
                        <button type="button" className="bi bi-dash" onClick={diminuirQuantidade} aria-label="Diminuir quantidade" />
                        <input
                            type="text"
                            defaultValue={produto.stock_quantity}
                            min="1"
                            placeholder="1"
                        />
                        <button type="button" className="bi bi-plus" onClick={aumentarQuantidade} aria-label="Aumentar quantidade" />
                    </Quantidade>
                </CampoTexto>
            </CampoTextoDuplo>
            <CampoTexto>
                <label htmlFor="">Descrição:</label>
                <textarea
                    defaultValue={produto.description}
                    onChange={(e) => setDescricaoProduto({ ...descricaoProduto, description: e.target.value })}
                />
            </CampoTexto>
            <CampoButtons>
                <button className="bntPrincipal">Cadastrar</button>
                <button className="bntSecondario">Cancelar</button>
            </CampoButtons>
        </ContainerForms >
    )
}