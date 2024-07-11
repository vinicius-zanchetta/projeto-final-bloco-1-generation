import { Bebida } from "./Bebida";

export class Refrigerante extends Bebida {
    private _sabor: string;

    constructor(id: number, nome: string, marca: string, preco: number, volume: number, tipo: number, descricao: string, estoque: number, sabor: string) {
        super(id, nome, marca, preco, volume, tipo, descricao, estoque);
        this._sabor = sabor;
    }

    visualizar(): void {
        super.visualizar();
        console.log(`Sabor: ${this._sabor}`);
        console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");
    }

    public get sabor(): string {
        return this._sabor;
    }

    public set sabor(value: string) {
        this._sabor = value;
    }
}