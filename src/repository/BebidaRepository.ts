import { Bebida } from "../model/Bebida";

export interface BebidaRepository {
	cadastrar(bebida: Bebida): void;
	procurarPorID(id: number): void;
	listarTodas(): void;
	atualizar(bebida: Bebida): void;
	deletar(id: number): void;
}