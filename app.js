// var age = 26;
//  if(age != 26)
//  { 
//  alert('This is true condition');
//  } 
//  else 
//  { 
//  alert('This is false condition'); 
//  }


// var username = 'admin';
//  var password = 12345;
 
//  if(username == 'admin' && password == 12345)
//  {
//  alert('Login Successfully.'); 
//  }
//  else
//  {
//  alert('Invalid username or password.');
//  } 

// var weatherDegree = 15;
//  if(!(weatherDegree < 10))
//  {
//  alert('Normal Weather');
// }
// else
// {
// alert('Winter Season'); 
// }

// var i;

// for(var i=0; i<=10; i++){
//   console.log(i)
// }


// var i;

// for(var i=10; i<11; --i){
//   console.log(i)
// }

// var i;

// for(var i=10; i>=1; i--){
//     console.log(i)
// }

// var i;

// for(var i=1; i<=12; i++){
//     console.log("2 X " + i + "=" + 2 * i)
// }

// var i;

// for(var i=1; i<=12; i++){
//     console.log("4 X " + i + "=" + 4 * i)
// }

// var i;
//  while(i <= 10) {
//  document.write(i + '<br/>'); 
//  i++;
//  }

// var i = 10;
//  while(i >= 1) {
//  document.write(i + '<br/>'); 
//  i--; }

// var i = 1;
//  do{
//  document.write(i + '<br/>');
//  i++;
//  } while(i >= 10);

// for(i=1; i <= 10; i++) 
//     {
//     document.write(i + '<br/>');
//     if(i == 5) {
//     break;
//     }
//     }
   

// var i;
//  for(i=1; i <= 10; i++)
//  {
//  document.write(i + '<br/>');
//  if(i == 5)
//  {
//  document.write('JavaScript' + '<br/>');
//  continue;
//  }
// }

// var things = new 
// Array("chair","table","door","window","wall");
//  for(var i=0; i<things.length; i++) 
//  {
//  document.write(things[i] + "<br/>");
//  }

// var things = new 
// Array("chair","table","door","apple","wall");
//  things.sort();
//  for(var i=0; i<things.length; i++) 
//  {
//  document.write(things[i] + `<br/>` + " ");
//  }

// var things = new 
// Array("chair","table","door","apple","wall");
//  things.splice(2);
 
//  for(var i=0; i<things.length; i++)
//  { document.write(things[i] + " "); }

// var ans = prompt("What is your name?" , "");
//  if(ans)
//  { alert("My name is " + ans); }
//  else
//  { alert("You refused to answer"); }


// var things = new 
// Array("chair","table","door","window","wall");
//  var total = things.join("-");
//  document.write(total);





// var heading = 
// document.getElementById('myheading').innerHTML;
//  alert(heading);


// var h1Element = document.getElementById('myheading');
//  h1Element.style.color = 'red';

// var tdElement = document.getElementsByTagName('td');
//  var tdLength = tdElement.length;
//  for(var i = 0; i < tdLength; i++)
//  {
//     tdElement[i].style.color = 'gray';
// }


// var pElement = document.getElementById('mypara');
//  pElement.setAttribute('align', 'center');


// var pElement = document.getElementById('mypara');
//  alert(pElement.getAttribute('align'));

// var pElement = document.getElementById('mypara');
//  alert('Attribute is going to remove');
//  pElement.removeAttribute('align');

// var newElem = document.createElement('h1');
//  var newText = document.createTextNode('This is my heading');
//  newElem.appendChild(newText);
//  document.body.appendChild(newElem);


// var d = new Date();
//  var mytime = d.getHours();
//  document.write(mytime);

// var d = new Date();
//  var myday = d.getDay();
//  document.write(myday);

// var d = new Date();
// var mydate = d.toDateString();
// document.write(mydate);

// var d = new Date();
//  var mydate = d.toLocaleDateString();
//  document.write(mydate);


//document.write(navigator.appName);

//document.write(navigator.appVersion)
 
// var msg = "This is";
//  msg = msg + " String Object";
//  msg = msg + " in JavaScript.";
//  document.write(msg);

// var msg = "This is";
//  msg += " String Object";
//  msg += " in JavaScript.";
//  document.write(msg);


// var msg = "This is String";
//  document.write(msg.charCodeAt(0));

//document.write(eval("2+5"));

// const myname = 'JavaScript';
//  myname = 'Programing';
//  document.write(myname);


// function changeHeading()
// {
//  document.getElementById('myheading').innerHTML = 
// 'Change Heading';
// }

// function changeHeading()
//  {
//  document.getElementById('myheading').innerHTML = 
// 'Change Heading';
//  }
//  function firstHeading()
//  {
//  document.getElementById('myheading').innerHTML =
//  'This is heading1';
//  }

//window.alert('Welcome to window object');

// function website()
//  {
//  window.location = 'http://www.google.com';
//  }


// function umair(nam){
//     console.log(nam)
// }
// var nam = prompt("enter your name")
// umair(nam)

// function umair(nam) {

//     console.log(nam)

//     umair(prompt("enter your name"))
//       var nam = umair("")

    //   function test(name) {
    //       var userName = name;
    //       console.log("inside Name -->", userName);
    //     }
        
    //     test(prompt(""));
        
    //     var name = "aslam";
        
    //     console.log("outer name-->", name);


    // if(cityName === "karachi"){
//   alert("welcome to the city of lights")
// }else{
//   alert("wrong city entered")
// }
// var gender = prompt("enter your gender")
// if(gender === "male"){
// alert("Good Morning Sir")
// }else(alert("Good Morning Madam"))
// var signalColor = prompt("enter color name to know alerts")
// if(signalColor === "red"){
//   alert("Must Stop")
// }
// if(signalColor === "yellow"){
//   alert("Ready to Move")
// }

// if(signalColor === "green"){
//   alert("move now")
// }

// var fuel = prompt("how many fuel left your vehicle in litres")
// if(fuel <= 0.25){
//   alert("“Please refill the fuel in your car”")
// }else{alert("dont Worry and go on")}

// var a = 4;
// if (++a === 5){
//   alert("given condition for variable a is true");
//   }
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }else{alert("given condition for variable b is false");
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals " + totalCost);
// }
// if("car" < "cat"){
//   alert("car is smaller than cat");
//   }


// function tellTime(greet){
// // var greet = "hello world"
// alert(greet)
// //     var now = new Date();
// // var theHr = now.getHours();
// // var theMin = now.getMinutes();
// // alert("time: " + theHr + ":" + theMin )

// }
// tellTime(prompt("which word would you like to greet"))

// var month = "March";
// function showMessage(m,string,num){
//     alert(m+string+num)
// }

// showMessage("february ","winter is going off", 2)
// var orderTot;
// var merchTot = 75;
//  if (merchTot >= 100) {
//  orderTot = merchTot;
//  }
//  else if (merchTot < 50.01) {
//  orderTot = merchTot + 5;
//  }
//  else {
//  orderTot = merchTot + 5 + (.03 * (merchTot - 50));
//  }
//  console.log(orderTot)


// parameter first take value from arguement then function work and return back the answere to parameter which is called
//     function calcTot(merchTot) {
//   var neww = 25
//   merchTot = merchTot + neww
//   return merchTot
// //   alert(merchTot)
// }
//   var totalToCharge = calcTot(50.99);
// alert(totalToCharge)

// function myTest(check){
//     var neww = 50
//     check = check + neww
//     return check
// }
// var total = myTest(+prompt("please enter a number"))
// alert(total)

// var input = document.getElementById("input")
// function plus(plusValue){
//     var screen = screen = input.value += plusValue.slice(0,1)
//     if(screen.indexOf("+") !== -1){
//        var neww = input.value.slice(0,1)
//        console.log(neww)

//     }
//     console.log(screen.slice(0,1))
//     return screen
// }
// function mul(mValue){
//     var screen = screen = input.value += mValue.slice(0,1)
//     if(screen.indexOf("*") !== -1){
//        var neww1 = input.value.slice(0,1)
//        console.log(neww1)


// function neww(Value){
//     var screen = screen = input.value += Value.slice(0,1)
//     if(screen.indexOf("2") !== -1){
//        var neww2 = input.value.slice(0,1)
//        console.log(neww2)

//     }
//     // console.log(screen.slice(0,1))
//     return screen
// }
// function equal(evalue){
//     var total = eval(input.value)
//     input.value = total
//     console.log(total)
// }
// function clear(cValue){
//     var screen = screen = input.value += cValue.slice(0,1)
//  if(screen.indexOf("c") !== -1){
//     var clear = input.value = ""
//     console.log(clear)
//  }

// }

// var num1 = +prompt("enter first number")
// var operator = prompt("enter operator")
// var num2 = +prompt("enter second number")
// if(operator === "+"){
//     alert(num1 + num2)
// }
// else if(operator === "-"){
//     alert(num1 - num2)
// }
// else if(operator === "*"){
//     alert(num1 * num2)
// }
// else if(operator === "/"){
//     alert(num1 / num2)
// }
// else{
//     alert("enter valid number/operator")
// }
// // =====

// *************** Solve BAsic Questions ***********

// var string = "ahsan"
// string = string.split("")
// var reverser = string.reverse("")
// var join = reverser.join("");
//     console.log(join);
// var string =  "kayak";
// var revString = string.split("").reverse("").join("")
// var myString = string
// if(myString === revString){
//     console.log("Yes it is palindrome")
// }
// else{console.log("no it is not palindrome")}

// var arr = [123,34343,3434343,990078501];
// var number = ""
// for( var i = 0 ;i < arr.length.toString(); i++ ){
//     if(arr[i].toString().length > number.toString().length){
//         number = arr[i]
//     }
// }
// console.log(number)
// let str = 'hello world';
// let result = '';
// for (let i = 0; i < str.length; i++) {
//   if (result.indexOf(str[i]) === -1) {
//     result += str[i];
//   }
// }
// console.log(result); //

// var search = prompt("enter word to search");
// if(search >= "a" && search <= "z"){
//     console.log(search.charCodeAt() +  " " + "lower Case")
// }
// else if(search >= "A" && search  <= "Z"){
//     console.log(search.charCodeAt() + " " + "Upper Case")
// }
// else  if(search >= "0" && search <= "9" ){
//     console.log(search.charCodeAt() + " " + "is number")
// }
// else{
//     console.log(search.charCodeAt() + " " + "symbols")
// }


// var text = "hi this is Umair from karachi pakistan"
// var check = false
// var search = prompt("enter word to search");
// var chang = prompt("which word would you like to change against " + search)
// for(i = 0 ; i < text.length; i++){
//    if(text.slice(i , i + search.length) == search){
//     check = true;
//     var neww = text.replace(search, chang)
//     ret = neww
//     console.log(ret)
//    }
// }
// if(check == false){
//     console.log("search not found")
// }

// var text = "hi this is umair aslam umair";
// var search = prompt("which word do you like to search");
// var chang = prompt("which word would you like to change against " + search);
// var check = false;
// for(i = 0; i < text.length; i++){
//    if(text.slice(i , i + search.length) == search){
//     check = true
//     var neww = text.replaceAll(search , chang)
//     console.log(neww)
//    }

// }
// var text = ["hi this is umair aslam from karachi","umair"]
// var search = prompt("search word")
// var check = false
// for(i = 0; i < text.length; i++){
//    text = text[i]
//    for(j = 0; j < text.length; j++ ) {
//       check = true
//       text = text.toString()
//       for(k = 0 ;k < text.length;k++){
//          if(text.slice(k,k + search.length) === search){
//             check = true
//             var chang = prompt("which word would you like to change against " + " " + search)
//             text = text.replace(search , chang)
//             console.log(text)
//          }
//       }
// }
// }



// var  ism = "umair"
// var neww = ism.slice(0,1)
// neww = neww.toUpperCase();
// var fName = neww + ism.slice(1)
// console.log(fName)

// var num = +prompt("enter your number ");
// if(num % 3 === 0  && num % 5 === 0 ){
//    console.log("number is divisble with 3 and five")
// }
// else{
//    console.log("this number is not divisble with 3 and 5");
// }

// console.log(neww)


// var  ism = "umair"
// var neww = ism.slice(0,1)
// neww = neww.toUpperCase();
// var fName = neww + ism.slice(1)
// console.log(fName)

// var num = +prompt("enter your number ");
// if(num % 3 === 0  && num % 5 === 0 ){
//    console.log("number is divisble with 3 and five")
// }
// else{
//    console.log("this number is not divisble with 3 and 5");
// }

// console.log(neww)

// var fName = prompt("first name");
// var lName = prompt("last name");
// document.write(`first name is ${fName} </br> Last Name is ${lName} </br> again name is ${fName} </br> This is javascript Mr. ${fName} ${lName}`)

// var race = ["earth","race"];
// var race = ["race", "earth"];
// for(i = race.length -1 ; i > -1 ; i--) {
//     race = race.reverse()
//     console.log("yes it is anagram"+ " " + race[i])
//     if(race[i]  == "care"){
//     }
// }

// for (i = 1; i <= 5; i++) {
//   for (j = i; j >= 1; j--) {
//     document.write(j);
//   }
//   document.write("</br>");
// }


// var arr = ["civic","madam","radar"];
// var user = prompt("enter to search palindrome words");
// var check = false
// for(i = 0;i < arr.length;i++){
// if(user === arr[i]){
//   check = true
//   document.write(`yes ${user} is palindrome`)
// }
// }
// if(check === false){
//   document.write(`no ${user} is not palindrome`)
// }

// var arr= ["Mehran","Suzuki","Honda"];
// var user = prompt("enter to search car").toLowerCase()
// var nuser = user
// nuser = nuser.slice(0,1).toUpperCase() + nuser.slice(1).toLowerCase()
// console.log(nuser)
// var check = false
// for(i = 0 ; i < arr.length;i++){
//   if(nuser === arr[i]){
//     check = true
//     document.write(`found ${nuser}`)
//   }
// }
// if(check === false){
//   document.write(`${nuser} Not found`)
// }

// var arr=["mr"];
// var arr2 = ["umair","aslam,","balllllll"]
// for(i = 0 ; i <arr.length;i++){
//     for(j = 0; j< arr2.length;j++){
//         document.write(arr[i] + " " + arr2[j] +"<br>")
//     }
// }

// for(i = 1; i <= 100; i= i + 10){
//     for(j = i; j< i+10;j++){
//         document.write(j + " ")
//     }
//     document.write("<br>")
// }

// var arr = [3,5,4,2,7,9,11,44]
// var min = arr[0]
// for(i = 0; i < arr.length;i++){
//     if(arr[i] < min){
//         min = arr[i]
//     }
//     document.write(min+"<br>");
// }

// var text = "hi this is umair aslam"
// var check = false
// for(i = 0; i <  text.length; i++ ){
//      if(text.slice(i,i + "umair".length) === "umair"){
//           check = true
//           document.write(`found umair <br>`)
//           neww = text.replace("umair","umer".toUpperCase())
//           document.write(neww)

//      }
// }// var days = prompt("enter day you want to greetings");
// switch (days) {
//   case "monday":
//     document.write("ohh its is work day");
//     break;
//   case "tuesday":
//     document.write(`ohh this is boring day`);
//     break;
//   case "wednesday":
//     document.write(`its a good day, keep going!`);
//     break;
//     case "thursday":
//     document.write(`oyee jumeraat ayega`)
//     break
//     case "friday":
//         document.write(`Today is Good Prayday`)
//         break
//         case "saturday":
//         document.write(`Its Weekend Enjoy your self`)
//         break
//     case "sunday":
//         document.write(`it is funday yahooooo`)
//         break
//     default:
//         document.write(`enter days names only`)
//     }
// switch(days){
//     default:
//         document.write(`enter days names only`);
// }

// var arr = ["civic","madam","radar","level"];
// var user = prompt("enter to search palindrome words");
// var check = false
// for(i = 0 ; i < arr.length ;i++){
//     if(user === arr[i]){
//         check = true
//         document.write(`Yes ${user} Is Palindrome`)
//     }
// }
// if(check === false){
//     document.write(`no ${user} is not palindrom`)
// }

// var str = "5+5-"
// var last = str[str.length -1];
// var arr = ["+","-","/"]
// if(arr.indexOf(last) !== -1){
//     console.log("yes it is in")
// }

// var user = prompt("enter word to search palindrome");
// var arr = [];
// for (i = user.length - 1; i >= 0; i--) {
//   arr += user[i];
// }
// if (user == arr) {
//   document.write("yes it is palindrome");
// }

// var myarr = [3,2,5,6,7,11]
// var min = myarr[0]
// for(i = 0 ; i < myarr.length ; i++){
//     if(myarr[i] > min){
//         min = myarr[i]
//     }
// }
// console.log(min)

// var arr = [1,2,3,4,6,7,8,9,10]
// for(var i = 0; i < arr.length;i++){
// if(arr[i +1] - arr[i] === 2){
//     console.log(arr[i]+1)
// }
// }


// var num = [1,2,3,4,5,7,8,9,10]
// for(var i = 0 ; i < num.length; i++){

//     if(num[i + 1] - num[i] == 2){
//         console.log(num[i] + 1)
//     }
// }

// var user = prompt("enter word to search is it palindrome or not");
// var reverse = "";
// for (i = user.length - 1; i >= 0; i--) {
//     reverse += user[i];
// }
// if(reverse === user){
//     document.write(`yes it is palindrome`)
// }
// else{
//     document.write(`no this is not palindrome`)
// var arr = [5,2,6,9,11,25];
// var min = arr[0]
// for(var i = 0 ; i < arr.length ; i++){
//     if(arr[i] < min){
//         min = arr[i]
//     }
// }
// document.write(`${min} is minimist number`)


///// missing number /////
// var arr = [2, 3, 4, 8, 9, 11];
// for (var i = 0; i < arr.length; i++) {
//   let diff = arr[i + 1] - arr[i];
//   // debugger
//   console.log("miss-->", diff);
//   if (diff > 1) {
//     for (var j = 1; j < diff; j++) {
//       console.log("diff-->", arr[i] + j);
//     }
//   }
// }

// var miss = [2,5,6,7,8,9]
// for(i = 0; i < miss.length;i++){
// var diff = miss[i + 1] - miss[i] 
// console.log("differnce ===>" ,diff)
// if(diff > 1){
//   for(j = 1; j < diff;j++){
// //  console.log()                              
// var neww = [miss[i] + j]

// console.log(neww)
// }
// }
// }

// var missing = [2,4,5,6,7,8]
// for(var i = 0; i < missing.length; i++){
//   var diff = 
//   console.log("====>",diff)
//   if(missing[i + 1] - missing[i] === 2){
//   var result = missing[i] + 1 
// console.log("==== Miss ",result)
//   }
// } 

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }


// var arr = [1, 2, 3, 4, 5, 6, 7, 8];

// arr.forEach((v, i) => {
//   console.log(arr[i]);
// });

// var arr = ["umair", "aslam", "uzair"];
// arr[2] = [arr[0], (arr[0] = arr[2])][0];

// console.log(arr);

// var arr = ["umair", "aslam", "uzair"];
// [a, b, c] = arr;

// console.log(b);


// var arr = [11,13,14,15,20]
// var missing = []
// for(i = 0 ; i < arr.length; i++){
//  diff = arr[i + 1] - arr[i]
//  for(j = 1; j < diff; j++){
//     if(diff >1){  
//         missing.push(arr[i] + j)
//         arr.splice( i + j,0,arr[i] + j)
//     }
    
// }
// }
// // arr.splice(0,0,missing)
// // console.log(missing)
// console.log(arr)
// function submit(){
//     var username = document.getElementById("userName");
//     var email = document.getElementById("email");
//     console.log("USERNAME ==>",username.value)
//     console.log("EMAIL ==>",email.value)
//     if(username.value.trim() && email.value.trim()){
//     email.value = ""
//     username.value = ""}
//     else{alert(`Please enter value username and email`)}
// }

// var miss = [1,ne2,4,5,10]
// var missing = []
// for(i = 0; i < miss.length; i++){
//     var difference = miss[i + 1] - miss[i]
//     if(difference > 1){
//         for(j = 1; j < difference;j++){
//             missing.push(miss[i] + j)
//             miss.splice(i + j,0,miss[i] + j)
//             // console.log(miss[i] + j)
//         }
//     }
// }
// console.log("Miss ==>",miss)
// console.log("missing ==>",missing)


//Var vs Let vs Const;

// let a = "umair"

// a = "aslam"

// console.log(a)

// let or const is block level;

// if (true) {
//     let a = "umair"
// }

// console.log(a)

//var is function level

// if (true) {
//     var a = "umair"
// }

// console.log(a)

// Const aesi value hai jo kabi bi update na karen



// Array or object li value by reference save hoti hai

// const a = {}

// a.name = "umair"

// console.log(a)

// const se value updat nahi hoti error ata let se hoti hai 
// const a = {}

// a = {name: "umair"}

// console.log(a)

// let a = {}

// a = {name: "umair"}

// console.log(a)


// var hoist hota hai let or const nahi hota

//synchronous ka matlab error hai to nahi chalta;
            //OR
//Asynchronous code KA MATLAB kissi line of code ma error hai to isska wait nahi karna dusri line chala loo

// for (var i =0; i< 5; i++){
//     setTimeout(function(){
//       console.log(i)
//     },1000)
// }

// for (let i =0; i< 5; i++){
//     setTimeout(function(){
//       console.log(i)
//     },1000)
// }


// closure;

// function abc (){
//     // window
//     // abc scope
//     var a = 2;


//     function xyz(){
//       // window
//       // abc scope
//       // xyz scope


//       function foo(){
//       // window
//       // abc scope
//       // xyz scope
//       // foo scope

//       }
//     }

//     xyz();
// }


// abc();



// destructuring;


// let student = {
//     name: "Umair",
//     email: "umair@company.com"
//     classDetails: {
//         time: "9-11";
//     }
// }

// let time = "1212";


// let {name, email, classDetails} = student;
// let{time: classTime} = classDetails;

// console.log(name)
// console.log(email)
// console.log(time)




// Default parameters;

// let student = {
//     name: "Umair",
//     email: "umair@company.com"
//     classDetails: {
//         time: "subha";
//     }
// }

// let time = "1212";


// let {name, email, classDetails} = student;
// let {time = "9-11" } = classDetails;

// console.log(name)
// console.log(email)
// console.log(time)


// daynamic property name;

// let student = {
//     name: "Umair",
//     email: "umair@company.com"
// }

// let search = "name";

// let { [search]: a } = student;

// console.log(a)


// let arr = ["umair", "aslam", 336];

// let [a,b,c] = arr;

// console.log(a, b, c)


// Default parameters;

// function foo(a = "not available"){
//     console.log(a)
// }

// foo("SMIT")

// rest parameter;

// function foo(a = "not available", ...rest){
//     console.log(rest)
// }

// foo("SMIT", "umair", "aslam" )


// spread operater; // ye donu ko marge kardeta or array me deta;

// let arr = ["umair", "aslam"];

// let arr1 = ["ali", "uzair"];

// let mar = [...arr, ...arr1];

// console.log(mar)

// let student = {
//     name: "Umair",
//     email: "umair@company.com"
// }

// let school = {
//     schoolName: "SMIT",
//     location: "TariqRoad"
// }

// console.log({...student, ...school})


// sello copy; // update hota hai;


// let obj = {name: "Umair"}

// let obj1 = obj

// let obj2 = obj1

// obj2.name = "Aslam"

// console.log(obj, obj1,obj2)


// Deep copy; // aik update karen to dusri update nahi hote;


// let obj = {
//     name: "Umair",
//     institute: {
//          name: "SMIT"
//     }

// };

// let obj1 = obj

// let obj2 = JSON.parse(JSON.stringify(obj))

// obj2.institute.name = "Saylani"

// console.log(obj, obj1,obj2)

//Enanched object litrals;


// let student = "umair";
// let institute = "SMIT";

// let obj = {
//     student,
//     institute
    
// }

// console.log(obj)

// optional chaning;


    // let obj = {
    //     name: "Umair",
    //     institute: {
    //          name: "SMIT"
    //     }
    
    // };

    // console.log(obj?.institute?.detail?.name)

    // console.log(obj.name)


    // callback; //ASYRONOUS


// function abc(cb){
//     setTimeout(function(){
//          console.log("Done")
//          cb();
//     },5000)
// }

// function myCallback(){
//     console.log("ABC FREE")
// }

// abc(myCallback);



//Array method; = // for loap ki replacement or ye kuch return nhai karta hai;

// foreach kuch return nahi karta;


//  let arr = ["Multan", "Islamabad", "Faislabad"]

// arr.forEach(function(elem, i){
//   console.log(elem, i)
// })


// arr.forEach(function(elem, i, all){
//   console.log(elem, i, all)
// })


// map return karsakte hai or aik array ko use karke naya array bnadeta;


// let result =arr.map(function(elem, i){
//     return `$(elem), Pakistan`

// })

// console.log(result)


//filter; = // true or false deta 

// let result=arr.filter(function(){
//     return true
// })

// console.log(result)

// let result=arr.filter(function(){
//     return false
// })

// console.log(result)


// let arr = [{name: 'multan',population: 1000}, {name: 'islamabad',population: 500}];

// let result = arr.filter(function(){
//     return elem.population > 500 && elem.population < 1000;
// })

// console.log(result)


// find: // ye single lata agar multiple lane to filter use karoo.

// let student = [{name: "Ali", age: 20},{name: "Umair", age: 30}]

// let result = student.find(function(v){
//     return v.age === 20
// })

// console.log(result)

// findIndex:

// let student = [{name: "Ali", age: 20},{name: "Umair", age: 30}]

// let result = student.findIndex(function(v){
//     return v.age === 30
// })

// console.log(result)

// some: // ye true or false bta.

// let student = [{name: "Ali", age: 20},{name: "Umair", age: 30}]

// let result = student.some(function(v){
//     return v.age === 20
// })

// console.log(result)


//reduce: //ye kissi array ka some nikaldeta.


// let student = [{name: "Ali", age: 20, fee: 1545},{name: "Umair", age: 30, fee: 3131}]

// let result = student.reduce(function(a,v,i){
//     return a + v.fee;
// }, 0)

// console.log(result)