import { Bebida } from "../model/Bebida";
import { BebidaRepository } from "../repository/BebidaRepository";

export class BebidaController implements BebidaRepository {
    private listaBebidas: Array<Bebida> = new Array<Bebida>;
    public numero: number = 0;

    cadastrar(bebida: Bebida): void {
        this.listaBebidas.push(bebida);
        console.log("A bebida foi cadastrada com sucesso!\n");
    }

    procurarPorID(id: number): void {
        let bebidaBuscada: Bebida | null = this.buscarNoArray(id);
        (bebidaBuscada !== null) ? bebidaBuscada.visualizar() : console.log("A bebida não foi encontrada.\n");
    }

    listarTodas(): void {
        if (this.listaBebidas.length == 0) {
            console.log("Não foram encontradas bebidas cadastradas.\n");
            return
        }
        this.listaBebidas.forEach(b => b.visualizar());
        console.log();
        
    }

    atualizar(bebida: Bebida): void {
        let bebidaBuscada = this.buscarNoArray(bebida.id);

        if (bebidaBuscada !== null) {
            console.log(`A bebida com ID ${bebidaBuscada.id} foi alterada com sucesso!\n`);
            this.listaBebidas[this.listaBebidas.indexOf(bebidaBuscada)] = bebida;
        } else {
            console.log("A bebida não foi encontrada!\n");
        }
    }

    deletar(id: number): void {
        let bebidaBuscada = this.buscarNoArray(id);

        if (bebidaBuscada != null) {
            console.log(`A bebida ${bebidaBuscada.nome} de ID ${bebidaBuscada.id} foi excluída com sucesso!\n`);
            this.listaBebidas.splice(this.listaBebidas.indexOf(bebidaBuscada), 1);
        } else 
            console.log("A bebida não foi encontrada!\n");
    }

    // métodos auxiliares
    public gerarNumero(): number {
        return ++this.numero;
    }

    public buscarNoArray(id: number): Bebida | null {
        for (let bebida of this.listaBebidas) {
            if (bebida.id === id) {
                return bebida;
            }
        }
        return null;
    }
}