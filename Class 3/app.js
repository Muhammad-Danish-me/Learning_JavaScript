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



