
// 11.REMOVE DUPLICATES
let str = "programming";
let result = "";

for (let ch of str) {
    if (!result.includes(ch))
        result += ch;
}

console.log(result);


// 12.SECOND LARGEST NUMBER
let arr = [10, 50, 30, 80, 60];

let largest = arr[0];
let second = arr[0];

for (let i = 1; i < arr.length; i++) {

    if (arr[i] > largest) {

        second = largest;
        largest = arr[i];

    } else if (arr[i] > second && arr[i] != largest) {

        second = arr[i];
    }
}

console.log("Second Largest =", second);


// 13.MERGE TWO ARRAYS
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = [];

for (let i = 0; i < arr1.length; i++) {

    arr3[arr3.length] = arr1[i];
}

for (let i = 0; i < arr2.length; i++) {

    arr3[arr3.length] = arr2[i];
}

console.log(arr3);

// 14.FIND MISSING NUMBER IN ARRAY
let ar = [1, 2, 3, 5];

let n = 5;

let total = (n * (n + 1)) / 2;

let sum = 0;

for (let i = 0; i < ar.length; i++) {

    sum = sum + ar[i];
}

console.log("Missing Number =", total - sum);


// 15.ROTATE ARRAY BY L POSITIONS
let a1 = [1, 2, 3, 4, 5];

let n1= 2;

for (let i = 1; i <= n1; i++) {

    let first = a1[0];

    for (let j = 0; j < a1.length - 1; j++) {

        a1[j] = a1[j + 1];
    }

    a1[a1.length - 1] = first;
}

console.log(a1);

// 16.COUNT OCCRENCES
let a2 = [1, 2, 2, 3, 1, 2];

let count: any = {};

for (let i of a2) {
    if (count[i])
        count[i]++;
    else
        count[i] = 1;
}

console.log(count);


// 17.DUPLICATE ELEMENTS

let a = [1, 2, 3, 2, 4, 1];

for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
        if (a[i] == a[j]) {
            console.log(a[i]);
            break;
        }
    }
}


// 18.STUDENT CLASS
class Student {
    constructor(public name: string, public age: number) {}

    display() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}

let s = new Student("Ayesha", 20);
s.display();


// 19.BANK ACCOUNT CLASS
class BA{
    balance: number = 1000;

    deposit(amount: number) {
        this.balance += amount;
    }

    withdraw(amount: number) {
        this.balance -= amount;
    }

    displayBalance() {
        console.log("Balance:", this.balance);
    }
}

let b1= new BA();

b1.deposit(500);
b1.withdraw(200);
b1.displayBalance();


// 20.EMPLOYEE CLASS
class BankAccount {
    balance: number = 1000;

    deposit(amount: number) {
        this.balance += amount;
    }

    withdraw(amount: number) {
        this.balance -= amount;
    }

    displayBalance() {
        console.log("Balance:", this.balance);
    }
}

let b = new BankAccount();

b.deposit(500);
b.withdraw(200);
b.displayBalance();


// 21.Student Class with readonly ID

class STUDENT {
    readonly id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    display() {
        console.log(this.id);
        console.log(this.name);
    }
}

let s1 = new STUDENT(101, "Ayesha");
s1.display();


// 22.STATIC COLLEGE NAME
class Stu1 {
    static college = "ABC College";

    static showCollege() {
        console.log(Stu1.college);
    }
}

Stu1.showCollege();


// 23.NAME SPACE
namespace MathOperations {

    export function add(a: number, b: number) {
        return a + b;
    }

    export function subtract(a: number, b: number) {
        return a - b;
    }

    export function multiply(a: number, b: number) {
        return a * b;
    }

    export function divide(a: number, b: number) {
        return a / b;
    }
}

console.log(MathOperations.add(10, 5));
console.log(MathOperations.subtract(10, 5));
console.log(MathOperations.multiply(10, 5));
console.log(MathOperations.divide(10, 5));


// 25.GENERIC BOX T
class Box<T> {
    data: T;

    constructor(data: T) {
        this.data = data;
    }

    display() {
        console.log(this.data);
    }
}

let box1 = new Box<number>(100);
let box2 = new Box<string>("Hello");

box1.display();
box2.display();
