import * as leia from "readline-sync"

export function main() {
    let nome, marca, descricao: string;
    let id, opcao, preco, volume, tipo, estoque: number;
    const tipoBebidas = ["Refrigerante", "Cerveja"]

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