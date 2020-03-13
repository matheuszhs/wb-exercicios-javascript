// Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
// ou false.

const mult3 = n => {
	return n % 3 === 0 
}

console.log(mult3(3))
console.log(mult3(9))
console.log(mult3(27))
console.log(mult3(10))
console.log(mult3(17))