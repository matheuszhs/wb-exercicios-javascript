// Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
// para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
// Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
// informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
// nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
const contadorNota = saldo => {
	let nota100 = 0, nota50 = 0, nota10 = 0, nota5 = 0, nota1 = 0
	let nota = validaNota(saldo)
	if (saldo <= 0)
		return 'Valor inválido!'
	while (saldo >= nota) {
		switch (nota) {
			case 100:
				saldo -= 100
				nota100++
				break
			case 50:
				saldo -= 50
				nota50++
				break
			case 10:
				saldo -= 10
				nota10++
				break
			case 5:
				saldo -= 5
				nota5++
				break
			case 1:
				saldo -= 1
				nota1++
				break
		}
		nota = validaNota(saldo)
	}

	let result = ''
	result += nota100 > 0 ? `${nota100} nota(s) de R$ 100.\n` : ''
	result += nota50 > 0 ? `${nota50} nota(s) de R$ 50.\n` : ''
	result += nota10 > 0 ? `${nota10} nota(s) de R$ 10.\n` : ''
	result += nota5 > 0 ? `${nota5} nota(s) de R$ 5.\n` : ''
	result += nota1 > 0 ? `${nota1} nota(s) de R$ 1.\n` : ''

	return result
}

const validaNota = valor => valor >= 100 ? 100 : valor >= 50 ? 50 : valor >= 10 ? 10 : valor >= 1 ? 1 : NaN

console.log(contadorNota(200))
console.log(contadorNota(7543))
console.log(contadorNota(1))
console.log(contadorNota(0))
console.log(contadorNota(-10))