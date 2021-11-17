

	
// function miaFunzione() {  
	
//  let firstNumber = 0; //questa variabile si vede solo qui dentro  	
//  secondNumber = 10; //ma se dichiaro una variabile senza 	
// 					//var let o const... 
	
// } 
	
// miaFunzione();
	
// // console.log(firstNumber); //ReferenceError: i is not defined
	
// console.log(secondNumber);



// if(true) {
//     var variable = 'pippo';
//     let secondVariable = 10;
//     const constantVariable = 'constance';
// }
   
//    console.log(variable); 
   //'pippo'   
   
   
   
   
//    console.log(secondVariable); 
//    Uncaught ReferenceError: secondVariable is not defined
//    console.log(constantVariable); 
   // Uncaught ReferenceError: constantVariable is not defined

   
for (let index = 0; index < 10; index++) {
    console.log(index);
}

	
a = 0;	
b = "buongiorno";	
var c = "ciao";

saluta();
	
console.log("a is " + a);	
console.log("b is " + b);
 	
function saluta() {
 var d = "asd";	
 console.log("a is " + a);	
 var b = a + 1;	
 console.log("b is " + b);	
 console.log(c);
	
}