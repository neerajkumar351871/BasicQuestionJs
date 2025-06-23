//function  getdata(Id)
//{
//    return new Promise((resolve,rejecteced)=>
//    {
//        setTimeout(() => {
//        console.log("Run the code:1",Id);
//        resolve("Sucess fully run:1"); 
//        }, 5000);
//    })
//   
//}
//function  getdata2()
//{
//    return new Promise((resolve,rejecteced)=>
//    {
//        setTimeout(() => {
//        console.log("Run the code 2:");
//        resolve("Sucess fully run:2"); 
//        }, 2000);
//    })
//   
//}
//console.log("Wating the result 1....")
//getdata().then((res)=>
//{
//    console.log(res);
//    console.log("Wating for  result 2...")
//    getdata2().then((res)=>
//    {
//        console.log(res);
//    })
//})
// Promise chain

//getdata(1).then((res)=>
//{     console.log(res)
//    return getdata(2);
//}).then((res)=>
//{  console.log(res)
//    return getdata(3);
//}).then((res)=>
//{     console.log(res)
//    return getdata(4);
//})

//function getId(Id) {
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            console.log("Print the Id", Id);
//            resolve("Id " + Id + " printed");
//        }, 2000);
//    });
//}
//getId(1).then((res)=>
//{
//    console.log(res);
//  setTimeout(()=>{
//    getId(2);
//  },4000)
//})

