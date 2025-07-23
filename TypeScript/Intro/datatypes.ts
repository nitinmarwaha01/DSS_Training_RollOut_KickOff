let first:number = 343; // Number value
let second:string = "Hello, TypeScript!"; // String value
let third:boolean = true; // Boolean value
let fourth:number = 0x3CF; // Hexadecimal
let fifth:number = 0b101010; // Binary

let fruits:string[] = ["Apple", "Banana", "Cherry"]; // Array of strings
let vegetables:Array<string> = ["Carrot", "Broccoli", "Spinach"]; // Another way to declare an array
let arr = [1, 2, 3, 4, 5]; // Array of numbers

//Tuple example
var employeeId:number = 30;
var employeeName:string = "John Doe";
let employee:[string, number] = ["John Doe", 30]; // Tuple with string and number

enum Color {
    Red = 1,
    Green,
    Blue
}

function getColor(colorName: string): Color | undefined {
    if (colorName === "Red") {
        return Color.Red;
    }
    // Return undefined if colorName does not match
    return undefined;
}