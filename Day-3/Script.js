//const mark=[85,97,44,27,76,60];
//let sum=0;
//for(let studetMark of mark)
//{
//  sum+=studetMark;
//}
//console.log("Total mark",sum);
//let total=mark.length;
//console.log("Total  lenght of array",total)
//console.log("Average mark",sum/total);
// let productPrice=[250,645,300,900,50];
// let applydis=0;
// let finalPrice=0;
// let array=[];
// for( let prPr of productPrice)
// { 
//   applydis= prPr/100*30;
//    finalPrice=prPr-applydis;
//    array.push(finalPrice);
//   
//}
//console.log(array);


//1. Find Maximum Number
//const Input=[3, 5, 1, 8, 2]
//const max= Math.max(...Input);
//console.log("Max Number",max);

//const Input=[3, 5, 1, 8, 2]
//const min= Math.min(...Input);
//console.log("Min Number",min)

//2. Sum of Array Elements

// Return the sum of all elements in the array.
//const Input=[1, 2, 3, 4];
//let sum=0;
//for(val of Input)
//{
//   sum+=val;
//}
//console.log(sum);

//3. Find Even Numbers
// Return all even numbers from the array.
//Input: [10, 15, 8, 23];
//Output: [10, 8];


//const Input=[10, 15, 8, 23];
//const Output=[];
//for(let  even of Input)
//{
//     even%2==0 && Output.push(even);
//}
//console.log(Output)
//
//5.Reverse the Array
//4. Count Positive Numbers
//Input: [-1, 0, 3, 5, -2]
//Output: 2
//const Input = [-1, 0, 3, 5, -2];
//let number = 0;
//
//for (let even of Input) {
//  even<0 && number++;
//}
//
//console.log("Count of negative numbers:", number);

//5. Reverse the Array
// Return the reversed array.
//Input: [1, 2, 3]
//Output: [3, 2, 1] 
//        First logic inbuild; 
//const Input=[1, 2, 3]
//console.log(Input.reverse());
//const arr = [1, 2, 3, 4];
//const reversedArr = [];
//
//for (let i = arr.length - 1; i >= 0; i--) {
//    reversedArr.push(arr[i]);
//}
//
//console.log(reversedArr);

//6.Remove Duplicates
//Input: [1, 2, 2, 3, 1]
//Output: [1, 2, 3]
//const input = [1, 2, 2, 3, 1];
//const unique = [];
//
//for (let i = 0; i < input.length; i++) {
//  if (!unique.includes(input[i])) {
//    unique.push(input[i]);
//  }
//}
//console.log(unique)
//const arr = [2,4,5,4,6,8,9,101];
//let number=0;
//for(let i=0;i<=arr.length;i++)
//{
//if(arr[i]>number)
//{
//    number=arr[i];
//}
//}
//console.log(number)
//const arr = [2, 4, 5, 4, 6, 8, 9, 101];
//let number = arr[0]; // Start with first element as initial minimum
//
//for (let i = 1; i < arr.length; i++) {
//    if (arr[i] < number) {
//        number = arr[i];
//    }
//}
//
//console.log(number); // Output: 2

//function Message(Msg) {
//  return Msg.toUpperCase(); // Fix the method name and add return
//}
//
//let send = "neeraj";
//console.log(Message(send));  // Output: NEERAJ

//function add(x,y)
//{
//    let sum =x+y
//    return sum;
//}
//console.log(add(10,20));
//const  add =(x,y)=>
//{
//let sum =x+y
//return sum;
//}
//console.log(add(10,30)) 

// Find the vowels;

//const data = 'Bharat';
//let noVowles = 0;
//for (vowels of data.toLocaleLowerCase()) {
//
//    if (vowels == "a" || vowels == "e" || vowels == "i" || vowels == "o" || vowels == "u") {
//
//        noVowles++;
//    }
//}
//console.log("No of Vowels", noVowles)

const findVowles=(data)=>
{
    let noVowles = 0;
   
    for (vowels of data.toLocaleLowerCase()) {
   if (vowels == "a" || vowels == "e" || vowels == "i" || vowels == "o" || vowels == "u") {
       noVowles++;
   }

}
console.log(data,noVowles);
}

const data = 'Bharat';
 findVowles(data)
