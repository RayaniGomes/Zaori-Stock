import { useState } from "react";
import { CampoButtons, CampoTexto, CampoTextoDuplo, ContainerForms, Quantidade } from "./styled";

export default function Forms() {
    const [quantidade, setQuantidade] = useState(1);

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
                <input type="text" placeholder="Nome do produto" />
            </CampoTexto>
            <CampoTextoDuplo>
                <CampoTexto>
                    <label>Data:</label>
                    <input type="date" />
                </CampoTexto>
                <CampoTexto>
                    <label>Categoria:</label>
                    <select name="" id="">
                        <option>Selecionar</option>
                        <option>Selecionar</option>
                    </select>
                </CampoTexto>
            </CampoTextoDuplo>
            <CampoTextoDuplo>
                <CampoTexto>
                    <label htmlFor="">Preço:</label>
                    <input type="text" />
                </CampoTexto>
                <CampoTexto>
                    <label htmlFor="">Quantidade:</label>
                    <Quantidade>
                        <button type="button" className="bi bi-dash" onClick={diminuirQuantidade} aria-label="Diminuir quantidade" />
                        <input
                            type="text"
                            value={quantidade}
                            readOnly
                            min="1"
                        />
                        <button type="button" className="bi bi-plus" onClick={aumentarQuantidade} aria-label="Aumentar quantidade" />
                    </Quantidade>
                </CampoTexto>
            </CampoTextoDuplo>
            <CampoTexto>
                <label htmlFor="">Descrição:</label>
                <textarea name="" id="" ></textarea>
            </CampoTexto>
            <CampoButtons>
                <button className="bntPrincipal">Cadastrar</button>
                <button className="bntSecondario">Cancelar</button>
            </CampoButtons>
        </ContainerForms >
    )
}