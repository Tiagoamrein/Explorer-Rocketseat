let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber


alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + multi)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + restDiv)



 if (firstNumber != secondNumber ) {
   alert ('Os numeros inseridos sao diferentes')
  
  }
  
 if (((firstNumber + secondNumber) % 2)  ==0) {
    alert ('A soma dos numeros é par')
 }
 else {
   alert ('A soma dos números é impar')
 }