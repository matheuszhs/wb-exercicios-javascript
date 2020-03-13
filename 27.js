// Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
// crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
// quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
const alturaCrianca = (alt1, taxa1, alt2, taxa2) => {
	if (alt1 == alt2) { // quando as 2 crianças possuem o mesmo tamanho
		if (taxa1 == taxa2)
			return 'Nenhuma das 2 crianças vai ser maior!'
		else if (taxa1 > taxa2)
			return 'A criança 1 será maior que a criança 2 em 1 ano!'
		else
			return 'A criança 2 será maior que a criança 1 em 1 ano!'
	} else if (alt1 > alt2) {
		if(taxa1 >= taxa2)
			return 'A criança 1 sempre será maior que a criança 2!'
		else 
			return calcularTempo(alt2, taxa2, alt1, taxa1)
	} else if (alt2 > alt1){
		if(taxa2 >= taxa1)
			return 'A criança 2 sempre será maior que a criança 1!'
		else 
			return calcularTempo(alt1, taxa1, alt2, taxa2)
	}
}

const calcularTempo = (menor, taxaMenor, maior, taxaMaior) => {
	let ano = 0
	while(menor <= maior) {
		menor += taxaMenor
		maior += taxaMaior
		ano++
	}

	return `A criança menor ultrapassará a maior em ${ano} ano(s)`
}

console.log(alturaCrianca(176, 10, 176, 10))
console.log(alturaCrianca(176, 10, 168, 12))
console.log(alturaCrianca(154, 12, 176, 10))