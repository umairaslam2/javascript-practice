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
















