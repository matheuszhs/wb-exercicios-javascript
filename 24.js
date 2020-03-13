// Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.

const helloWorld = () => {
	let count = 0
	while(count < 11) {
		console.log(`${count + 1} - Hello World!`)
		count++
	}
}

helloWorld()