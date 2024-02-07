let resistividade = 0.00172 //resistividade condutor do cobre 0,0172 Ω. mm²/m

let comprimento = 1555
let areaTransversal = 2.5 //o valor mínimo é 1 para não dividir por zero
let resistencia = 0

resistencia = resistividade * comprimento / areaTransversal

console.log('Resistência='+resistencia)