import * as leia from "readline-sync"
import { BebidaRepository } from "./src/repository/BebidaRepository";
import { Refrigerante } from "./src/model/Refrigerante";
import { Cerveja } from "./src/model/Cerveja";

export function main() {
    let nome, marca, descricao, sabor: string;
    let id, opcao, preco, volume, tipo, estoque, teorAlcoolico: number;
    const tipoBebidas = ["Refrigerante", "Cerveja"]
    // let bebidas: BebidaRepository = new BebidasController();

    let refri: Refrigerante = new Refrigerante(1, "Coca-Cola", "Coca-Cola", 3.99, 350.00, 1, "Refri de Cola", 10, "Cola");
    let breja: Cerveja = new Cerveja(2, "Coca-Cola", "Coca-Cola", 3.99, 350.00, 1, "Refri de Cola", 10, 3);

    refri.visualizar();
    breja.visualizar();

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
                preco = leia.questionFloat("Digite o valor da bebida: ")
                volume = leia.questionFloat("Digite em mililitros (ml) o volume da bebida: ")
                if (tipo == 1) {
                    sabor = leia.question("Digite o sabor do refrigerante: ")
                } else {
                    teorAlcoolico = leia.questionInt("Digite o teor alcóolico da cerveja (%): ")
                }
                break;
            case 2:
                // bebidas.listarTodas();
                break;
            case 3:
                id = leia.questionInt("Digite o ID da bebida procurada: ")
                // bebidas.procurarPorID(id);
                break;
            case 4:
                id = leia.questionInt("Digite o ID da bebida a ser atualizada: ")
                break;
            case 5:
                id = leia.questionInt("Digite o ID da bebida a ser deletada: ")
                // bebidas.deletar(id);
                
                break;
            case 6:
                console.log("O Tio Luiz agradece sua visita!");
                process.exit(0);
        }
    }
}



main();