//criar classes(molde)
class Produto {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
        this.ativo = true;
    }

    // Método para atualizar o nome
    atualizarNome(novoNome) {
        this.nome = novoNome;
    }

    // Método para desativar o produto
    desativar() {
        this.ativo = false;
    }

    // Método para ativar o produto
    ativar() {
        this.ativo = true;
    }

    // Método para exibir informações do produto
    exibirInfo() {
        console.log(`Produto: ${this.nome} | ID: ${this.id} | Status: ${this.ativo ? 'Ativo' : 'Inativo'}`);
    }
}

// Criando os produtos
const p1 = new Produto(1, "carregador");
const p2 = new Produto(2, "capinha");

// Testando os métodos
console.log(p1);
p1.atualizarNome("carregador iphone");
console.log(p1);

console.log(p2);
p2.desativar();
console.log("nome produto:", p2.nome, "status:", p2.ativo);

// Usando o método de exibição
p1.exibirInfo();
p2.exibirInfo();
