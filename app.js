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


//Arrow Function: // function ka keyword remove karke => use karte,


// let abc = (a,b) => {
//     return a * b;
// }

// console.log(abc(2, 2));

            // OR://


// let abc = (a,b) => a * b;


// console.log(abc(2, 2));


// let obj = {
//    name: "Umair",
//    getName: function(){
//     console.log(this)
//    }
// }

// obj.getName()


// let obj = {
//     name: "Umair",
//     getName: () => {
//      console.log(this)
//     }
//  }
 
//  obj.getName()


// function abc() {
//     console.log(arguments[1])
// }

// abc(2,3)


// expontial operator;

//console.log (Math.pow(2,4))


//classes:

// class student {
//     constructor(name){
//         this.name = name;

//     }
// }

// console.log(new student("Umair"))


// class Student {
//     constructor(name){
//         this.name = name;

//     }
//     getName(){
//         return this.name;
//     }
// }

// let student = (new Student("Umair"))

// console.log(student.getName())


//oops:

//Inheritance: // jo abu ka wohamara 

// class Institute {
//     constructor(){
//         this.inst = "SMIT"
//     }
// }

// class Student extends Institute {
//     constructor(name, inst){
//         super(inst);
//         this.name = name;
//         this.inst = this.inst;

//     }
//     getName(){
//         return this.name;
//     }
// }

// let student = (new Student("Umair"))

// console.log(student)



//abstraction: //jo asal cheiz hai iss ko user se chupe ke rakhna.// for example: AC ke ander kya hai ham ko nahi pta.



//polymorphism: // aik hi cheiz se multiple time. // for example Projecter.

//encapsulation: // sare chezon ko aik jiga per rakhna.



// iterators & generators: // conditon ki limit rakhna yani function ko 5 dfa call kana hai

// generators me javascript ne yield ka method diyahai


//Higher order function: //aik aesa function hai jo as a arument function deyta hai or receive be function karta hai

// let foo = ()=>{
//     return ()=>{
//       cb()
//     }
// }

// let cb = ()=>{

// }

// let result = foo(cb)

// console.log(result)


// Ternary operators: // 

// let age = 20;

// let type = age >= 20 ? "Eligible" : "Not Eligible"

// console.log(type)


// Moduls: // import & Export;

// Multi export:

// let getDate = ()=>{
//     return new Date().toDateString();
// };

// let getTime = ()=>{
//     return new Date().getTime();
// };

// const appName = "Quiz"


// export { getDate, getTime, appName };



// Default export:


// let getDate = ()=>{
//     return new Date().toDateString();
// };

// let getTime = ()=>{
//     return new Date().getTime();
// };

// const appName = "Quiz"

// export default getDate;


// export { getDate, getTime, appName };


// promises:



// let getvalue = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         resolve("Data Agaya")
//     })
// })

// getvalue
//    .then(res => console.log(res))
//    .catch(er => console.log(err))

// let data = new Promise((resolve, reject)=>{
    
//     resolve("Resolve")
    
// })

// data
//  .then((res)=>console.log(res))
//  .catch((err) => console.log(err));



// let data = new Promise((resolve, reject)=>{

//     fetch('https://fakestoreapi.com/products')
//      .then((res) =>res.json()) //asycronus code;
//      .then((json) => resolve(json))
//      .catch(err => reject(err))
//     });

// data.then((res)=>console.log(res)).catch((err) => console.log(err));


// let getData = async () =>{
// try{
//    let products = await data;
//    console.log(products)
// } catch(err) {
//     console.log(err)
//  }
// };
// getData();

// let getData = async () =>{
//     let products = await data;
//     console.log(products)
//  }
//  getData()


// ** JavaScript Coding Challenge:


// 1. Reverse Words in a String:


// function reverseWords(s) {
//     // Split the string into an array of words
//     let wordsArray = s.split(' ');

//     // Reverse each word in the array
//     let reversedWordsArray = wordsArray.map(word => {
//         return word.split('').reverse().join('');
//     });

//     // Join the reversed words back into a single string with spaces
//     let result = reversedWordsArray.join(' ');

//     // Return the final reversed string
//     return result;
// }

// // Example Usage
// let inputString = "JavaScript is fun";
// let outputString = reverseWords(inputString);
// console.log(outputString); // Output: "tpircSavaJ si nuf"




// 2. Capitalize the First Letter of Each Word:


// function capitalizeWords(s) {
//     // Split the string into an array of words
//     let wordsArray = s.split(' ');

//     // Capitalize the first letter of each word
//     let capitalizedWordsArray = wordsArray.map(word => {
//         if (word.length > 0) {
//             return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//         }
//         return word; // In case of empty strings in the array
//     });

//     // Join the capitalized words back into a single string with spaces
//     let result = capitalizedWordsArray.join(' ');

//     // Return the final capitalized string
//     return result;
// }

// // Example Usage
// let inputString = "coding is fun";
// let outputString = capitalizeWords(inputString);
// console.log(outputString); // Output: "Coding Is Fun"


// 3. Find the Longest Word in a Sentence:


// function findLongestWord(s) {
//     // Split the string into an array of words
//     let wordsArray = s.split(' ');

//     // Initialize a variable to store the longest word
//     let longestWord = "";

//     // Iterate through the array to find the longest word
//     wordsArray.forEach(word => {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     });

//     // Return the longest word found
//     return longestWord;
// }

// // Example Usage
// let inputString = "The quick brown fox jumped over the lazy dog";
// let outputString = findLongestWord(inputString);
// console.log(outputString); // Output: "jumped"


// 4. Count the Occurrences of Each Character in a String:


// function countCharacterOccurrences(s) {
//     // Initialize an empty object to store character counts
//     let charCount = {};

//     // Iterate over each character in the string
//     for (let char of s) {
//         // If the character is already in the object, increment its count
//         if (charCount[char]) {
//             charCount[char]++;
//         } else {
//             // If the character is not in the object, initialize its count to 1
//             charCount[char] = 1;
//         }
//     }

//     // Return the object containing character counts
//     return charCount;
// }

// // Example Usage
// let inputString = "javascript";
// let outputObject = countCharacterOccurrences(inputString);
// console.log(outputObject); // Output: { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }



// 5. Check if a String is a Palindrome:



// function isPalindrome(s) {
//     // Clean the string: remove non-alphanumeric characters and convert to lowercase
//     let cleanedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

//     // Reverse the cleaned string
//     let reversedString = cleanedString.split('').reverse().join('');

//     // Compare the cleaned string with its reverse
//     return cleanedString === reversedString;
// }

// // Example Usage
// let inputString = "A man, a plan, a canal: Panama";
// let result = isPalindrome(inputString);
// console.log(result); // Output: true



// 6. Find the Missing Number in an Array




// function findMissingNumber(nums) {
//     let n = nums.length;
    
//     // Calculate the expected sum of all numbers from 0 to n
//     let expectedSum = (n * (n + 1)) / 2;
    
//     // Calculate the actual sum of numbers in the array
//     let actualSum = nums.reduce((sum, num) => sum + num, 0);
    
//     // The missing number is the difference between the expected and actual sums
//     return expectedSum - actualSum;
// }

// // Example Usage
// let inputArray = [3, 0, 1];
// let missingNumber = findMissingNumber(inputArray);
// console.log(missingNumber); // Output: 2




// 7. Remove Duplicates from an Array:



// function removeDuplicates(nums) {
//     // Edge case: if the array is empty, return 0
//     if (nums.length === 0) return 0;

//     // Initialize the index for the last unique element
//     let lastUniqueIndex = 0;

//     // Iterate through the array starting from the second element
//     for (let i = 1; i < nums.length; i++) {
//         // If the current element is different from the last unique element
//         if (nums[i] !== nums[lastUniqueIndex]) {
//             // Move the current element to the next position for unique elements
//             lastUniqueIndex++;
//             nums[lastUniqueIndex] = nums[i];
//         }
//     }

//     // Return the new length of the array (lastUniqueIndex + 1)
//     return lastUniqueIndex + 1;
// }

// // Example Usage
// let inputArray = [0, 0, 1, 1, 2, 2, 3, 3, 4];
// let newLength = removeDuplicates(inputArray);
// console.log(newLength); // Output: 5
// console.log(inputArray.slice(0, newLength)); // Output: [0, 1, 2, 3, 4]



// 8. Find the Intersection of Two Arrays:


// function intersection(nums1, nums2) {
//     // Create a Set from the first array to handle uniqueness and fast lookup
//     let set1 = new Set(nums1);
    
//     // Create a Set to store the intersection result
//     let intersectionSet = new Set();
    
//     // Iterate over the second array
//     for (let num of nums2) {
//         // If the current number is in the set1, add it to intersectionSet
//         if (set1.has(num)) {
//             intersectionSet.add(num);
//         }
//     }
    
//     // Convert the result Set to an array and return it
//     return Array.from(intersectionSet);
// }

// // Example Usage
// let nums1 = [4, 9, 5];
// let nums2 = [9, 4, 9, 8, 4];
// let result = intersection(nums1, nums2);
// console.log(result); // Output: [9, 4]


// 9. Group Anagrams:


// function groupAnagrams(strs) {
//     let map = new Map();

//     // Iterate through each word in the input array
//     for (let str of strs) {
//         // Sort the characters in the word to form the key
//         let sortedStr = str.split('').sort().join('');
        
//         // If the key does not exist in the map, initialize with an empty array
//         if (!map.has(sortedStr)) {
//             map.set(sortedStr, []);
//         }
        
//         // Add the current word to the corresponding array in the map
//         map.get(sortedStr).push(str);
//     }
    
//     // Convert the values of the map to an array and return
//     return Array.from(map.values());
// }

// // Example Usage
// let inputArray = ["eat", "tea", "tan", "ate", "nat", "bat"];
// let result = groupAnagrams(inputArray);
// console.log(result); // Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]


// 10. Longest Substring Without Repeating Characters:


// function lengthOfLongestSubstring(s) {
//     let left = 0;
//     let maxLength = 0;
//     let seen = new Set();
    
//     for (let right = 0; right < s.length; right++) {
//         // If the character is already in the set, remove characters from the left
//         while (seen.has(s[right])) {
//             seen.delete(s[left]);
//             left++;
//         }
        
//         // Add the current character to the set
//         seen.add(s[right]);
        
//         // Update the maximum length
//         maxLength = Math.max(maxLength, right - left + 1);
//     }
    
//     return maxLength;
// }

// // Example Usage
// let inputString = "abcabcbb";
// let result = lengthOfLongestSubstring(inputString);
// console.log(result); // Output: 3





// 11. Validate Parentheses:



// function isValid(s) {
//     let stack = [];
//     let bracketMap = {
//         '(': ')',
//         '{': '}',
//         '[': ']'
//     };
    
//     for (let char of s) {
//         if (char in bracketMap) {
//             // If the character is an opening bracket, push it onto the stack
//             stack.push(char);
//         } else {
//             // If the character is a closing bracket
//             let topElement = stack.pop();
//             if (char !== bracketMap[topElement]) {
//                 // If it does not match the expected closing bracket
//                 return false;
//             }
//         }
//     }
    
//     // If the stack is empty, all brackets are properly matched
//     return stack.length === 0;
// }

// // Example Usage
// let inputString = "([{}])";
// let result = isValid(inputString);
// console.log(result); // Output: true



// 12. Merge Intervals:



// function mergeIntervals(intervals) {
//     // If there are no intervals, return an empty array
//     if (intervals.length === 0) return [];

//     // Sort intervals by their start time
//     intervals.sort((a, b) => a[0] - b[0]);

//     // Initialize the result with the first interval
//     let merged = [intervals[0]];

//     for (let i = 1; i < intervals.length; i++) {
//         let current = intervals[i];
//         let lastMerged = merged[merged.length - 1];

//         // If the current interval overlaps with the last merged interval, merge them
//         if (current[0] <= lastMerged[1]) {
//             lastMerged[1] = Math.max(lastMerged[1], current[1]);
//         } else {
//             // Otherwise, add the current interval to the result
//             merged.push(current);
//         }
//     }

//     return merged;
// }

// // Example Usage
// let inputIntervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
// let result = mergeIntervals(inputIntervals);
// console.log(result); // Output: [[1, 6], [8, 10], [15, 18]]



// 13. transpose the Matrix:


// function rotate(matrix) {
//     const n = matrix.length;

//     // Transpose the matrix
//     for (let i = 0; i < n; i++) {
//         for (let j = i; j < n; j++) {
//             [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//         }
//     }

//     // Reverse each row
//     for (let i = 0; i < n; i++) {
//         let left = 0;
//         let right = n - 1;
//         while (left < right) {
//             [matrix[i][left], matrix[i][right]] = [matrix[i][right], matrix[i][left]];
//             left++;
//             right--;
//         }
//     }
// }

// // Example Usage
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// rotate(matrix);
// console.log(matrix); // Output: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]


// 14. Find the Duplicate Number:




// function findDuplicate(nums) {
//     // Phase 1: Finding intersection point in the cycle
//     let tortoise = nums[0];
//     let hare = nums[0];

//     // Finding the intersection point of the two runners
//     do {
//         tortoise = nums[tortoise];
//         hare = nums[nums[hare]];
//     } while (tortoise !== hare);

//     // Phase 2: Finding the entrance to the cycle
//     let finder = nums[0];
//     while (finder !== tortoise) {
//         finder = nums[finder];
//         tortoise = nums[tortoise];
//     }

//     return finder;
// }

// // Example Usage
// let nums = [1, 3, 4, 2, 2];
// let result = findDuplicate(nums);
// console.log(result); // Output: 2


// 15. Valid Sudoku:



// function isValidSudoku(board) {
//     const rows = Array.from({ length: 9 }, () => new Set());
//     const columns = Array.from({ length: 9 }, () => new Set());
//     const boxes = Array.from({ length: 9 }, () => new Set());

//     for (let i = 0; i < 9; i++) {
//         for (let j = 0; j < 9; j++) {
//             const num = board[i][j];
//             if (num === '.') continue;

//             // Calculate the index of the 3x3 box
//             const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

//             // Check if the number is already in the current row, column, or box
//             if (rows[i].has(num) || columns[j].has(num) || boxes[boxIndex].has(num)) {
//                 return false;
//             }

//             // Add the number to the sets
//             rows[i].add(num);
//             columns[j].add(num);
//             boxes[boxIndex].add(num);
//         }
//     }

//     return true;
// }

// // Example Usage
// let board = [
//   ["5","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".",".",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2",".","8"],
//   [".",".",".","4",".",".",".",".","7"],
//   [".",".",".",".","1","9",".",".","5"]
// ];
// let result = isValidSudoku(board);
// console.log(result); // Output: true



// javascript 20 practice question;


//1.given a string, reverse each word in a sentance


// var str = "riamu";
// var strSave = str.split(" ")

//  .map(function(word){

//     return word.split("").reverse().join("")
//  }
// )

// console.log(strSave.join(""))


//2. how to check object is an array or not 


// function checkArray (elem){
//     console.log(Array.isArray(elem));
// }

// checkArray([]);
// checkArray({});


//3.how to empty array in javascript


// var arr = [1,2,3,4,5,6]

// arr.length =0;

// console.log(arr.length)




//4.how would yo check if  number is an integer

// var a = 12;

// if(a%1 === 0){

//     console.log("integer")

// }

// else{
//     console.log("not")
// }

//5. make duplicate;

// function duplicate(arr){
//     return arr.concat(arr);
// }

// console.log(duplicate([1, 2, 3, 4, 5]));


//6 write a javascript function that reverse a number;


// function reverseKaro(num){
//    return Number(num.toString().split("").reverse().join(""))
// }


// console.log(reverseKaro(12));


// 7 write a javascript function tat check if  number is palindrome or not;


// function palindromCheck(str){
//   var reversed =  str.split("").reverse().join("");

//   if(reversed === str) return true;
//   else return false;
// }

// console.log(palindromCheck("lool"))

//8 write a javascript function that return a passed string with letter in alphabatic order;


// function alphabatic(str){
//     return str.split("").sort().join("")

// }

// console.log(alphabatic("umair"))


//9. write a javascript function that return first letter of string in capital;

// function capitilizrKaro(str){
//    var allwords = str.split(" ").map(function(word){
//      return word.charAt(0).toUpperCase() + word.substring(1)
//     })

//    return allwords.join(" ");
// }

// console.log(capitilizrKaro("umair kese"))

// 10. write a javascript function that return each  letter occurrences 

// function occ(str){
//     var occurrence = {};
//    str.split("").forEach(function(elem) {
//     if(occurrence.hasOwnProperty(elem) === false){
//         occurrence[elem] = 1;
//     }

//     else{
//         occurrence[elem]++;
//     }
//    });

//    return occurrence;
// }

// console.log(occ("apple"))

// 11. loop an array and all member of it

// var arr = [1,2,3,4,5];
// var sum =0;

// arr.forEach(function(elem){
//     sum = sum + elem;

// })

// console.log(sum)

// 12. in an array of number or str only add those number which are not str;

// var arr = ["umair", 1, 3, "aslam"]
// var sum = 0;

// arr.forEach(function(elem){
//     if(typeof elem === "number"){
//         sum = sum + elem;
//     }

// })

// console.log(sum)

// 13. loop an array of object and remove all object which dotnot have value male;

// var arr = [
//     {name: "umair", gender: "male" },
//     {name: "aslam", gender: "male" },
//     {name: "sana", gender: "female" },
//     {name: "umer", gender: "male" }
// ]

// var nerarr = arr.filter(function(elem){
//     return elem.gender === "male"
// })

// console.log(nerarr)

// 14. write a javascript function to clone an array;

// function cloneArr(arr){
// return[...arr];
// }

// console.log(cloneArr([1,2,3,4,5]))


// 15. wrtie a javascript function accepts an argument and return type ;

// function typeTeller (elem){
//    return typeof elem;
// }

// console.log(typeTeller([]));
// console.log(typeTeller(12));
// console.log(typeTeller("12"));
// console.log(typeTeller(true));
// console.log(typeTeller(undefined));

// 16. write a javascript function to take fist element of an array and retuen element of an array


// function retrieve (arr, n=1){

// if(n < arr.length){
//   for(var i=0; i < n; i++){
//     console.log(arr[i])

//   }
// }

// else{
//     console.log("itne to element be na ")
// }

// }

// retrieve([1,2,3,4,5], 4)

//17. write a javascript function to take last element of an array and retuen element of an array




// function retrieve (arr, n=1){

// if(n < arr.length){
//   for(var i=0; i < n; i++){
//     console.log(arr[arr.length-1 -i])

//   }
// }

// else{
//     console.log("itne to element be na ")
// }

// }

// retrieve([1,2,3,4,5], 4)

// 18. find most frequent item of an array;

// function freq(arr){
//    var freq = {}
 
//    arr.forEach(function(elem){
//     if(freq.hasOwnProperty(elem)) freq[elem]++;
//     else freq[elem] = 1;
//    })

//    console.log(freq);
    
   
   
// }

// freq([1,2,3,12,3,34,12,3,6,7,1]);

//19. write a javascript function to suffle an array;

// function suffleKar(arr){
//    var totalSuffleArea = arr.length;

//    while(totalSuffleArea>0){

//    totalSuffleArea --;

//  var index =  Math.floor(Math.random()*totalSuffleArea);

//  var temp = arr[totalSuffleArea];
//  arr[totalSuffleArea] = arr[index];
//  arr[index] = temp;

// }

// return arr;

// }

// console.log(suffleKar([1,2,3,4,5,6,7]));

//20. union of two arra;

// function union(arr1, arr2){

//   return [...new Set(arr1.concat(arr2))]

// }

// console.log(union([1,2,3,4], [2,3,4,6]));




// 1. VARIABLE declared without var,let and const:

// if(true){
//     variable = 10

//     console.log(variable)
// }



// 2. HOISTING:

//FUNCTION HOISTING:

// myFunction();

// function myFunction(){
//     console.log('hello world');
// }



//VARIABLE HOISTING:

// x=10;

// console.log(x);

// var x;


// OBJECT:

// let person = {
//     name : 'umair',
//     age : 30,
//     grade : ['A' , 'B' , 'C'],
//     greet : function(){
//         console.log(this.name);
//     }

// };

// console.log(person.name)





// IF STATEMENT:

// let x = 5;

// if(x>5){
//     console.log('notgo');
// }else if(x<=5){
//     console.log('go');

// }else{
//     console.log('do what you want');
// }


// SWITCH STATEMENT:

// let a = 5;

// switch(a){
//     case 1:
//         console.log('1');
//         break;
//         case 5:
//             console.log('2');
//             break;
//             default:
//                 console.log('3')

// }



// TERNARY OPERATORS:

// let y = 10;

// let z = y < 10 ? 'fail' : 'pass'

// console.log(z)


//MAP:

// let arr = [1,2,3,4,5];

// let mapArr = arr.map((e) =>  e*2);

// console.log(mapArr)


//FOR EACH:

// let arr = [1,2,3,4,5];

// arr.forEach((e) => {
//    console.log(e*2)
// })


//FOR IN LOAP:


// let person ={
//     brand: 'king',
//     name: 'Babar'  
// }

// for (let val in person){
//     console.log(person[val])
// }


//APIS:

// fetch('https')
// .then(response =>
//     response.json())
//     .then(data =>
//         console.log(data));



//PROMISE:

// let promise = new 
// promise((resole,reject) =>{
//     resolve('success')
// }
// )
// promise.then(result=>{
//     console.log(result)
// })



//ASYNC OR AWAIT:

// async function getData(){
//     let response = await
//     fetch('https');
//     let data = await
//     response.json();
//     console.log(data)
// }
// getData();

// Spread Operator

// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, 6];
// const numbersCombined = [...numbersOne, ...numbersTwo];
// console.log(numbersCombined);


// Spread Operator in object

// const myVehicle = {
//     brand: 'Ford',
//     model: 'Mustang',
//     color: 'red'
//   }
  
//   const updateMyVehicle = {
//     type: 'car',
//     year: 2021, 
//     color: 'yellow'
//   }
  
//   const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}



//Destructuring

// const person = {
//     firstName: "Umair",
//     lastName: "Aslam",
//     age: 21,
//     sex: "M"
//    }
     
//    const first = person.firstName;
//    const age = person.age;
//    const city = person.city || "Patna";
   
//    console.log(first) 
//    console.log(age) 
//    console.log(city) 


//function

// function calculate(a, b) {
//     const add = a + b;
//     const subtract = a - b;
//     const multiply = a * b;
//     const divide = a / b;
  
//     return [add, subtract, multiply, divide];
//   }
  
//   const [add, subtract, multiply, divide] = calculate(4, 7);
  
//   console.log("Sum: " + add);
//   console.log("Difference " + subtract);
//   console.log("Product: " + multiply);
//   console.log("Quotient " + divide);

// Ternary operator

// if (authenticated) {
//     console.log('home');
//   } else {
//     console.log('Login Page');
//   }

//   authenticated ?  console.log('home') : console.log('Login Page');


//palindome


// var string = "umair"
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

//spread practice


// const numbers1 = [1, 2, 3, 4];
// const numbers2 = [5, 6, 7, 8];
// const numbersMarged = [...numbers1, ...numbers2];
// console.log(numbersMarged);


// const arr = [1,2,3,4,5]

// arr.map((v,ind) => {
//     return v*2
// })

// const newArray = arr.map((v) =>{

// return v * 2

// })

// console.log(arr)
// console.log(newArray)



// 1. map

// const users = [

//  {id:1, Name: 'Umair', Age: 24},
//  {id:1, Name: 'Umer', Age: 25},
//  {id:1, Name: 'Uzair', Age: 26},

// ]

// const newUser = users.map(user=> ` ${user.Name} is ${user.Age} years old`)

// console.log(newUser)



// 2: Adding a New Property to Objects

// const products = [

//  {id:1, name: 'Mobile', price: 25000},
//  {id:1, name: 'Laptop', price: 35000},
//  {id:1, name: 'LED', price: 45000}

// ]

//  const discountedProducts = products.map (product => ({
//     ...product, discountedPrice: product.price * 0.9
//  }))

//  console.log(discountedProducts)


// 3: Create an array of employee objects with name, role, and salary. Use map to increase their salary by 20%.


//  const employees = [

//  {id:1, name: 'Salman', salary: 25000},
//  {id:1, name: 'Uzair', salary: 35000},
//  {id:1, name: 'Umair', salary: 45000}

// ]

//  const allEmployees = employees.map (employee => ({
//     ...employee, increaseSalary: employee.salary * 1.2
//  }))

//  console.log(allEmployees)


// 4: Check Even or Odd Numbers with

// const array = [1,2,3,4,5,6]

// const newArray = array.map(arr=>{
//     if(arr %2===0){
//     return `${arr} is even`
//     }else{
//         return `${arr} is odd`
//     }
// })

// console.log(newArray)


// 2. forEach


// const fruits = ['Apple', 'Banana', 'Peach']

// fruits.forEach((fruit,index)=>{
//     console.log(`frit is at index ${index} is ${fruit}`)
// })



// 2: Summing Array Elements

// const adding = [10,21,35,78]
// let sum = 0;

// adding.forEach(add =>{
//     sum+=add
// })

// console.log(`sum: ${sum}`)


// Task 1: Log Book Titles in Uppercase


// const bookTitle = ['english', 'urdu']

// bookTitle.forEach(book=>{

//     console.log(book.toUpperCase())

// })


// Spread Operator (...)

// 1: Spread Operator with Arrays

// const array = [1,2,3,4]
// const array2 = [...array,4,5]

// console.log(array2)


// 2: Spread Operator with Objects

// const person ={name:'umair', Age: 31}
// const updatedPerson = {...person, Age:31};

// console.log(updatedPerson)


// Rest Operator (...)

// 1: Rest Operator in Functions

// function sum(...numbers){
//     return numbers.reduce((acc,num)=>acc + num, 0)
// }

// console.log(sum(1,2,3,4))


// 2: Rest Operator in Object Destructuring

// const person = {name: 'Umair', Salary: 25000, Role: 'webdev'}
// const{name,...otherInfo} = person

// console.log(otherInfo)


// Coding Challenge: Shopping Cart
// You are working on a shopping cart system. Your tasks are:

// Create a new cart that includes items from two different existing arrays of products. Use the spread operator to combine them.
// Add a new product to the cart without modifying the original cart.
// Remove the first product from the cart while keeping the rest of the items intact using the rest operator.


// const cart1 = ['laptop','mobile']
// const cart2 = ['led','tv']
// const cart = [...cart1,...cart2]

// const addCart = ['ipad']
// const updatedCart = [...cart,...addCart]

// const[, ...remainingCart] = updatedCart

// console.log(remainingCart)


// Rest Operator (...)

// 1: Rest Operator in Functions

// function sum(...numbers){
//     return numbers.reduce((acc,num)=>acc + num, 0)
// }

// console.log(sum(1,2,3,4))


// filter Method

// const filterMethod = [1,2,3,4,5,6]

// const filterTest = filterMethod.filter(number => number > 3)

// console.log(filterTest)


// Coding Challenge: Filter Active Users
// You are managing a user list for an application. Each user object contains name and isActive properties. Your task is:

// Filter out only the active users (where isActive is true).
// Create a new array of names of the active users.



// const users = [
//     {name:'uzair', isActive: true},
//     {name:'umair', isActive: false},
//     {name:'umer', isActive: true}
// ]

// const activeUser = users.filter(user=> user.isActive)

// console.log(activeUser)

// const activeName = activeUser.map(user=>user.name)

// console.log(activeName)


// find Method

// const numbers = [10, 20, 30, 40, 50];

// const firstLargeNumber = numbers.find(number => number > 25);

// console.log(firstLargeNumber);



// reduce Method

// const numbers = [10, 20, 30, 40];

// const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(total); 


// Coding Challenge: Total Order Price
// You are working on an ecommerce website. Each item in a user's shopping cart has a price and quantity. Your task is:

// Calculate the total price of all items in the cart using the reduce method.


//  const cart = [

//  { name: 'Salman', price: 5000, quantity:1 },
//  { name: 'Uzair', price: 3000, quantity:1},
//  { name: 'Umair', price: 4000, quantity:2}

// ]

// const totalCart =cart.reduce((acc, item)=>{
//     return acc + (item.price * item.quantity)
// },0)

// console.log(totalCart)


// Destructuring

// Array Destructuring

// const fruits = ['Apple', 'Banana', 'Cherry'];
// const [fruit1, fruit2, fruit3] = fruits;

// console.log(fruit1); 
// console.log(fruit2); 
// console.log(fruit3); 


// Object Destructuring

// const person = { name: 'John', age: 30 };
// const { name, age } = person;

// console.log(name); 
// console.log(age);  


// Nested Destructuring

// const user = { name: 'Jane', address: { city: 'New York', zip: '10001' } };
// const { name, address: { city, zip } } = user;

// console.log(name);  
// console.log(city);  
// console.log(zip);   


//Ternary Operator

// const age = 18;
// const message = age >= 18 ? "You are an adult." : "You are a minor.";

// console.log(message); 


// Coding Challenge: Determine Access Level
// You are working with a user permissions system. Based on the user’s role, your task is:

// If the role is "admin", the user should have full access.
// If the role is "editor", the user should have limited access.
// If the role is "viewer", the user should only have view access.
// If the role is something else, the user should have no access.

// const role = 'viewer'


// const accessLevel = role === 'Admin' ? 'fullaccess' :
//                     role === 'editor' ? 'limitedaccess':
//                     role === 'viewer' ? 'view access':
//                     'no Access'

// console.log(accessLevel)

// var username = 'admin';
//  var password = 12345;
 
//  (username=='admin' & password==12345 ? alert('login successfully') : alert('invalid username or password') )



//oops:

//Inheritance: // jo abu ka wohamara 

// class Institute {
//     constructor(){
//         this.inst = "SMIT"
//     }
// }

// class Student extends Institute {
//     constructor(name, inst){
//         super(inst);
//         this.name = name;
//         this.inst = this.inst;

//     }
//     getName(){
//         return this.name;
//     }
// }

// let student = (new Student("Umair"))

// console.log(student)



//abstraction: //jo asal cheiz hai iss ko user se chupe ke rakhna.// for example: AC ke ander kya hai ham ko nahi pta.



//polymorphism: // aik hi cheiz se multiple time. // for example Projecter.

//encapsulation: // sare chezon ko aik jiga per rakhna.



// iterators & generators: // conditon ki limit rakhna yani function ko 5 dfa call kana hai





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


// const students = [

//  {id:1, Name: 'Umair', Age: 24},
//  {id:1, Name: 'Umer', Age: 25},
//  {id:1, Name: 'Uzair', Age: 26},

// ]

// const newStudents = students.map(student=> ` ${student.Name} is ${student.Age} years old`)

// console.log(newStudents)


// Anagrams:

// function groupAnagrams(words) {
//     return Object.values(words.reduce((acc, word) => {
//         const key = word.split('').sort().join('');
//         (acc[key] = acc[key] || []).push(word);
//         return acc;
//     }, {}));
// }

// const input = ["bat", "tap", "cat", "tab", "pat"];
// console.log(groupAnagrams(input));



// practice:


// var myarr = [8,2,5,6,7,11]
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



//* ---------------------------------------------------------
//* Programming Question: Longest Word in a String
//* ---------------------------------------------------------

//? Q: Write a function findLongestWord that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered.

//* Constraints:
//? The input string may contain alphabetic characters, digits, spaces, and punctuation.
//? The input string is non-empty.
//? The input string may contain multiple words separated by spaces.

//* Note:
//? If the input string is empty or contains only whitespace, the function should return an false.
//? The function should ignore leading and trailing whitespace when determining the longest word.

// const findLongestWord = (str) => {
//     if (str.trim().length === 0) {
//       return false;
//     }
  
//     words = str.split(" ");
//     words = words.sort((a, b) => b.length - a.length);
//     console.log(words);
//     // return words.at(-1);
//     return words[0];
//   };
  
//   console.log(
//     findLongestWord(
//       "Watch Thapa Technical javascript awesomethapatechnical course on youtube"
//     )
//   );


//*-------------------------------------------
//*  Programming Question: Hash Tag Generator
//*-------------------------------------------

//? You are required to implement a function generateHash that generates a hash tag from a given input string. The hash tag should be constructed as follows:

//? The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.
//? If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, the function should return false.
//? Otherwise, the function should return the generated hash tag prefixed with #.

//* Write a function generateHash to accomplish this task.

// const generateHash = (str) => {
//     if (str.length > 280 || str.trim().length === 0) {
//       return false;
//     }
  
//     str = str.split(" ");
//     str = str.map(
//       (curElem) =>
//         // curElem.replace(curElem[0], curElem[0].toUpperCase())
//         curElem.charAt(0).toUpperCase() + curElem.slice(1)
//     );
//     str = `#${str.join("")}`;
//     console.log(str);
//     return str;
//   };
  
//   console.log(generateHash("my name is thapa technical"));
  // o/p = "#MyNameIsThapaTechnical"

  //*---------------------------------------------------------
//*  Interview Question: Count Occurrences of Character
//*---------------------------------------------------------

// Task:
//? Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string.

// const countChar = (word, char) => {
//     word = word.toLowerCase();
//     char = char.toLowerCase();
  
//     totalCount = word.split("").reduce((accum, curChar) => {
//       if (curChar === char) {
//         accum++;
//       }
//       return accum;
//     }, 0);
    //   console.log(totalCount);
//     return totalCount;
//   };
  
  //console.log(countChar("MissIssippi", "I")); // Output: 4
  
  //todo Constraints:
  //? The function should be case-sensitive.
  //? The function should handle both lowercase and uppercase characters.
  //? The character parameter can be any printable ASCII character (the function should accept any character that is part of the ASCII character set and is printable).




  //*---------------------------------------------------------
//*  Interview Question:
//*---------------------------------------------------------
//? Write a function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the type of triangle: "equilateral", "isosceles", or "scalene".

// const checkTriangleType = (a, b, c) => {
//     if (a === b && b === c) return "equilateral";
//     if (a === b || b === c || a === c) return "isosceles";
//     return "scalene";
//   };
  
//   console.log(checkTriangleType(3, 3, 5)); // Output: "equilateral"
//   console.log(checkTriangleType(3, 4, 3)); // Output: "isosceles"
//   console.log(checkTriangleType(5, 8, 6)); // Output: "scalene"
  
  //todo The function should adhere to the following rules:
  //? If all three sides are of equal length, return "equilateral".
  //? If only two sides are of equal length, return "isosceles".
  //? If all three sides have different lengths, return "scalene".

  
  //*-------------------------------------------
//*  Programming Question: Sort an Array
//*-------------------------------------------

// ? Write a function to sort an array of numbers in an ascending order.

// const sortAscending = (arr) => {
//   return arr.sort((a, b) => b - a);
// };

// Example usage:
// console.log(sortAscending([5, 3, 1, 8])); // Output: [1, 3, 5, 8]
//console.log(sortAscending([5, 3, 10, 8])); // Output: [3, 5, 8,10]

//todo Requirements:
//? The function should take an array of numbers as input.
//? It should return a new array with the numbers sorted in ascending order.
//? The original array should remain unchanged.
//? You are not allowed to use the built-in sort() 

//*  Interview Question:
//*---------------------------------------------------------

//? 15: Write a function to calculate the sum of squares of all elements in an array. For example, given the array [1, 2, 3], the function should return 14 because 1*1 + 2*2 + 3*3 = 1 + 4 + 9 = 14.

//const sumOfSquares = (arr) => {
  //   return arr.reduce((accum, curElem) => (accum = accum + curElem * curElem), 0);

//   let sum = 0;
//   for (let elem of arr) {
//     sum = sum + elem * elem;
//   }
//   return sum;
// };

// Example usage:
//console.log(sumOfSquares([1, 2, 3])); // Output: 14


//*---------------------------------------------------------
//* Coding Challenge: Find the Minimum Value in an Array
//*---------------------------------------------------------
//? 16: Write a function findMin that takes an array of numbers as input and returns the minimum value found in the array.

//* Constraints:
//? The input array may contain both positive and negative integers.
//? The input array may be empty.
//? The input array may contain duplicate values.

//const findMin = (arr) => {
  //   arr = arr.sort((a, b) => {
  //     if (b > a) return -1;
  //   });

  //   return arr[0];
//   if (arr.length === 0) return "Array is empty";
//   return Math.min(...arr);
// };

// // Example usage:
//console.log(findMin([5, 10, 2, 8])); // Output: 2
//console.log(findMin([5, -3, 0, 12, -7])); // Output: -7
//console.log(findMin([])); // Output: undefined (or any suitable message for empty array)

//* Note:
//? Ensure the function handles edge cases gracefully, such as an empty input array.
//? Consider using ES6 features like the spread syntax (...) for a concise implementation.

//todo In JavaScript, the spread syntax (...) is used to expand an array into individual elements. In this function, ...arr is used to spread the elements of the input array arr.
//? For example, if arr is [5, 10, 2, 8], then ...arr expands to 5, 10, 2, 8.



//*--------------------------------
//* Coding Challenge
//*--------------------------------
//? 17: Write a function to check if a character is uppercase or lowercase.

const isUpperCase = (char) => {
  //   if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
  //     return true;
  //   }
  //   return false;
  return char === char.toUpperCase();
};

// I am just testing is all right

//* Constraints:
//? The input char will be a single character.
//? The character can be any printable ASCII character.
//? You can assume that the input will always be a string of length 1.
// Example usage:
console.log(isUpperCase("S")); // Output: true
// console.log(isLowerCase("b")); // Output: true

//* Notes:
//? Ensure that the function correctly identifies uppercase characters based on their ASCII values.
//? Optimize the function to handle edge cases efficiently.