import { TitleWapper } from "./styled";

interface TitleProps {
    title: string;
}

export default function Title({title}: TitleProps) {
    return (
        <TitleWapper>
            <a href="" className="bi bi-chevron-left"></a>
            <h2>{title}</h2>
        </TitleWapper>
    );
}