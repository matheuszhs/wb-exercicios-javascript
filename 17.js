// Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
// Plano Aumento
// A 10%
// B 15%
// C 20%
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
const aumento = (plano, salario) => {
	plano = plano.toLowerCase()
	switch (plano) {
		case 'a':
			return salario + (salario * 0.1)
		case 'b':
			return salario + (salario * 0.15)
		case 'c':
			return salario + (salario * 0.2)
		default:
			return 'Plano inválido!'
	}
}

console.log(aumento('a', 1000))
console.log(aumento('b', 1000))
console.log(aumento('c', 1000))
console.log(aumento('d', 1000))