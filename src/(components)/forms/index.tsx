import { useEffect, useState } from "react";
import { CampoButtons, CampoTexto, CampoTextoDuplo, ContainerForms, Quantidade } from "./styled";
import { CategoriaProps, PropProdutos } from "@/interfaces";
import api from "@/service/api";

interface PropsDataProduto {
    produto: PropProdutos
}

export default function Forms({produto}: PropsDataProduto) {
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


    return (
        <ContainerForms>
            <CampoTexto>
                <label>Nome:</label>
                <input type="text" placeholder="Nome do produto" value={produto.name} />
            </CampoTexto>
            <CampoTextoDuplo>
                {/* <CampoTexto>
                    <label>Data:</label>
                    <input type="date" value={} />
                </CampoTexto> */}
                <CampoTexto>
                    <label>Categoria:</label>
                    <select name="" id="">
                        <option value={produto?.category?.id}>{produto?.category?.name}</option>
                        {InfoCategoria.map((categoria) => (
                            <option key={categoria.id}>{categoria.name}</option>
                        ))}
                    </select>
                </CampoTexto>
            </CampoTextoDuplo>
            <CampoTextoDuplo>
                <CampoTexto>
                    <label htmlFor="">Preço:</label>
                    <input type="text" value={produto.price} />
                </CampoTexto>
                <CampoTexto>
                    <label htmlFor="">Quantidade:</label>
                    <Quantidade>
                        <button type="button" className="bi bi-dash" onClick={diminuirQuantidade} aria-label="Diminuir quantidade" />
                        <input
                            type="text"
                            value={produto.stock_quantity}
                            readOnly
                            min="1"
                        />
                        <button type="button" className="bi bi-plus" onClick={aumentarQuantidade} aria-label="Aumentar quantidade" />
                    </Quantidade>
                </CampoTexto>
            </CampoTextoDuplo>
            <CampoTexto>
                <label htmlFor="">Descrição:</label>
                <textarea name="" id="" value={produto.description} />
            </CampoTexto>
            <CampoButtons>
                <button className="bntPrincipal">Cadastrar</button>
                <button className="bntSecondario">Cancelar</button>
            </CampoButtons>
        </ContainerForms >
    )
}