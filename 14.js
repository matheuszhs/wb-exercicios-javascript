// Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
// casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
// escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
// também um default, que retornará uma mensagem de erro no console.

const frutas = produto => {
	produto = produto.toLowerCase()
	switch(produto){
		case 'maçã':
			return 'Não vendemos esta fruta aqui'
			break
		case 'kiwi':
			return 'Estamos com escassez de kiwis'
			break
		case 'melancia': 
			return 'Aqui está, são 3 reais o quilo'
			break
		default:
			return 'Produto não encontrado no sistema!'
			break
	}
}

console.log(frutas('MAÇÃ'))
console.log(frutas('Kiwi'))
console.log(frutas('MelanciA'))
console.log(frutas('Banana'))