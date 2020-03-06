// Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

const simples = (capital, taxa, tempo) => {
	let porcentagem = taxa/100
	let total = capital + (capital * porcentagem * tempo)
	console.log(`Juros Simples: R$ ${total}`)
}

const composto = (capital, taxa, tempo) => {
	let porcentagem = (taxa/100) + 1
	let total = capital * Math.pow(porcentagem, tempo)
	console.log(`Juros Composto: R$ ${total.toFixed(2).toString().replace('.',',')}`)
}

simples(1000, 12, 3)
composto(1000, 12, 3)