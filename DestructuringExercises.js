// Object Destructuring 1
    // numPlanets = 8
    // yearNeptuneDiscovered = 1846

// Object Destructuring 2
    // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// Object Destructuring 3
    // Your name is Alejandro and you like purple
    // Your name is Melissa and you like green
    // Your name is undefined and you like green

// Array Destructuring 1
    // Maya
    // Marissa
    // Chi

// Array Destructuring 2
    // "Raindrops on Roses"
    // "whiskers on kittens"
    // ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

// Array Destructuring 3
    // [10, 30, 20]

// ES2015 Refactoring
    // const {a, b} = obj.numbers;

// ES2015 Array Swap
    // [arr[0], arr[1]] = [arr[1], arr[0]];

// raceResults()

let raceResults = ([first, second, third, ...others]) => ({first, second, third, others});