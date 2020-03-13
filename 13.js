// Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado do número referente ao
// dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
const diaSemana = dia => {
	switch (dia) {
		case 1:
		case 7:
			return "Final de Semana!"
			break;
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			return "Dia útil!"
			break;
		default:
			return "Dia inválido!"
			break;

	}
}

console.log(diaSemana(1))
console.log(diaSemana(7))
console.log(diaSemana(4))
console.log(diaSemana('dia'))