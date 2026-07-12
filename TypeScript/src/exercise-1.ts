let userName: string = "John Doe";
let age: number = 30;
let isStudent: boolean = true;
let hobbies: string[] = ["reading", "traveling", "coding"];
let pair: [string, number] = ["Alice", 25];

console.log(userName);
console.log(age);
console.log(isStudent);
console.log(hobbies);
console.log(pair);

const student = {
  name: "Jane Smith",
  age: 22,
  isEnrolled: true,
  courses: ["Math", "Science", "History"],
};

console.log(student);

function greet(name: string, age?: number): string {
  if (age !== undefined) {
    return `Hello, ${name}! You are ${age} years old.`;
  }
  return `Hello, ${name}!`;
}

console.log(greet("Nimal"));
console.log(greet("Kamal", 28));
