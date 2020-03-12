// Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
// elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
// parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
// -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
// que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
// “Delta é negativo”.

const delta = (ax2, bx, c) => {
	return Math.pow(bx, 2) - 4 * ax2 * c
}

const formula = (ax2, bx, c) => {
	let d = delta(ax2, bx, c)
	let result = []

	if(d < 0) {
		console.log("Delta é negativo")
	} else {
		result.push((- bx + Math.sqrt(d)) / 2 * ax2)
		result.push((- bx - Math.sqrt(d)) / 2 * ax2)

		console.log(result)
	}
}

formula(1, -3, -10)
formula(3, -5, 12)
formula(3, -5, 0)