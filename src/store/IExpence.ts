export interface IExpense{
    id: string,
    name: string,
    amount: string,
    date: string,
    category: string,
    customCategory?: string,
    notes?: string,
}
