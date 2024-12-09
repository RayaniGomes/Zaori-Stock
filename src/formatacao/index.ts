export const fomatarData = (date: string) => {
    const data = new Date(date);
    const dia = data.getDate().toString();
    const diaF = (dia.length == 1) ? '0' + dia : dia;
    const mes = (data.getMonth() + 1).toString();
    const mesF = (mes.length == 1) ? '0' + mes : mes;
    const anoF = data.getFullYear();

    return diaF + "/" + mesF + "/" + anoF;
};

export const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
});