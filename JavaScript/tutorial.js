// console.log('Hello World');
/* 1.------values and varibles-------*/
// var name ='Pratap Das';
// console.log(name);

/* 2.-----Data Type--------*/
/*
undefined
boolean
number
string
bigint
symbol
*/
// let myName = "Pratap Das";
// console.log(myName);
// console.log(typeof myName);

// let myAge = 25;
// console.log(myAge);
// console.log(typeof myAge);

// let iAmPratap = true;
// console.log(iAmPratap);
// console.log(typeof iAmPratap);

// let a = 10 + "10";
// let b = 9 - "5";
// let c = "Java" + "Script";
// let d = " " + " ";
// let e = " " + 0;
// let f = "Pratap" - "Das";
// let g = true + true;
// let h = true + false;
// let i = false + true;
// let j = false - true;

// console.log(a, typeof a);
// console.log(b, typeof b);
// console.log(c, typeof c);
// console.log(d, typeof d);
// console.log(e, typeof e);
// console.log(f, typeof f);
// console.log(g, typeof g);
// console.log(h, typeof h);
// console.log(i, typeof i);
// console.log(j, typeof j);
// console.log('----------');
// console.log(NaN === NaN);
// console.log(Number.NaN === NaN);
// console.log(isNaN(NaN));
// console.log(isNaN(Number.NaN));
// console.log(Number.isNaN(NaN));

/* 3.------Expressions and Operator-------*/
// console.log(5 + 20);
// let x = 5;
// let y = 5;
// console.log(`Is both the x and y are equal: ${x == y}`);
// let num = 15;
// let newNum = num++ + 5;
// console.log(num);
// console.log(newNum);

// console.log("--------------------");
// console.log(x == y);
// console.log(x != y);
// console.log(x > y);
// console.log(x >= y);
// console.log(x < y);
// console.log(x <= y);

/* 4.-------Logical Operator------*/
// let a = 30;
// let b = -20;

// console.log(a > b && b > 0);
// console.log((a > b) || (b > 0) || (b > 0));
// console.log(!((a > b) || (b > 0) || (b > 0)));
// console.log("--------------------");
// console.log(!true);
// console.log(!false);

/*------String Concatenation-------*/
// console.log("Hello World");
// console.log("Hello" + " Hi");
// let name = 'Pratap';
// console.log(name + ' Das');

// console.log("--------------------");
// console.log(3**3); //3*3*3=27
// console.log(100 ** -1);

// console.log("--------------------");
// let a = 5, b = 10; //Swap
// let c = b;
// b = a;
// a = c;
// console.log(a, b);

// console.log("----------Swap without 3rd variable----------");
// let a = 5, b = 10; //Swap without 3rd variable
// a = a+b; // a=15
// b = a-b; // b=5;
// a = a-b; // a=10;
// console.log(a, b);

// console.log("--------------------");
// let num1 = 5;
// let num2 = '5';
// console.log(typeof num1);
// console.log(typeof num2);
// console.log(num1 == num2);
// console.log(num1 === num2);

/* 5.------Control Statement & Loops-------*/
// console.log("---------Control Statement & Loops---------");
// let tomo = "rain";
// if(tomo == "rain"){
// 	console.log('Take a raincoat');
// }else{
// 	console.log('No need to take a raincoat');
// }

// console.log("------Leap Year-------");
// let year = 2022;
// if(year % 4 === 0){
// 	if(year % 100 === 0){
// 		if (year % 400 === 0) {
// 			console.log('The year ' + 'is a loop year');
// 		}else{
// 			console.log('The year ' + 'is not a loop year');
// 		}
// 	}else{
// 		console.log('The year ' + 'is a loop year');
// 	}
// }else{
// 	console.log('The year ' + 'is not a loop year');
// }

// console.log('-----Ternary Operator-----');
// let age = 18;
// console.log((age >= 18) ? 'You can vote':'You cant vote');

// console.log('-------Switch Statement----------');
// let area = "triangle";
// let PI = 3.142, l = 5, b = 4, r = 3;
// switch(area){
// 	case 'circle':
// 	console.log('The area of the circle is: ' + PI*r**2);
// 	break;
// 	case 'triangle':
// 	console.log('The area of the circle is: ' + (l*b)/2);
// 	break;
// 	case 'ractangle':
// 	console.log('The area of the circle is: ' + (l*b));
// 	break;
// 	default:
// 	console.log('Please enter valid data');
// }


// console.log('-------While loop Statement----------');
// let num = 0;
// while(num <= 10){
// 	console.log(num);
// 	num++;
// }


// console.log('-------Do While loop Statement----------');
// let num = 0;
// do{
// 	console.log(num);
// 	num++;
// }while(num <= 10);


// console.log('-------For loop Statement----------');
// for(let num = 0; num <= 10; num++){
// 	debugger;
// 	console.log(num);
// }


// for(let no = 1; no <= 10; no++){
// 	let tableOf = 8;
// 	console.log(tableOf + " * " + no + " = " + (tableOf * no));
// }

/* 6.---------Function--------*/
// console.log('---------Function----------');

// function mySum(a, b){
// 	let totalSum = a + b;
// 	console.log(totalSum);
// }

// mySum(20, 30);

// console.log('---------Function expration----------');
// let funExp = mySum(5, 10);
// funExp;

// console.log('---------Return Function----------');

// function sum(a,b){
// 	return total = a + b;
// }
// let funExpr = sum(5, 21);
// console.log(funExpr);

// console.log('---------Function Anonymous----------');
// let funExp = function(a,b){
// 	return total = a + b;
// }
// console.log(funExp(5, 16));



/* 7.--------Mordern JS/ES6/ECMAScript-----*/

// console.log('---------Mordern JS/ES6/ECMAScript----------');

//var = function scope
//let And const = block scopr

// console.log('------Template literals-------');
// for(var num = 1; num <= 10; num++){
// 	var totalOf = 9;
// 	console.log(`${totalOf} * ${num} = ${totalOf * num}`);
// }

// console.log('------Default argument-------');

// function mult(a,b=5){
// 	return a*b;
// }
// console.log(mult(5));

// console.log('------Fat arrow function-------');
// const sum = () =>{
// 	let a = 6, b = 4;
// 	return `The ab is: ${a+b}`;
// }
// console.log(sum());




// console.log('---------Array-----------');

// let myArr = ['a', 'b', 'c', 'd', 'e', true, 5];
// console.log(myArr);

// console.log('------Traversal array-------');
// let myAr = ['a', 'b', 'c', 'f', 'g'];
// console.log(myAr[1]);
// console.log(myAr.length);
// console.log(myAr[myAr.length-1]);



// console.log('------loop in array-------');

// let myA = ['Hi', 'Hello', 'c', 'f', 'g'];
// for(let i = 0; i < myA.length; i++){
// 	console.log(myA[i]);
// }



// console.log('------for in loop in array-------');

// let forIn = ['Pratap', 'Das', 'is', 'a', 'DevDas'];
// for(let  elements in forIn){
// 	console.log(elements);
// }


// console.log('------for of loop in array-------');
// let forOf = ['Pratap', 'Das', 'is', 'a', 'DevDas'];
// for(let  elements of forIn){
// 	console.log(elements);
// }



// console.log('------forEach loop in array-------');
// let forEch = ['Pratap', 'Das', 'is', 'a', 'DevDas'];
// forEch.forEach(function(element, index, array){
// 	console.log("Element: " + element);
// 	console.log( "Index: " + index);
// 	console.log("Array: " + array);
// });



// console.log('------forEach loop in fat array-------');
// let forEch = ['Pratap', 'Das', 'is', 'a', 'DevDas'];
// forEch.forEach((element, index, array) =>{
// 	console.log("Element: " + element);
// 	console.log( "Index: " + index);
// 	console.log("Array: " + array);
// })




// console.log('------searching and filter in an array-------');
// let srAndFil = ['Hello', 'Pratap', 'Das', 'is', 'a', 'DevDas', 'Pratap'];

// console.log(srAndFil.indexOf('Pratap', 1));
// console.log(srAndFil.lastIndexOf('Das', 2));

// console.log(srAndFil.includes('Pratap'));

// const prices = [100, 200, 300, 400, 500, 700, 900];
// const findElem = prices.find((currVal) =>{
// return currVal < 500;
// });
// console.log(findElem);

// const price = [100, 200, 300, 400, 500, 700, 900];
// const findIndex = price.findIndex((index) =>{
// return index < 500;
// });
// console.log(findIndex);

// const amount = [100, 200, 300, 400, 500, 700, 900];
// const findFilter = amount.filter((currVal) =>{
// return currVal < 500;
// });
// console.log(findFilter);


// console.log('------sort in an array-------');
// let srt = ['f', 'h', 'e', 'a', 'c', 'i', 'k', 'b', 'd'];
// console.log(srt.sort());

// let listN = [8, 6, 300, 1, 4, 2, 5, 7];
// console.log(listN.sort());


// console.log('------CRUD in an array-------');

// const animals = ['pigs', 'cow', 'goats', 'chicken', 'duck', 'camel', 'bafalow'];
// console.log(animals);
// animals.push('dear');
// console.log(animals);
// animals.push('tiger', 'aligator', 'lion');
// console.log(animals);

// animals.unshift('chicken');
// console.log(animals);
// animals.unshift('tiger', 'aligator', 'lion');
// console.log(animals);

// let count = animals.unshift();
// console.log(count);

// let myNum = [1,2,4,3,5];
// myNum.unshift(6,8);
// console.log(myNum);

// animals.pop();
// console.log(animals);

// animals.shift();
// console.log(animals);


// console.log('------CRUD in an array with splice-------');
// let month = ['January', 'Fabruary', 'March', 'April', 'May', 'June', 'July', 'August', 'September'];
// let newMonth = month.splice(9,0,'October');
// console.log(month);

// let addMonths = month.splice(month.length, 0, 'November');
// console.log(month);

// let add_Month = month.splice(month.length, 1, 'December');
// console.log(month);


// let upDateMonth = month.splice(1, 1, 'Feb');
// console.log(month);


// let indexOfMonth = month.indexOf('August');
// if(indexOfMonth != -1){
// 	let upDate_Month = month.splice(indexOfMonth, 1, 'NewAug');
// 	console.log(month);
// }else{
// 	console.log('No such data found');
// }


// let delete_Month = month.indexOf('July');
// if(delete_Month != -1){
// 	let deleteMonth = month.splice(delete_Month, 1);
// 	console.log(month);
// }else{
// 	console.log('No such data found');
// }



// console.log('------ Map(), Reduce(), Filter() in an array -------');

// let arr = [1, 4, 5, 8, 9, 10, 16, 19];
// let newArr = arr.map((currentElement, index, arr) => {
// 	// return currentElement > 9;
// 	return `Index no = ${index} and the value is ${currentElement} belong to ${arr}`;
// });
// console.log(arr);
// console.log(newArr);

// console.log('----- Find Squre root with map() in array-----');
// let new_arr = [9, 16, 25, 36, 49, 81, 100];
// let arrSqr = new_arr.map((curElem) => {
// 	return Math.sqrt(curElem);
// })
// console.log(arrSqr);


// console.log('----- filter() in array-----');


// let filtr = [4, 5, 7, 8, 9, 10, 16, 19];
// let newFiltr = filtr.filter((currentElement) => {
// 	return currentElement > 9;
// });
// console.log(newFiltr);

// console.log('----- Multiply with map(), filter() in array-----');

// let multi = [3, 4, 9, 10];
// let newMulti = multi.map((currentElement) => {
// 	return currentElement * 2;
// }).filter((currentElement) => {
// 	return currentElement > 10;
// });
// console.log(newMulti);


// console.log('----- Reduce() in array-----');

// let arrReduce = [4, 5, 7, 8, 9, 10, 16, 19];
// let newReduce = arrReduce.reduce((accumulator, currentElement, index, arrReduce) => {
// 	return accumulator += currentElement;
// });
// console.log(newReduce);


// let multi = [3, 4, 9, 10];
// let newMulti = multi.map((currentElement) => {
// 	return currentElement * 2;
// }).filter((currentElement) => {
// 	return currentElement > 10;
// }).reduce((accumulator, currentElement) => {
// 	return accumulator *= currentElement;
// })
// console.log(newMulti);


// console.log('----- Fatten in array (Converting 2d & 3d array into one dimensional array-----');

// const fattenArr = [
// ['Zone_1', 'Zone_2'],
// ['Zone_3', 'Zone_4'],
// ['Zone_5', 'Zone_6'],
// ['Zone_7', ['Zone_8', 'Zone_9']]
// ];
// let flatArr = fattenArr.reduce((accumulator, currentValue) => {
// 	return accumulator.concat(currentValue);
// })
// console.log(flatArr);



// console.log('------------String-------------------');

// let fName = 'Pratap';
// let lName = "Das";
// let fullName = new String("pratap das");
// console.log(fName);
// console.log(lName);
// console.log(fullName);

// let createSentence = "My friend called me as a \'DevDas\' i am from india.";
// console.log(createSentence);

// console.log('----------Finding a String in a String----------');

// let myBioData = "Hi, I am Pratap Das also know as DevDas";
// console.log(myBioData.indexOf("Pratap"));
// console.log(myBioData.indexOf("a", 7));
// console.log(myBioData.lastIndexOf("o", 25));

// console.log('----------Searching for a String in a String----------');

// let myInfo = "Hi, I am Pratap Das also know as DevDas";
// let searchData = myInfo.search("know");
// console.log(searchData);

// let srData = myInfo.search("a", 16);
// console.log(srData);


// console.log('----------Extracking String parts in a String -> slice(start, end)  substring(start, end)  substr(start, end)----------');
// let slices = "Apple, Banana, Jackfruit, Lemon";
// let respond = slices.slice(0,4);
// console.log(respond);

// let responds = slices.slice(7, -2);
// console.log(responds);


// console.log('--Practice -> Dslay only 29 character(Twitter)--');
// let myTweet = "Pratap Das, this is just to confirm that you are the owner of this domain.";
// console.log(myTweet);
// let myActualTweet = myTweet.slice(0, 29);
// console.log(myActualTweet);
// console.log(myActualTweet.length);


// let substrings = "Apple, Banana, Jackfruit, Lemon";
// //negative can't work in substring
// let respon = substrings.substring(8, -2);
// console.log(respon);


// let substrs = "Apple, Banana, Jackfruit, Lemon";
// let subRespond = substrs.substr(0,4);
// console.log(subRespond);

// //negative can't work in substring (show blank in console)
// let subResponds = substrs.substr(7,-2);
// console.log(subResponds);

// let subRespon = substrs.substr(-9);
// console.log(subRespon);



// console.log('---------- Replacing string content in a String ----------');

// let replaceData = "Hi, I am Pratap Das I also know as DevDas";
// let myReplaceData = replaceData.replace('Das', 'DAS');
// console.log(myReplaceData);

// let replaceDatas = replaceData.replaceAll('Das', 'DAS');
// console.log(replaceDatas);

// let myReplaceDatas = replaceData.replaceAll('I', 'Me');
// console.log(myReplaceDatas);

// let myReplace_Datas = replaceData.replaceAll('Das', 'DAS');
// console.log(myReplace_Datas);


// console.log('----------Extracking string characters in a String ----------');

//  let extrackingData = "Hi, I am Pratap Das I also know as DevDas";
//  console.log(extrackingData.charAt(1));
//  //Return ACSII Code
//  console.log(extrackingData.charCodeAt(1));


// console.log('--Practice time -> return unicode of last character in a string--');

// let unicodeStr = "Hello World";
// let lastChar = unicodeStr.length -1;
// console.log(lastChar);
// console.log(unicodeStr.charCodeAt(lastChar));




//  let upAndLowCase = "Hi, I am Pratap Das I also know as DevDas";
//  console.log(upAndLowCase.toUpperCase());
//  console.log(upAndLowCase.toLowerCase());



//  let myFName = 'Pratap';
//  let myLName = 'Das';
//  console.log(myFName + myLName);
//  console.log(`${myFName} ${myLName}`);
//  console.log(myFName.concat(myLName));
//  console.log(myFName.concat(" ", myLName));



// let myTrim = "   Hello World          ";
// console.log(myTrim.trim());

// //Convert String to Array
// let convertStringToArray = "a, b, c, d, e, f, g, h, i";
// console.log(convertStringToArray.split(","));
// console.log(convertStringToArray.split(" "));
// console.log(convertStringToArray.split("|"));



/*8. ------Date and Time-------*/
// console.log("---Date and Time------");

// let currentDate = new Date();
// console.log(currentDate);

// console.log(new Date().toLocaleString());
// console.log(new Date().toString());

// //Return MiliSeceond from 1 january 1970
// console.log(Date.now());


// let newDate = new Date(2021, 9, 5, 19, 36, 0);
// console.log(newDate.toLocaleString());


// let currDate = new Date();
// console.log(currDate.toLocaleString());
// console.log(currDate.getFullYear());
// console.log(currDate.getMonth());
// console.log(currDate.getDate());
// console.log(currDate.getDay());

// console.log(currDate.setFullYear(2021));
// console.log(currDate.setFullYear(2022, 10, 5));
// console.log(currDate.setMonth(10));
// console.log(currDate.setDate(5));
// console.log(currDate.toLocaleString());


// let currTime = new Date();
// console.log(currTime.getTime());
// console.log(currTime.getHours());
// console.log(currTime.getMinutes());
// console.log(currTime.getSeconds());
// console.log(currTime.getMilliseconds());

// // console.log(currTime.setTime());
// console.log(currTime.setHours(7));
// console.log(currTime.setMinutes(16));
// console.log(currTime.setSeconds(36));
// console.log(currTime.setMilliseconds(56));


/* 9.-------Math Object------*/
// console.log("-------Math Object----")

// console.log(Math.PI);

// let num = 10.160;
// console.log(Math.round(num));

// console.log(Math.pow(2, 3));
// console.log(2**3);

// console.log(Math.sqrt(81));
// console.log(Math.sqrt(10));

// console.log(Math.abs(-55));
// console.log(Math.abs(-55.5));
// console.log(Math.abs(-955));
// console.log(Math.abs(10-19));

// console.log(Math.ceil(4.4));
// console.log(Math.ceil(99.1));
// console.log(Math.round(99.1));

// console.log(Math.floor(4.7));
// console.log(Math.floor(99.1));

// console.log(Math.min(10, 36, -8, 91, -200, 700, 16, 19));
// console.log(Math.max(10, 16, 19, 36, -8, 91, -200, 700, 16, 19));

// console.log(Math.random());
// console.log(Math.random()+10);
// console.log(Math.floor(Math.random()));
// //only Desimal number generate 0 -> 10
// console.log(Math.floor(Math.random()*10));
// //Return number before point(.)
// console.log(Math.trunc(4.6));
// console.log(Math.trunc(-99.1));



/*------Dom-------*/
// console.log('------------DOM--BOM--------');

//Dom -> Set
// let myElement = document;

// console.log(myElement);
// console.log(myElement.all);
// console.log(myElement.all[2]);
// console.log(myElement.head);
// console.log(myElement.title);
// console.log(myElement.body);
// console.log(myElement.links);
// console.log(myElement.images);
// console.log(myElement.doctype);
// console.log(myElement.URL);
// console.log(myElement.domain);
// console.log(myElement.baseURI);

// console.log(myElement.getElementById("header"));
// console.log(myElement.getElementsByClassName('foter'));
// console.log(myElement.getElementsByClassName('foter')[1]);
// console.log(myElement.getElementsByClassName('myli'));
// console.log(myElement.getElementsByTagName('div'));

//Dom value -> Get
// let getDom;
// getDom = document.getElementById('h1').innerText;
// console.log(getDom);

// getDom = document.getElementById('hdr').innerHTML;
// console.log(getDom);

// getDom = document.getElementById('ftr').getAttribute('class');
// console.log(getDom);

// getDom = document.getElementById("ides").attributes;
// console.log(getDom);


//Dom value -> set
// let setDom;
// document.getElementById('hdr').innerText = 'New Header with JS';
// setDom = document.getElementById('hdr').innerHTML;
// console.log(setDom);

// document.getElementById('ftr').setAttribute('class', 'newFTR')
// setDom = document.getElementById('ftr').getAttribute('class');
// console.log(setDom);

//Query Selector
// let qSelector;
// document.querySelector('#ftr').innerHTML = 'New Footer name change';
// qSelector = document.querySelector('#ftr').getAttribute('class');
// console.log(qSelector);

// qSelector = document.querySelectorAll('.myli');
// console.log(qSelector);

// qSelector = document.querySelectorAll('#ftr');
// console.log(qSelector);

// qSelector = document.querySelectorAll('ul');
// console.log(qSelector);

// qSelector = document.querySelectorAll('ul')[0].innerHTML;
// console.log(qSelector);

// //CSS with DOM
// let csStyle;
// csStyle = document.querySelector('#hdr').style.border;
// console.log(csStyle);

// csStyle = document.querySelector('#ftr').style.backgroundColor = 'cyan';
// console.log(csStyle);

// csStyle = document.querySelector('#h1').style.color= 'blue';
// console.log(csStyle);

// //Add Remove class with DOM
// csStyle = document.querySelector('#h1').className="h1Class h1clas";
// console.log(csStyle);

// csStyle = document.querySelector('#h1').classList.add("abc", "xyz");
// console.log(csStyle);

// csStyle = document.querySelector('#h1').classList.remove("efg");
// console.log(csStyle);


/*------Events in JS with DOM-------*/
// console.log('-------Events in JS----');
 
// document.getElementById('hdr').onclick=funName;
// function funName(){
// 	document.getElementById('hdr').style.backgroundColor = 'lightgreen';
// }


// document.getElementById('ul').onmouseenter=funNam;
// function funNam(){
// 	document.getElementById('ul').style.backgroundColor = 'lightpink';
// }


// document.getElementById('mymain').addEventListener("click", funNames);
// function funNames(){
// 	document.getElementById('mymain').style.backgroundColor = 'orange';
// }



// // document.querySelector('#inner').addEventListener('click', function(){
// // 	alert('inner Div');
// // })
// // document.querySelector('#outer').addEventListener('click', function(){
// // 	alert('outer Div');
// // })


// document.querySelector('#inner').addEventListener('click', function(){
// 	alert('inner Div');
// }, true);
// document.querySelector('#outer').addEventListener('click', function(){
// 	alert('outer Div');
// }, true);


// let clist;
// document.getElementById('mymain').addEventListener("click", funNames);
//  function funNames(){
//  	document.getElementById('mymain').classList.add('addMainClass');
//  	document.getElementById('mymain').classList.remove('mClass');
//  clist = document.getElementById('mymain').classList.length;
//  console.log(clist);

//  }

// let togle;
// document.getElementById('mymain').addEventListener("click", funNames);
//  function funNames(){
// togle = document.getElementById('mymain').classList.toggle('toggleClassAddRemove');
//  console.log(togle);
//  }


//  let contain;
// document.getElementById('mymain').addEventListener("click", funNames);
//  function funNames(){
// contain = document.getElementById('mymain').classList.contains('mClass');
//  console.log(contain);
//  }


//DOM Traversal method
// document.getElementById('iner').parentElement.style.backgroundColor="red";
// let aTraversal=document.getElementById('iner').parentElement;
// console.log(aTraversal);
// let aTravrsal=document.getElementById('iner').parentNode;
// console.log(aTravrsal);


// let childTraversal=document.getElementById('oter').children;
// console.log(childTraversal);

// document.getElementById('iner').children[1].style.backgroundColor="lightgreen";
// childTraversal=document.getElementById('oter').children[1];
// console.log(childTraversal);
// childTraversal=document.getElementById('oter').childNodes;
// console.log(childTraversal);

// document.getElementById('iner').firstElementChild.style.backgroundColor="blue";
// childTraversal=document.getElementById('iner').firstElementChild;
// console.log(childTraversal);

// document.getElementById('oter').lastElementChild.style.backgroundColor="lightblue";
// childTraversal=document.getElementById('oter').lastElementChild;
// console.log(childTraversal);


// childTraversal=document.getElementById('iner').firstChild;
// console.log(childTraversal);

// childTraversal=document.getElementById('iner').lastChild;
// console.log(childTraversal);


// let traversalSibling;
// traversalSibling=document.getElementById('child-c').nextElementSibling.style.backgroundColor="black";
// traversalSibling=document.getElementById('child-c').nextElementSibling;
// console.log(traversalSibling);
// traversalSibling=document.getElementById('child-c').previousElementSibling;
// console.log(traversalSibling);



//Create method in DOM js

// let createTagByElement;
// createTagByElement=document.createElement('p');
// console.log(createTagByElement);

// createTagByElement=document.createElement('h2');
// console.log(createTagByElement);

// let createTextNote;
// createTextNote=document.createTextNode("Hi, this is just text create by JS");
// console.log(createTextNote);

// let createComments;
// createComments=document.createComment('Hi, this is comment by JS');
// console.log(createComments);


//Append method in DOM js

// let createAppend;
//  createAppend=document.createElement('h2');
//  console.log(createAppend);
//  let newTexts;
//  newTexts=document.createTextNode("Hi, this is just text create by JS");
//  console.log(newTexts);
// createAppend.appendChild(newTexts);
// console.log(newTexts);
// console.log(createAppend);
// document.getElementById('test-append').appendChild(createAppend);

// let appendFirst;
// appendFirst=document.getElementById('test-append');
// appendFirst.insertBefore(createAppend,appendFirst.childNodes[0]);

// let newElement;
// newElement=document.createElement('h2');
// let newTexts;
// newTexts=document.createTextNode('This is just text by DOM JS');
// newElement.appendChild(newTexts);
// let target=document.getElementById('test-append');
// target.insertAdjacentElement('beforebegin', newElement);

// target.insertAdjacentElement('afterbegin', newElement);


// let target=document.getElementById('test-append');
// let newElement="<h2>Add new text element</h2>";
// // target.insertAdjacentHTML('afterbegin', newElement);
// // target.insertAdjacentHTML('afterend', newElement);
//    target.insertAdjacentHTML('beforeend', newElement);


// let newTexts=document.createTextNode("Replace with new text");
// let target=document.getElementById('lists');
// let oldText = target.children[0];
// console.log(oldText);
// target.replaceChild(newTexts, oldText);
// console.log(oldText);

// oldText = target.children[0];
// target.removeChild(oldText);
// console.log(oldText);


//Clone in DOM JS

// let myClone=document.getElementById('fal').children[0];
// let copyElement = myClone.cloneNode(true);
// console.log(copyElement);
// document.getElementById('sabji').appendChild(copyElement);
// console.log(copyElement);

//hasAttribute in DOM JS
// let target=document.getElementById('fal');
// let myFind=target.hasAttribute('class');
// console.log(myFind);

//isEqualNode() in DOM JS

// let target1=document.getElementById('fal').firstElementChild;
// let target2=document.getElementById('sabji').children[2];
// let myEqual=target1.isEqualNode(target2);
// console.log(myEqual);


//Form Event

// function myFocus(element){
// 	// document.getElementById("form-name").style.backgroundColor ="lime";
// 	element.style.backgroundColor ="lime";
// }

// function myBlur(blr){
// 	blr.style.backgroundColor="";
// }
// function inputFun(inEle){
// 	let x=inEle.value;
// 	document.getElementById("form-text").innerHTML = x;
// }
// function changeFun(chang){
// 	let ch=chang.value;
// 	document.getElementById("form-text").innerHTML = ch;
// }
// function slectFun(select){
// 	let sl=select.value;
// 	console.log("You seleted some text");
// }
// function submitFun(){
// 	let subfun=document.getElementById("form-name").value;
// 	alert(`Hello ${subfun}`);
// 	// console.log("You succefully submited form.");
// 	alert("You succefully submited form.");
// }
// function invalidFun(){
// 	alert("Please fill the valid number");
// }


// var a = 0;
// setInterval(Anim, 1000);
// function Anim(){
// 	a = a + 10;
// 	console.log(a);
// 	console.log("Hello");
// }


// var id = setTimeout(amin, 5000);
// function amin(){
// var docTarget = document.getElementById("intrval");
// docTarget.style.width = "200px";
// }
// function stopAni(){
// 	clearTimeout(id);
// }







// console.log("----------BOM--------------");


// let innerHeight = window.innerHeight;
// console.log("inner Height: " + innerHeight);
// let outerHeight = window.outerHeight;
// console.log("outer Height: " + outerHeight);




/*------OOP-------*/
// console.log("----------OOP in JS-----------")
// let BioData = {
// 	myName : 'Pratap Das',
// 	myAge : 26,
// 	myAdd : 'India',
// 	getData : function(){
// 		console.log(`My name is ${BioData.myName} and my age is ${BioData.myAge}`);
// 	}
// } 
// console.log(BioData.myName);
// console.log(BioData.getData());


/*-----Obeject in another object--------*/
// console.log("-----Obeject in another object--------");
// let bio_Data = {
// 	myName : {
// 		realName : 'Pratap Das',
// 		website : "nedcod.com"
// 	},
// 	myAge : 26,
// 	myAdd : 'India',
// 	getData : function(){
// 		console.log(`My name is ${bio_Data.myName.realName} and my site is ${bio_Data.myName.website}`);
// 	}
// } 
// console.log(bio_Data.myName.realName);
// console.log(bio_Data.getData());

/*-----This Obeject--------*/
// console.log('-----This in object--------');

// console.log(this);
// console.log(this.alert('Awsome'));


// function myName(){
// 	console.log(this);
// }
// myName();


// var my_Nam = "Pratap";
// function my_Names(){
// 	console.log(this.my_Nam);
// }
// my_Names();


// const obj = {
// 	myAge : 26,
// 	myName() {
// 		console.log(this.myAge);
// 	}
// }
// obj.myName();


// const obj = {
// 	myAge : 26,
// 	myName : () =>{
// 		console.log(this);
// 	}
// }
// obj.myName();


// let bioData = {
// 	myName : {
// 		realName : "Pratap Das",
// 		website: "NedCod.com"
// 	},
// 	myAge : 26,
// 	getData(){
// 		console.log(`my name is ${this.myName.realName} and my website is ${this.myName.website}`);
// 	}
// }
// bioData.getData();

/*------Array Distructuring--- in ES6----*/
// console.log('-----Array Distructuring------');
// const  myBioData = ['Pratap', 'Das', 26];

// let firstName = myBioData[0];
// let lastName = myBioData[1];
// let myAge = myBioData[2];

// console.log(firstName);
// console.log(lastName);
// console.log(myAge);

/*--------or another way*/

// const  myBioData = ['Pratap', 'Das', 26];

//  let firstName = myBioData[0];
//  let lastName = myBioData[1];
//  let myAge = myBioData[2];

// let [firstName, lastName, degree] = BioData;
// console.log(firstName);
// console.log(lastName);
// console.log(degree);



/*------Object Distructuring-------*/
// console.log('-----Object Distructuring------');
// const bioData = {
// 	firstName : "Pratap",
// 	lastName : "Das",
// 	degree : "BTech"
// }
// let firstName = bioData.firstName;
// console.log(firstName);
// let lastName = bioData.lastName;
// console.log(lastName);
// let degree = bioData.degree;
// console.log(degree);

/*--------or another way*/
// const bioData = {
// 	firstName : "Pratap",
// 	lastName : "Das",
// 	degree : "BTech"
// }
// let {firstName, lastName, degree, age=26} = bioData;
// console.log(firstName);
// console.log(lastName);
// console.log(degree);
// console.log(age);

/*-----Object Properties--------*/
// console.log('-----Object Properties-------');

// let myName = 'Pratap';
// const myBio = {
// 	// myName : "Hello....?",
// 	// 26 : " is my age"

// 	//or

// 	[myName] : "Hello....?",
// 	[19+7] : " is my age"
// }
// console.log(myBio);



/*------Spread Operator-------*/
// console.log('------Spread Operator-------');

// const colors = ['red', 'green', 'blue', 'white'];

// const myColors = ['red', 'green', 'blue', 'white', 'yellow', 'black'];

// const myFavColors = [ ...colors, 'black', 'orange'];
// console.log(myFavColors);



/*------Array prototype.include in ES7-------*/
// console.log('--------Array prototype.include in ES7---------');
// let colors = ['red', 'green', 'blue', 'white', 'yellow', 'black'];
// const isPresent = colors.includes('red');
// console.log(isPresent);

/*------Exponentiation operator(**)-------*/
// console.log('-------Exponentiation operator----------');
// console.log(2**3);

/*------String padding, Object.values(), Object.entries() in ES8-------*/
// console.log('----String padding, Object.values(), Object.entries() in ES8-------')
// const message = 'my name is Pratap';
// console.log(message);
// console.log(message.padStart(5));
// console.log(message.padEnd(10));


// const person = {name: "Pratap", age : 26};
// console.log(Object.values(person));
// console.log(Object.entries(person));

// const secondPerson = {...person};
// console.log(secondPerson);

/*-----Array.prototype.(flat,flatMap)--------*/
// console.log('----Array.prototype.(flat,flatMap)------');

// const arr = [
// ['zone_1', 'zone_2'],
// ['zone_3', 'zone_4'],
// ['zone_5', 'zone_6'],
// ['zone_7', ['zone_8', 'zone_9']],
// ];

// console.log(arr.flat());
// console.log(arr.flat(Infinity));



/*------ES 2020-------*/
// console.log('--------ES 2020--------');
// let oldNum = Number.MAX_SAFE_INTEGER;
// console.log(oldNum);
// console.log(oldNum + 10);

// //Work with big number
// const newNum = 9007199254740991n + 16n;
// console.log(newNum);
// console.log(typeof newNum);



/*------Advance JS-------*/
// console.log('---------Advance JS------');
// console.log('-----Event Propagation(Event bubbling and event capturing)----');
// //see tutorial.html line: 286

// console.log('---------Higherorder function & callback function------');
// Higherorder function & callback function
// const add = (a,b)=>{
// 	return (a+b);
// }
// const minus = (a,b) =>{
// 	return (a-b);
// }
// const multiply = (a,b) =>{
// 	return (a*b);
// }
// const division = (a,b)=>{
// 	return (a/b);
// }
// const calculator = (num1, num2, operator) =>{
// 	return operator(num1, num2);
// }
// console.log(calculator(5,2,multiply));


/*------Asynchronous-------*/
// console.log('-----Asynchronous------');
// //Before Asynchronous name was Synchronous
// const fun2 = () =>{
// 	setTimeout(() =>{
// 		console.log('Function 2 is called');
// 	}, 2000);
// } 
// const fun1 = ()=>{
// 	console.log('Function 1 is called');
// 	fun2();
// 	console.log('Function 1 is called again');
// }
// fun1();


//Hoisting
// console.log(myName);
// var myName; //let const keyword don't used
// myName = 'Pratap Das';

// //Scope chain and Laxical scoping
// let a = 'Hello guys....'; //Global scope
// const first=()=>{
// 	let b ='How are you ?';
// 	const second = ()=>{
// 		let c = 'Hi, I am fine thank you....';
// 	    console.log(a+b+c);
// 	}
// 	second();
// 	console.log(a+b+c); //c can't see
// }
// first();


/*-------Closures------*/

// console.log('-----Closures-----');
// const outerFun = (a) =>{
// 	let b = 10;
// 	const innerFun = () =>{
// 		let sum = a+b;
// 		console.log(`The sum of the two no is ${sum}`);
// 	}
// 	innerFun();
// }
// outerFun(6);


/*------Synchronous-------*/
// console.log('------Synchronous------');
// //After ajax, name was Asynchronous
// const fun2 = () =>{
// 	console.log('Function 2 is called');
// }
// const fun1 = () =>{
// 	console.log('Function 1 is called');
// 	fun2();
// 	console.log('function 1 is called again');
// }
// fun1();


/*-------Event loop------*/
// console.log('------Event loop-----');

// const fun2 = () =>{
// 	setTimeout(() =>{
// 		console.log('Function 2 is called');
// 	}, 4000);
// 	//fun2 wait and this procesed is called event loop
// } 
// const fun1 = ()=>{
// 	console.log('Function 1 is called');
// 	fun2();
// 	console.log('Function 1 is called again');
// }
// fun1();


/*------Function Carring-------*/
// console.log('-----Function Carring-----');

// function sum(num1){
// 	console.log(num1);
// 	return function(num2){
// 		console.log(num1, num2);
// 		return function(num3){
// 			console.log(num1, num2, num3);
// 			console.log(num1 + num2 + num3);
// 		}
// 	}
// }
// sum(5)(3)(8);


/*-----Call back hell--------*/
// console.log('----Call back hell-----');

// setTimeout(()=>{
// 	console.log('1 works is done');
// 	setTimeout(()=>{
// 		console.log('2 works is done');
// 		setTimeout(()=>{
// 			console.log('3 works is done');
// 			setTimeout(()=>{
// 				console.log('4 works is done');
// 				setTimeout(()=>{
// 					console.log('5 works is done');
// 				}, 2000)
// 			}, 2000)
// 		}, 2000)
// 	}, 2000)
// }, 2000)



/*------JSON-------*/
console.log('--------JSON--------');
var my_object = { key_1: "some text", key_2: true, key_3: 5};
var object_as_string = JSON.stringify(my_object);
console.log(object_as_string);
typeof(object_as_string);


console.log('---JSON to String-----');
var object_as_string_as_object = JSON.parse(object_as_string);
typeof(object_as_string_as_object);
/*-------------*/
/*-------------*/
/*-------------*/
/*-------------*/
/*-------------*/