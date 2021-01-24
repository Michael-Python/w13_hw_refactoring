const names = ["Fred", "Shaggy", "Velma", "Daphne", "Scooby"];
// console.log(names);

// const fred = names[0];
// const shaggy = names[1];
// console.log(shaggy);

// const [fred, shaggy] = names;
// console.log(shaggy);

// const [fred,,,daphne] = names;
// console.log(daphne);

const [fred,,, ...remainingNames] = names;
console.log(remainingNames);