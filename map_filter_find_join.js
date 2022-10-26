const students = [
    {
        id: 1,
        name: "Egor",
        age: 13,
        isMarried: true,
        scores: 100,
    },
    {
        id: 2,
        name: "Ilya",
        age: 43,
        isMarried: true,
        scores: 10,
    },
    {
        id: 3,
        name: "Viktor",
        age: 52,
        isMarried: true,
        scores: 130,
    },
    {
        id: 4,
        name: "Nina",
        age: 44,
        isMarried: false,
        scores: 60,
    }]

const getNames = (arr) => {
    const result = []
    const getNewValue = (el) => el.name       // возвращает знаение свойства name, объекта el
    for (let i = 0; i < arr.length; i++) {
        const newValue = getNewValue(arr[i])
        result[i] = newValue
    }
    return result
}

// ['Bob, 22 yo, 89 scores', ...] 1. взять каждый элемент массива
// 2. получить из него новое значение
// 3. поместить значение в новый массив

const retData = (arr) => {
    const result = []
    const getNewValue = (el) => `My name is ${el.name}, ${el.age}yo, ${el.scores} scores` // шаблонные строки
    // const getNewValue = (el) => 'My name is ' el.name + '' + el.age + 'yo,' + el.scores + 'scores.'
    for (let i = 0; i < arr.length; i++) {
        const newValue = getNewValue(arr[i])
        result[i] = newValue
    }
    return result
}


console.log(getNames(students))
console.log(retData((students)))

const getNewArray = (arr, fn) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        const newValue = fn(arr[i])
        result[i] = newValue
    }
    return result
}

console.log(getNewArray(students, (el) => el.name))
console.log(getNewArray(students, (el) => `${el.name} got ${el.scores} points`))
console.log(getNewArray(students, (el) => `My name is ${el.name}, ${el.age}yo, ${el.scores} scores`))


console.log(students.map((el) => el.name))
console.log(students.map(((el) => `${el.name} got ${el.scores} points`)))
console.log(students.map(((el) => `My name is ${el.name}, ${el.age}yo, ${el.scores} scores`)))


// проверяющая функция
const easyFilter = (arr, fn) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) === true) {
            result.push(arr[i])
        }
    }
    return result
}

console.log(easyFilter(students, (el) => el.scores >= 100))
console.log(students.filter((el) => el.scores >= 100))


// проверяющая функция
// find - получаем одно знаение соответствующее поиcку, если нет то undefined

const easyFind = (arr, fn) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]))
            return arr[i]
    }
}

console.log(easyFind(students, el => el.name === 'Egor'))
console.log((students.find(el => el.name === 'Egor')))


// Join
let fun = ['Bob', 'Alex', 'Nick', 'Join']
// find - получаем одно знаение соответствующее посику, если нет то undefined
const easyJoin = (arr, separator) => {
    let result = ''
    let sep = separator ? separator : ','
    for (let i = 0; i < arr.length; i++) {
        result += arr[i] + sep
    }
    return result
}

console.log(easyJoin(fun, ' X '))