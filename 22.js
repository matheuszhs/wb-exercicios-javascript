// Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
// parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
// anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
// compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
const anuidade = (mes, valor) => {
	if(mes < 0 || mes > 12)
		return "Mês inexistente!"

	let mesAtrasado = mes -1

	return (valor * (Math.pow((1 + (5/100)), mesAtrasado))).toFixed(2)
}

console.log(anuidade(5, 1000))