
export let name = "Viridiana";
export const age: number = 39
export const  isValid: boolean = true

name = 'Adriana'

export const templateString = `Esto es un string
multilinea
y puede tener 
" dobles
' simple
inyectar valores ${name}
números: ${age}
expresiones ${1 +1}
booleanos ${isValid}`

console.log(templateString)

