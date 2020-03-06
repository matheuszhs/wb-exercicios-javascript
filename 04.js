// Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.

const divisao = (dividendo, divisor) => {
	console.log(`Resultado = ${Math.floor(dividendo/divisor)}`) // retorna apenas o nume inteiro, sem decimais
	console.log(`Resto = ${dividendo % divisor}`)
}

divisao(10, 3)
divisao(754, 5)