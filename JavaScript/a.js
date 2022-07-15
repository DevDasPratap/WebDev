// function reverseWords(str) {
//   let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
//   return reverseWordArr.join(" ");
// }
// let a=reverseWords('i am pratap das');
// console.log(a);

// function wordsReverser(string){
//     return string.split('').reverse().join('');
//   }
//   console.log(wordsReverser('I am pratap das'));


// function wordsReverser(string){
// return string.split("").reverse().join("").split(" ").reverse().join(" ")  
// }

// console.log(wordsReverser('New string, same results.'));

// function wordsReverser(string){
//     var arr = string.split("");
//     var output = [];
//     for(var i = arr.length - 1;  i >= 0; i--){
//         output.push(arr[i]);
//     }
//   return output.join("");
// }
// let a=wordsReverser('I am pratap das');
// console.log(a);


// function reverseWord (sentence) {
//   return sentence.split(' ').map(function(word) {
//     return word.split('').reverse().join('');
//   }).join(' ');
// }

// console.log(reverseWord("I am pratap das"));


// function reverse(s){
//     return s.split("").reverse().join("");
// }
// console.log(reverse('i am pratap das'));



// function reverse(s){
//     return [...s].reverse().join("");
// }
// console.log(reverse('i am das'))




// var s= ["i", "like", "this", "program", "very", "much"];
let s='i am pratap das';
    var ans ="";
    for (var i = 4; i >= 0; i--)
    {
        ans += s[i] + " ";
    }
    console.log(ans.slice(0,ans.length-1));


// rev=(val)=>{
// return val.split("").reverse().join("").split(" ").reverse().join(" ")
// }
// console.log(rev('Hi how are you'))

// let str = "Welcome to my Website !";
// console.log((str.split("").reverse().join("").split(" ").reverse().join(" ")));


// function reverseString(input)
// {
//     var output = "";
//     for(var i = input.length - 1; i >= 0; i--) {
//         output +=  input[i];
//     }
//     return output;
// }
// console.log(reverseString('i am p das'))




