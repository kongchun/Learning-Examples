let isDone:boolean = false;

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;// 61453

let name : string = "bob";
name = "smith";

let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let x: [string, number];
console.log(x = ['hello', 10])
//console.log(x = [10, 10])

enum Color {Red, Green, Blue}
let c: Color = Color.Green;

console.log(c);

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean


function warnUser(): void {
    console.log("This is my warning message");
}

// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;

declare function create(o: object | null): void;
create({ prop: 0 })

let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;

export {}