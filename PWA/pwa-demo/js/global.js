const syncTag = 'testSync';

const hiText = 'hi';
const helloText = 'hello';

function calc() {
    let sum = 0;
    for (let i = 0; i < 5000000000; i++) {
        sum += i;
    }
    return sum;
}