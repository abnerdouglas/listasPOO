export default class Telefone {
    private ddd: string
    private numero: string

    constructor(ddd: string, numero: string) {
        this.ddd = ddd
        this.numero = numero
    }

    public get getDdd(): string {
        return this.ddd
    }
    public get getNumero(): string {
        return this.numero
    }
    private formatarTel(telefone: string): string {
        const parte1 = telefone.substring(0, 5);
        const parte2 = telefone.substring(5);

        return `(${this.ddd})${parte1}${parte2}`;
    }
    public toString(): string {
        return this.formatarTel(this.numero);
    }
}