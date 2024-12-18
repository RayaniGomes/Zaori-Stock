import { PropProdutos, PropUseProdutos } from "@/interfaces";
import api from "@/service/api";
import { toast } from "react-toastify";
import { create } from "zustand";

export const useProdutos = create<PropUseProdutos>((set) => ({
    produtos: [],
    copyProdutos: [],
    getProdutos: async () => {
        await api.get('/products/')
            .then((res) => {
                set({
                    produtos: res.data,
                    copyProdutos: res.data
                })
            })
    },

    getInfoProduto: async (id: number) => {
        await api.get(`/products/${id}/`)
            .then((res) => {
                set({
                    produtos: res.data,
                })
            })
    },

    deleteItem: (id: number) => {
        api.delete(`/products/${id}/`)
            .then((res) => {
                if (res.status === 204) {
                    set({ produtos: useProdutos.getState().produtos.filter((produto: PropProdutos) => produto.id !== id) });
                    toast.success("Excluido com sucesso!")
                }
            })
            .catch((err) => console.log(err));
    },

    filtroCategoriaProdutos: async (idCategoria: number) => {
        if (idCategoria === 0) {
            useProdutos.getState().getProdutos();
            return;
        }

        await api.get(`/products/?category=${idCategoria}`)
            .then((res) => {
                set({ 
                    produtos: res.data, 
                    copyProdutos: res.data
                })
            })
    },

    filterName: async (nameProduto: string) => {
        set({ produtos: useProdutos.getState().copyProdutos.filter((produto: PropProdutos) => produto.name.toLowerCase().includes(nameProduto.toLowerCase())) })
        console.log(nameProduto);
    }
}))