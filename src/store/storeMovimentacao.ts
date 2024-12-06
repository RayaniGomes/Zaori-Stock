import { PropsMoviementacoes } from "@/interfaces";
import api from "@/service/api";
import { create } from "zustand";

interface PropUseMovimentacao {
    movimentacoes: PropsMoviementacoes[];
    getMovimentacoes: () => void;
    filtroMovimentacoes: (tipoMovimentacao: string) => void;
    filtroNomeMovimentacao: (nameMovimentacao: string) => void
}

export const useMovimentacao = create<PropUseMovimentacao>((set) => ({
    movimentacoes: [],

    getMovimentacoes: async () => {
        await api.get('/movements/')
            .then((res) => {
                set({ movimentacoes: res.data })
            })
    },

    filtroMovimentacoes: async (tipoMovimentacao: string) => {
        if (tipoMovimentacao === 'Todas') {
            useMovimentacao.getState().getMovimentacoes();
            return;
        }

        await api.get(`/movements/?movement_type=${tipoMovimentacao}`)
            .then((res) => {
                set({ movimentacoes: res.data })
            })
    },

    filtroNomeMovimentacao: async (nameMovimentacao: string) => {
        if (nameMovimentacao === '') {
            useMovimentacao.getState().getMovimentacoes();
            return;
        }

        set({ movimentacoes: useMovimentacao.getState().movimentacoes.filter((movimentacao: PropsMoviementacoes) => movimentacao.product.name.toLowerCase().includes(nameMovimentacao.toLowerCase())) })
}));