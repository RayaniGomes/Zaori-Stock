import { ContadorContainer } from "./styled";

interface ContadorProps {
    title: string;
    cont: number;
}
export default function Contador({title, cont}: ContadorProps) {
    return (
        <ContadorContainer>
            <h5>{title}</h5>
            <h2>{cont}</h2>
        </ContadorContainer>
    );
}