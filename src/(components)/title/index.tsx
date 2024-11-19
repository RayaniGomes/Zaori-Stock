'use client';
import { TitleWapper } from "./styled";
import { useRouter} from "next/navigation";

interface TitleProps {
    title: string;
}

export default function Title({title}: TitleProps) {
    const router = useRouter();
    console.log(router);
    return (
        <TitleWapper>

            <button onClick = { () => router.back()} className="bi bi-chevron-left"></button>
            <h2>{title}</h2>
        </TitleWapper>
    );
}