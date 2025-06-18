//   Simple objects
//const student={
//    FullName:'Neeraj',
//    Depart:'Bca',
//    mark: function()
//    {
//        console.log("Get a Good mark",98);
//         console.log("Get a Good mark",this.Depart);
//         console.log("My fullName is ",this.FullName)
//    }
//}
//console.log(student)


//                          Prototyping
//                               | 
//                               |                               
//           |-----------------------------------------|
//           InBuild                                   UserDefine
//         ->Filter()                                 User can make some prototyping
//         ->Incude()
//         ->pop()

//  UserDefine Protoping;

// Make a object in function

//const employe=
//{  // First parrt
//   calSalary()
//   {
//    console.log("Salary calculater");
//   },
//   //Seconde  Type
//
//   //fixsalry:function()
//   //{
//   // console.log("Slary is fixed");
//   //}
//};
//
//const usedproto=
//{
//    salary:5000,
//}
//usedproto.__proto__=employe;
//
//console.log(usedproto)

const salarycal=
{
    calculator()
    {
        console.log("salary  increase in 10%")
    }
}
const neeraj=
{
 SalaryAmount:1000000,
}
neeraj.__proto__=salarycal;
console.log("Neeraj singh",neeraj);

const anuj=
{
   salary:1000000,
}
anuj.__proto__=salarycal;
console.log("Anuj singh",anuj)