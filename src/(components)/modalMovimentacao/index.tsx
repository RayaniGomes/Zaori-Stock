import Modal from 'react-bootstrap/Modal';
import { CampoButtons, CampoTexto, CampoTextoDuplo, Quantidade } from '../formularios/styled';
import { useCallback, useState } from 'react';
import api from '@/service/api';
import { ModalProps } from '@/interfaces';
import { toast } from 'react-toastify';
import { Form } from 'react-bootstrap';

export default function ModalMovimentacao({ produto, handleClose, show, getProdutos = () => { } }: ModalProps) {
    const [nomeProduto, setNomeProduto] = useState('');
    const [tipoMov, setTipoMov] = useState('');
    const [quantidade, setQuantidade] = useState<number>(1);
    const [razao, setRazao] = useState('');

    const criarMovimentacao = useCallback((e: React.FormEvent) => {
        e.preventDefault();

        if (!tipoMov || !quantidade || !razao) {
            toast.error('Preencha todos os campos');
            return;
        }

        if ((tipoMov === 'IN' && razao !== 'Devolucao')) {
            toast.error(`Movimentação inválida. Para a movimentação ENTRADA a razão deve ser DEVOLUCAO`);
            return;
        }

        if ((tipoMov === 'OUT' && !['Descarte', 'Venda'].includes(razao))) {
            toast.error(`Movimentação inválida. Para a movimentação SAIDA a razão deve ser DESCARTE ou VENDA`);
            return;
        }

        const novaMov = {
            product: produto.id,
            movement_type: tipoMov,
            quantity: quantidade,
            reason: razao
        }

        api.post(`/movements/`, novaMov)
            .then((res) => {
                console.log(res.data);
                if (res.status === 201) {
                    getProdutos();
                    toast.success('Movimentação criada com sucesso!');
                    handleClose();
                }
            })
            .catch((err) => console.log(err));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nomeProduto, tipoMov, quantidade, razao]);

    const aumentarQuantidade = () => {
        setQuantidade(prevQuantidade => prevQuantidade + 1);
    };

    const diminuirQuantidade = () => {
        if (quantidade > 1) {
            setQuantidade(prevQuantidade => prevQuantidade - 1);
        }
    };

    return (
        <Modal
            show={show}
            onHide={handleClose}
        >
            <Modal.Dialog>
                <Modal.Header closeButton className='border-0'>
                    <Modal.Title>Movimentação</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => criarMovimentacao(e)}>
                        <CampoTextoDuplo className='mb-3'>
                            <CampoTexto>
                                <label htmlFor="">Produto</label>
                                <input
                                    value={produto.name} type="text"
                                    onChange={(e) => setNomeProduto(e.target.value)}
                                    readOnly
                                />
                            </CampoTexto>
                            <CampoTexto>
                                <label htmlFor="">Tipo de movimentação</label>
                                <select
                                    value={tipoMov}
                                    onChange={(e) => setTipoMov(e.target.value)}
                                >
                                    <option value="" disabled >Selecione</option>
                                    <option value="IN">Entrada</option>
                                    <option value="OUT">Saida</option>
                                </select>
                            </CampoTexto>
                        </CampoTextoDuplo>
                        <CampoTextoDuplo>
                            <CampoTexto>
                                <label htmlFor="">Quantidade</label>
                                <Quantidade>
                                    <button type="button" className="bi bi-dash" onClick={diminuirQuantidade} aria-label="Diminuir quantidade" />
                                    <input
                                        type="text"
                                        value={quantidade}
                                        min="1"
                                        placeholder="1"
                                        onChange={(e) => setQuantidade(Number(e.target.value))}
                                    />
                                    <button type="button" className="bi bi-plus" onClick={aumentarQuantidade} aria-label="Aumentar quantidade" />
                                </Quantidade>
                            </CampoTexto>
                            <CampoTexto>
                                <label htmlFor="">Razão</label>
                                <select
                                    value={razao}
                                    onChange={(e) => setRazao(e.target.value)}
                                >
                                    <option value="" disabled>Selecione</option>
                                    <option value="Devolucao">Devolução</option>
                                    <option value="Descarte">Descarte</option>
                                    <option value="Venda">Venda</option>
                                </select>
                            </CampoTexto>
                        </CampoTextoDuplo>
                        <CampoButtons>
                            <button type="submit" className="bntPrincipal">Cadastrar</button>
                        </CampoButtons>
                    </Form>
                </Modal.Body>
            </Modal.Dialog>
        </Modal>
    );
}
