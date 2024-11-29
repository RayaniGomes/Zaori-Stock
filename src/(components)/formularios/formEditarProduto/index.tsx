import { useCallback, useEffect, useState } from "react";
import { CampoButtons, CampoTexto, CampoTextoDuplo, ContainerForms, Quantidade } from "../styled";
import { CategoriaProps, PropProdutos } from "@/interfaces";
import api from "@/service/api";

interface PropsDataProduto {
    produto?: PropProdutos;
}

export default function FormsEditarProduto({ produto = {} as PropProdutos }: PropsDataProduto) {
    const [nomeProduto, setNomeProduto] = useState('');
    const [precoProduto, setPrecoProduto] = useState('');
    const [descricaoProduto, setDescricaoProduto] = useState('');
    const [quantidade, setQuantidade] = useState<number>(1);
    const [InfoCategoria, setInfoCategoria] = useState<CategoriaProps[]>([]);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>('');

    const getCategoria = () => {
        api.get('/categories/')
            .then((res) => {
                setInfoCategoria(res.data)

            })
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

    const editarProduto = useCallback((e: React.FormEvent) => {
        e.preventDefault();

        const novoProduto = {
            name: nomeProduto,
            description: descricaoProduto,
            price: precoProduto,
            stock_quantity: quantidade,
            category: categoriaSelecionada
        }

        api.patch('/products/', novoProduto)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    }, [nomeProduto, descricaoProduto, precoProduto, quantidade, categoriaSelecionada]);

    return (
        <ContainerForms onSubmit={(e) => editarProduto(e)}>
            <CampoTexto>
                <label>Nome*</label>
                <input
                    type="text"
                    placeholder="Nome do produto"
                    defaultValue={produto.name}
                    onChange={(e) => setNomeProduto(e.target.value)}
                />
            </CampoTexto>
            <CampoTextoDuplo>
                <CampoTexto>
                    <label>Categoria*</label>
                    <select
                        value={categoriaSelecionada}
                        onChange={(e) => setCategoriaSelecionada(e.target.value)}
                    >
                        <option value={produto?.category?.id} disabled>{produto?.category?.name}</option>
                        {InfoCategoria.map((categoria) => (
                            <option key={categoria.id} value={categoria.id}>
                                {categoria.name}
                            </option>
                        ))}
                    </select>
                </CampoTexto>
            </CampoTextoDuplo>
            <CampoTextoDuplo>
                <CampoTexto>
                    <label htmlFor="">Preço*</label>
                    <input
                        type="number"
                        placeholder="0.00"
                        defaultValue={produto.price}
                        onChange={(e) => setPrecoProduto(e.target.value)}
                    />
                </CampoTexto>
                <CampoTexto>
                    <label htmlFor="">Quantidade</label>
                    <Quantidade>
                        <button type="button" className="bi bi-dash" onClick={diminuirQuantidade} aria-label="Diminuir quantidade" />
                        <input
                            type="text"
                            defaultValue={produto.stock_quantity}
                            min="1"
                            placeholder="1"
                            onChange={(e) => setQuantidade(Number(e.target.value))}
                        />
                        <button type="button" className="bi bi-plus" onClick={aumentarQuantidade} aria-label="Aumentar quantidade" />
                    </Quantidade>
                </CampoTexto>
            </CampoTextoDuplo>
            <CampoTexto>
                <label htmlFor="">Descrição</label>
                <textarea
                    placeholder="Descrição do produto"
                    defaultValue={produto.description}
                    onChange={(e) => setDescricaoProduto(e.target.value)}
                />
            </CampoTexto>
            <CampoButtons>
                <button className="bntPrincipal">Cadastrar</button>
                <button className="bntSecondario">Cancelar</button>
            </CampoButtons>
        </ContainerForms >
    )
}