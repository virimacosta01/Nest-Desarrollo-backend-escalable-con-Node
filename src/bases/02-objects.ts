
export const simponsIds = [1,2,7,98,39]


interface Simpsons {
    id: number,
    name: string,
    age?: number
}
export const bart: Simpsons = {
    id: 1,
    name: 'Bart',
    age: 10
}

export const lisa: Simpsons = {
    id: 2,
    name: 'Lisa',
    age: 7
}


export const personajes: Simpsons []= []
personajes.push(bart, lisa)

console.log(personajes)