

function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
}

type C = { a: string, b?: number }
function f({ a, b }: C): void {
    // ...
}