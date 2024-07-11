import * as leia from "readline-sync"
import { Refrigerante } from "./src/model/Refrigerante";
import { Cerveja } from "./src/model/Cerveja";
import { BebidaController } from "./src/controller/BebidaController";

export function main() {
    let nome, marca, descricao, sabor: string;
    let id, opcao, preco, volume, tipo, estoque, teorAlcoolico: number;
    const tipoBebidas = ["Refrigerante", "Cerveja"]
    let bebidas: BebidaController = new BebidaController();

    console.log("**************************************************")
    console.log("")
    console.log("\tTIO LUIZ BEBIDAS COMÉRCIO ONLINE ®️")
    console.log("\n**************************************************\n")
    console.log("\t1 - Cadastrar Bebida")
    console.log("\t2 - Listar Todas as Bebida")
    console.log("\t3 - Buscar Bebida por ID")
    console.log("\t4 - Atualizar Dados da Bebida")
    console.log("\t5 - Deletar Bebida")
    console.log("\t6 - Sair\n")
    console.log("*************************************************")

    while (true) {
        opcao = leia.questionInt("Entre com a opcao desejada: ")
        switch (opcao) { 
            case 1:
                tipo = leia.keyInSelect(tipoBebidas, "Digite o tipo da bebida", { cancel: false }) + 1;
                nome = leia.question("Digite o nome da bebida: ")
                marca = leia.question("Digite a marca da bebida: ")
                console.log("Digite descrição da bebida: ");
                descricao = leia.question("")
                estoque = leia.questionInt("Quantas unidades em estoque desse produto? ")
                preco = leia.questionFloat("Digite o valor da bebida: ")
                volume = leia.questionFloat("Digite em mililitros (ml) o volume da bebida: ")
                if (tipo == 1) {
                    sabor = leia.question("Digite o sabor do refrigerante: ")
                    bebidas.cadastrar(new Refrigerante(bebidas.gerarNumero(), nome, marca, preco, volume, tipo, descricao, estoque, sabor))
                } else {
                    teorAlcoolico = leia.questionInt("Digite o teor alcoolico da cerveja (%): ")
                    bebidas.cadastrar(new Cerveja(bebidas.gerarNumero(), nome, marca, preco, volume, tipo, descricao, estoque, teorAlcoolico))
                }
                break;
            case 2:
                bebidas.listarTodas();
                break;
            case 3:
                id = leia.questionInt("Digite o ID da bebida procurada: ")
                bebidas.procurarPorID(id);
                break;
            case 4:
                id = leia.questionInt("Digite o ID da bebida a ser atualizada: ")

                let bebida = bebidas.buscarNoArray(id);
                if (bebida == null) {
                    console.log(`A bebida de ID ${id} não foi encontrada.`);
                    return;
                }

                nome = leia.question("Digite o nome da bebida a ser atualizada: ")
                marca = leia.question("Digite a marca da bebida a ser atualizada: ")
                console.log("Digite descrição da bebida a ser atualizada: ");
                descricao = leia.question("")
                estoque = leia.questionInt("Quantas unidades em estoque do produto atualizado? ")
                preco = leia.questionFloat("Digite o valor da bebida a ser atualizada: ")
                volume = leia.questionFloat("Digite em mililitros (ml) o volume da bebida a ser atualizada: ")
                if (tipo == 1) {
                    sabor = leia.question("Digite o sabor do refrigerante a ser atualizado: ")
                    bebidas.atualizar(new Refrigerante(id, nome, marca, preco, volume, bebida.tipo, descricao, estoque, sabor))
                } else {
                    teorAlcoolico = leia.questionInt("Digite o teor alcoolico da cerveja (%) a ser atualizada: ")
                    bebidas.atualizar(new Cerveja(id, nome, marca, preco, volume, bebida.tipo, descricao, estoque, teorAlcoolico))
                }
                    
                break;
            case 5:
                id = leia.questionInt("Digite o ID da bebida a ser deletada: ")
                bebidas.deletar(id);
                
                break;
            case 6:
                console.log("O Tio Luiz agradece sua visita!");
                process.exit(0);
                break;
            default:
                console.log("Opção inválida! Tente novamente.\n");
                
        }
    }
}



main();