import { CampoTexto, CampoTextoDuplo, ContainerForms } from "./styled";

export default function Forms() {
    return (
        <ContainerForms>
            <CampoTexto>
                <label>Nome:</label>
                <input type="text" placeholder="Nome do produto"/>
            </CampoTexto>
            <CampoTextoDuplo>
                <CampoTexto>
                    <label>Data:</label>
                    <input type="date"/>
                </CampoTexto>
                <CampoTexto>
                    <label>Categoria:</label>
                    <select name="" id="">
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
                    <input type="text" />
                </CampoTexto>
            </CampoTextoDuplo>
            <CampoTexto>
                <label htmlFor="">Descrição:</label>
                <textarea name="" id="" ></textarea>
            </CampoTexto>
            <button className="bntPrincipal">Cadastrar</button>
        </ContainerForms>
    )
}