import { PropsMoviementacoes, PropUseMovimentacao } from "@/interfaces";
import api from "@/service/api";
import { create } from "zustand";

export const useMovimentacao = create<PropUseMovimentacao>((set) => ({
    movimentacoes: [],
    copyMovimentacoes: [],

    getMovimentacoes: async () => {
        await api.get('/movements/')
            .then((res) => {
                set({
                    movimentacoes: res.data,
                    copyMovimentacoes: res.data
                })
            })
    },

    getIdProdtoMovimentacao: async (id: number) => {
        await api.get(`/movements/`, {
            params: {
                product: id
            }
        })
            .then((res) => {
                set({
                    movimentacoes: res.data,
                })
            })
    },

    filtroMovimentacoes: async (tipoMovimentacao: string) => {
        if (tipoMovimentacao === 'Todas') {
            useMovimentacao.getState().getMovimentacoes();
            return;
        }

        await api.get(`/movements/?movement_type=${tipoMovimentacao}`)
            .then((res) => {
                set({
                    movimentacoes: res.data,
                    copyMovimentacoes: res.data
                })
            })
    },

    filtroNomeMovimentacao: async (nameMovimentacao: string) => {
        set({ movimentacoes: useMovimentacao.getState().copyMovimentacoes.filter((movimentacao: PropsMoviementacoes) => movimentacao.product.name.toLowerCase().includes(nameMovimentacao.toLowerCase())) })
    }
}));