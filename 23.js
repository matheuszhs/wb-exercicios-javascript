// Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
// aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
// aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
// "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
const calcularNota = (codigo, n1, n2, n3) => {
	let notas = []
	notas.push(n1, n2, n3)
	notas.sort((x, y) => x < y ? 1 : -1)

	let media = (notas[0] * 0.4 + notas[1] * 0.3 + notas[2] * 0.3).toFixed(2)

	console.log(`Notas aluno código ${codigo}: \nN1: ${n1} \nN2: ${n2} \nN3: ${n3} \nMédia: ${media} \nSituação: ${media >= 5 ? 'Aprovado' : 'Reprovado'}\n`)
}

calcularNota(777, 7, 10, 5)
calcularNota(778, 5, 6, 3)