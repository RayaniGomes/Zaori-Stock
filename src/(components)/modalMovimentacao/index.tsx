import { PropsMoviementacoes } from '@/interfaces';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CampoTextoDuplo } from '../formularios/styled';

interface ModalProps {
    produto: PropsMoviementacoes;
}

export default function ModalMovimentacao({ produto }: ModalProps) {
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Movimenrtações</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <CampoTextoDuplo>
                        <label htmlFor="">Produto</label>
                        <input type="text" value={produto?.product.name} readOnly />
                    </CampoTextoDuplo>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}
