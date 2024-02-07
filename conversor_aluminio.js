let resistividade = 0.0282 //resistividade condutor do alumínio 0,0282 Ω. mm²/m

let comprimento = 1555
let areaTransversal = 2.5 //o valor mínimo é 1 para não dividir por zero
let resistencia = 0

resistencia = resistividade * comprimento / areaTransversal

console.log('Resistência='+resistencia)