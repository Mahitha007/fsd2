let Username: string = "Hello my name is mahitha";
console.log(Username);

let age: number = 20;
console.log(age);

let isMember: boolean = true;
console.log(isMember);

let college: string = "Shri Vishnu Engineering College for Women";
console.log(college);

let village: string = "Kunkalagunta";
console.log(village);

// SPECIAL DATATYPES (any, unknown, void)

let data: any = 10;
data = "Hi, I am Ayesha";
console.log(data);

let value: unknown = "This is FSD2 LAB";

if (typeof value === "string") {
    console.log(value);
}