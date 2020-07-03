export const people = [
    {
        id: 1,
        name: "Nicolas",
        age: 19,
        gender: "female"
    },
    {
        id: 2,
        name: "Yang",
        age: 25,
        gender: "male"
    },
    {
        id: 3,
        name: "las",
        age: 22,
        gender: "female"
    },
    {
        id: 4,
        name: "Kim",
        age: 28,
        gender: "male"
    },
    {
        id: 5,
        name: "Song",
        age: 30,
        gender: "female"
    }
]

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id)
    return filteredPeople[0]
}