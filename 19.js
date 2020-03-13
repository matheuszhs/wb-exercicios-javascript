// O cardápio de uma lanchonete é o seguinte:
// Código Descrição do Produto Preço
// 100 Cachorro Quente R$ 3,00
// 200 Hambúrguer Simples R$ 4,00
// 300 Cheeseburguer R$ 5,50
// 400 Bauru R$ 7,50
// 500 Refrigerante R$ 3,50
// 600 Suco R$ 2,80
// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
// a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
// comando switch. Crie um caso default para produto não existente.
const preco = (codigo, quantidade) => {
	switch (codigo) {
		case 100:
			return `R$ ${(quantidade * 3).toFixed(2).replace('.', ',')}`
		case 200:
			return `R$ ${(quantidade * 4).toFixed(2).replace('.', ',')}`
		case 300:
			return `R$ ${(quantidade * 5.5).toFixed(2).replace('.', ',')}`
		case 400:
			return `R$ ${(quantidade * 7.5).toFixed(2).replace('.', ',')}`
		case 500:
			return `R$ ${(quantidade * 3.5).toFixed(2).replace('.', ',')}`
		case 600:
			return `R$ ${(quantidade * 2.8).toFixed(2).replace('.', ',')}`
		default:
			return 'Produto inexistente!'
	}
}

console.log(preco(100, 2));
console.log(preco(200, 3));
console.log(preco(300, 4));
console.log(preco(400, 5));
console.log(preco(500, 6));
console.log(preco(600, 1));
console.log(preco(700, 2));
console.log(preco(1000, 2));