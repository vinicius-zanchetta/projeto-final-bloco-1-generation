import { Bebida } from "../model/Bebida";

export interface BebidaRepository {
	cadastrar(bebida: Bebida): void;
	procurarPorID(numero: number): void;
	listarTodas(): void;
	atualizar(bebida: Bebida): void;
	deletar(numero: number): void;
}