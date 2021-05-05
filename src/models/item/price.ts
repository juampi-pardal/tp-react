export default class Price {

    readonly currency: string;
    readonly amount: number;
    readonly decimals: number;

    constructor(currency: string, amount: number, decimal: number) {
        this.currency = currency;
        this.amount = amount;
        this.decimals = decimal;
    }

}