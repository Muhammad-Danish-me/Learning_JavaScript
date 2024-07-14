// Strings And Its Method
let fullName = "Muhammad Danish";
// 1 length Returns the length of the string.
console.log(fullName.length); // 15

// 2 toUpperCase(): Converts the string to uppercase
console.log(fullName.toUpperCase()); // MUHAMMAD DANISH

// 3 toLowerCase(): Converts the string to lowercase
console.log(fullName.toLowerCase()); // muhammad danish

// 4  indexOf(): Returns the index of the first occurrence of a specified value.
console.log(fullName.indexOf("u")); // 1

// 5 charAt(): Returns the character at a specified index.
console.log(fullName.charAt(0)); // M

// 6 includes(): Returns a boolean indicating whether the string contains a specified value.
console.log(fullName.includes("Danish")); // true

// 7  substring(): Returns a subset of the string between two indices.
console.log(fullName.substring(0, 5)); // Muham

// 8 split() Convert string to an array
console.log(fullName.split(" ")); // ["Muhammad", "Danish"]

// 9 join() Joins an array of strings into a single string.
let days = ["Monday", "Tuesday", "Wednesday"];
console.log(days.join(" ")); // Monday Tuesday Wednesday

// 10 replace(): Replaces a specified value with a new value.
console.log(fullName.replace("Danish", "Ahmed")); // Muhammad Ahmed

// 11 trim(): Removes whitespace from the beginning and end of the string.
let string = "    Hello World    ";
console.log(string);
console.log(string.trim()); // Hello World

// 12 concat(): Concatenates two or more strings.
console.log("Muhammad".concat(" ", "Ali")); // Hello World

// 13 slice() Make string copy Returns a subset of the string between two indices.
console.log(fullName.slice(0, 5)); // Muham
