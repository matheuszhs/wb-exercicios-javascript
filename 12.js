// Faça um algoritmo que calcule o fatorial de um número.
const fatorial = n => {
	let count = n
	let result = 1
	
	while(n > 0 && count > 1) {
		result = result * count
		count--;
	} 

	if(n < 0) {
		return 'Infinito'
	}

	return result
}

console.log(`5! = ${fatorial(5)}`)
console.log(`0! = ${fatorial(0)}`)
console.log(`-15! = ${fatorial(-15)}`)
console.log(`3! = ${fatorial(3)}`)