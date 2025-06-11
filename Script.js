//const data = prompt("Enter The NUmber");
//const number= Number(data)
//if (number % 2 == 0) {
//    if (number % 2 == 0 && number>0) {
//        console.log("Number is Even or Positive", number)
//    }
//    else {
//        console.log("Number is Even or Negative", number)
//    }
//}
//else {
//    if (number % 2 == 1 && number >0) {
//        console.log("Number is odd or Positive", number)
//    }
//    else {
//        console.log("Number is odd or Negative", number)
//    }

//}
//⭐ Rating: 5.5/10
// Criteria	Score
// ✅ Basic logic correct	2/2
// ❌ Syntax issue (.log)	0.5/2
// ⚠️ Odd number handling	1/2
// 🧼 Message clarity	1/2
// 🧠 Code structure/readable	1/2


// 2. Check if a number is divisible by 3 or 5
//if(number%3==0)
//{
//    console.log("Yes  This number is Divisible 3 :",number);
//}
//else
//{
//    if(number%5==0)
//    {
//      console.log("Yes  This number is Divisible 5 :",number);
//    }
//}

// 3.Check if age is greater than 18 and less than 60.
//if(18<number && 60>number)
//{
//   console.log('This number is Belong to 18 to 60:',number);
//}
//else
//{
//   console.log("Not  Belong to 18  to 60:",number);
//}

// 4.Check if the user is not an admin
//let isAdmin = true;
//if(isAdmin !==true)
//{
//    console.log("Success fully IN")
//}
//else
//{
//console.log("Login Failed :Admin and user are not allowed")
//}
// Rating
//⭐ Rating: 6.5/10
// Criteria	Score
// ✅ Functional logic	2/2
// ✅ Valid syntax	2/2
// 🔄 Message clarity	1/2
// 💡 Code optimization	1.5/2


//5. Check if username is not empty and password is at least 6 characters
//let username = prompt("Enter username");
//let password = prompt("Enter password at least 6 digit");
//
//if (0 != username.length && 6 <= password.length) {
//    console.log("Yes Success fully login");
//}
//else {
//    if (0<=username.length && 6>password.length) {
//        console.log("Not login :","User Name :", username, "Password:", password.length,"Digit");
//
//    }
//}

//⭐ Rating: 6.5/10
//✅ Functional and mostly correct
//
//🔧 Needs slight condition clean-up
//
//🧼 Better message formatting and multiple error handling would make it clearer

 // 6.Check if number is between 50 and 100 or equal to 200

 const data = prompt("Enter The Number");
 const number= Number(data)
 if(50<=number && 200>=number)
 {
    if(50<=number && 100>=number)
    {
 console.log("Belong to range 50 to 100",number)
    }
    else
    {
          {
 console.log("Belong to range 100 to 200",number)
    }
    }
 }
 else
 {
      {
 console.log("Does not belong 50 to 200",number)
    }
 }

// ⭐ Rating: 7/10
//   Criteria	Score
//✅ Correct logic	2/2
//✅ Valid syntax	2/2
//🔄 Code clarity	1.5/2
//💡 Optimization	1/2
//🔤 Output message	0.5/2


