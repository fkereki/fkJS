const rangeI = (from, to, step = 1) => {
    let value = from - step;
    return {
        [Symbol.iterator]: () => ({ next: () => ((value += step), { value, done: step < 0 !== value > to }) })
    };
};

const rangeA = (from, to, step) => [...rangeI(from, to, step)];

for (let i of rangeI(9, 22)) console.log(i);

console.log("----");

for (let i of rangeA(22, 9, -3)) console.log(i);

console.log("----");

Array.from(rangeI(2, 16, 5)).forEach(i => console.log("I=", i));

console.log("----");

rangeA(3, 10, 2).forEach(j => console.log("J=", j));
