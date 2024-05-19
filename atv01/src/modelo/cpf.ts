export default class CPF {
    private valor: string
    private dataEmissao: Date
    constructor(valor: string, dataEmissao: Date) {
        this.valor = valor
        this.dataEmissao = dataEmissao
    }
    public get getValor(): string {
        return this.valor
    }
    public get getDataEmissao(): Date {
        return this.dataEmissao
    }
    public formatarCPF(cpf: string): string {
        const cpfSemFormatacao = this.valor.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
        const primeiraParte = cpfSemFormatacao.substring(0, 3);
        const segundaParte = cpfSemFormatacao.substring(3, 6);
        const terceiraParte = cpfSemFormatacao.substring(6, 9);
        const digitosVerificadores = cpfSemFormatacao.substring(9, 11);

        return `${primeiraParte}.${segundaParte}.${terceiraParte}-${digitosVerificadores}`;
    }
    toString(): string {
        return this.formatarCPF(this.valor);
    }
}