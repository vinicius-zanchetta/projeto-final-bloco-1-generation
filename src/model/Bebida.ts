export abstract class Bebida {
    private _id: number;
    private _nome: string;
    private _marca: string;
    private _preco: number;
    private _volume: number;
    private _tipo: number;
    private _descricao: string;

    constructor(id: number, nome: string, marca: string, preco: number, volume: number, tipo: number, descricao: string, estoque: number) {
		this._id = id;
		this._nome = nome;
		this._marca = marca;
		this._preco = preco;
		this._volume = volume;
		this._tipo = tipo;
		this._descricao = descricao;
		this._estoque = estoque;
	}

    visualizar() {
        console.log("________________________________________");
        console.log(`Produto: ${this._nome} - ID ${this._id}`);
        console.log(`Marca: ${this._marca}`);
        console.log(`Descricao: ${this._descricao}`);
        console.log(`Quantidade em Estoque: ${this._estoque}`);
        console.log(`Preço: ${this._preco}`);
        console.log(`Volume: ${this.volume}`);
        (this._tipo == 1) ? console.log(`Tipo: Refrigerante`) : console.log(`Tipo: Cerveja`);
    }

	public get id(): number {
		return this._id;
	}

	public get nome(): string {
		return this._nome;
	}

	public get marca(): string {
		return this._marca;
	}

	public get preco(): number {
		return this._preco;
	}

	public get volume(): number {
		return this._volume;
	}

	public get tipo(): number {
		return this._tipo;
	}

	public get descricao(): string {
		return this._descricao;
	}

	public get estoque(): number {
		return this._estoque;
	}

	public set id(value: number) {
		this._id = value;
	}

	public set nome(value: string) {
		this._nome = value;
	}

	public set marca(value: string) {
		this._marca = value;
	}

	public set preco(value: number) {
		this._preco = value;
	}

	public set volume(value: number) {
		this._volume = value;
	}

	public set tipo(value: number) {
		this._tipo = value;
	}

	public set descricao(value: string) {
		this._descricao = value;
	}

	public set estoque(value: number) {
		this._estoque = value;
	}
    private _estoque: number;   
}