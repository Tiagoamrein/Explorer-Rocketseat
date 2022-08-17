let id = prompt ('Vamos calcular as suas notas ? Digite seu nome:')

let noteOne = Number(prompt('Digite sua nota do primeiro semestre'))
let noteTwo = Number(prompt('Digite sua nota do segundo semestre'))

const Average = ((noteOne + noteTwo)/2).toFixed(1)

let approved
let disapproved 


if (Average >= 7) {
  alert('Voce foi aprovado:' + id + 'Sua media é ' + Average )
}
else if (Average < 7) {
  alert('Voce foi reprovado:' + id)
}