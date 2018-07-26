const obj = { x: 'xxx', y: 1 };
console.log(Object.values(obj)); // ['xxx', 1]
const obj2 = ['e', 's', '8']; // same as { 0: 'e', 1: 's', 2: '8' };
console.log(Object.values(obj2)); // ['e', 's', '8']
// when we use numeric keys, the values returned in a numerical 
// order according to the keys
const obj3 = { 10: 'xxx', 1: 'yyy', 3: 'zzz' };
console.log(Object.values(obj3)); // ['yyy', 'zzz', 'xxx']
console.log(Object.values('es8')); // ['e', 's', '8']


console.log("=====")


const obj4 = { x: 'xxx', y: 1 };
console.log(Object.entries(obj4)); // [['x', 'xxx'], ['y', 1]]
const obj5 = ['e', 's', '8'];
console.log(Object.entries(obj5)); // [['0', 'e'], ['1', 's'], ['2', '8']]
const obj6 = { 10: 'xxx', 1: 'yyy', 3: 'zzz' };
console.log(Object.entries(obj6)); // [['1', 'yyy'], ['3', 'zzz'], ['10': 'xxx']]
console.log(Object.entries('es8')); // [['0', 'e'], ['1', 's'], ['2', '8']]


console.log("=====")

const objT = { get es8() { return 888; } };
console.log(Object.getOwnPropertyDescriptor(objT, 'es8'));