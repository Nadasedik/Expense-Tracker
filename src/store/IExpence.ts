export interface IExpense{
    id: string,
    name: string,
    amount: number,
    date: string,
    category: string,
    customCategory?: string,
    notes?: string,
}

export type Income = {
    income: Number,
    name: string,
}
export interface ICategory {
    categoryName: string,
    limit: number,
}

