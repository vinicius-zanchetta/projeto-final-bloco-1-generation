import { Bebida } from "./Bebida";

export class Cerveja extends Bebida {
    private _teorAlcoolico: number;

    constructor(id: number, nome: string, marca: string, preco: number, volume: number, tipo: number, descricao: string, estoque: number, teorAlcoolico: number) {
        super(id, nome, marca, preco, volume, tipo, descricao, estoque);
        this._teorAlcoolico = teorAlcoolico;
    }

    visualizar(): void {
        super.visualizar();
        console.log(`Teor Alcóolico: ${this._teorAlcoolico}%`);
        console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");
    }

    public get teorAlcoolico(): number {
        return this._teorAlcoolico;
    }

    public set teorAlcoolico(value: number) {
        this._teorAlcoolico = value;
    }
}