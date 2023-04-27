# Javascript array: Complete reference
In JavaScript, arrays are a built-in data type that allow you to store a collection of values of any data type. Unlike arrays in some other languages, JavaScript arrays are dynamic and can be resized during runtime.
## What is an array in javascript?
Instead, javascript has an  [object](https://nedcod.com/javascript-objects-complete-reference)  with an array like characteristics, it is significantly slower than a real array, but it is more convenient to use.

In JavaScript, an array is a built-in data type that allows you to store and access a collection of values. An array can contain any data type, including numbers, strings, booleans, objects, and even other arrays.

Arrays in javascript are zero indexes based which means the first value in the array is at 0th place the second element is at 1st place and so on.

## Why do we need arrays?
JavaScript arrays are an important tool for managing and manipulating collections of data in JavaScript, and are used extensively in web development, data processing, and other applications.
Advantage: 
- Dynamic size: JavaScript arrays are dynamic, which means that you can add or remove elements from the array during runtime. This makes it easy to manipulate the array based on changing data or user input.

- Data organization: JavaScript arrays provide an efficient way to organize large amounts of data into a single, easy-to-manage structure. For example, you can use an array to store a list of items in a shopping cart, or to keep track of user input in a form.

- Fast and efficient access: JavaScript arrays provide fast and efficient access to individual elements in the collection using zero-based indexing. This means that you can access any element in the array directly, without having to iterate through the entire collection.

- Built-in methods: JavaScript arrays have many built-in methods for manipulating the data in the collection, such as adding or removing elements, sorting the array, and searching for specific elements. This makes it easy to perform complex operations on the data without having to write complex code.

- Compatibility: JavaScript arrays are a fundamental data type in the JavaScript language and are supported by all modern web browsers. This makes them an essential tool for web development and other JavaScript applications.

Let us consider that we want to store all the days of the week, To store this we would do something like this.

```javascript
    let dayOneOfWeek = 'Sunday';
    let dayTwoOfWeek = 'Monday';
    let dayThreeOfWeek = 'Tuesday';
    let dayFourOfWeek = 'Wednesday';
    let dayFiveOfWeek = 'Thursday';
    let daySixOfWeek = 'Friday';
    let daySevenOfWeek = 'Saturday';
```
Using a variable to store all the days of the month would not be practical. Instead, an array can be used to store the entire collection in a single variable, making it much easier to manage and access the data.

```javascript
let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

```
## Creating an array in javascript
//Using [] to declare an empty array
```javascript
let week = [];
```
//Using constructor to declare an empty array
```javascript
let week = new Array();  
```
//Creates an array with three days
```javascript
let week = ['Monday', 'Tuesday', 'Wednesday'];
```
//Creates an array of 7 length
```javascript
let week = new Array(7); 
```

//Creates an array with three days
```javascript
let week = new Array('Monday', 'Tuesday', 'Wednesday'); 
```

Try to use  `[]`  for declaring the arrays as they are more convenient.

As javascript arrays are objects at the end of the day we can store different types of data in a single array unlike other programming languages.
```javascript
let array = ['string', 99.6, true, false, null, undefined, {'name':'pratap'}, ['nested', 'array'], Infinity, function() { console.log("I'm a function!"); }];
```
We can store all the available datatypes of javascript in array even functions because functions are also object in javascript.
## Array Length

```javascript
let city = ["Kolkata", "Bengaluru", "California", "Barcelona", "Paris", "Haldia", "Saint Petersburg"];

// find the length of the city array
let len = city.length;
console.log(len);

// Output: 7
```
Using Array length in for loop
```javascript
var languages = ["JavaScript", "Python", "C++", "Java", "TypeScript"];
// languages.length can be used to find out 
// the number of times to loop over an array
for (i = 0; i < languages.length; i++){
    console.log(languages[i]);
}
```

```javascript
var languages = ["JavaScript", "Python", "C++", "Java", "TypeScript"];

// truncate the Array to 3 elements
languages.length = 3

// Output: [ 'JavaScript', 'Python', 'C++' ]
console.log(languages)

// extend the Array to length 6
languages.length = 6

// Output: [ 'JavaScript', 'Python', 'C++', <3 empty items> ]
console.log(languages)
```
```javascript
let arr = [];
arr[1000] = 1;
console.log(arr.length);
//1001
```
Actually, the maximum length of a JavaScript array is 2^32 - 1, which is 4294967295. This is because the length property of a JavaScript array is represented as an unsigned 32-bit integer.









#JS Array Methods Explained with Examples
