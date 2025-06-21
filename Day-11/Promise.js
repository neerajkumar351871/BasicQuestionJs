//Promise
//let promiseobj =new Promise((reslove,rejected)=>
//{
//    console.log("Hello");
//   // reslove("This is complete successfully run");
//   rejected("This is note completed");
//})

//function getdata(Id,callback)
//{
// return new Promise((reslove,rejected)=>
//{
//     setTimeout(()=>
//    {
//        //console.log("Id is ",Id);
//        //reslove("Success fully passed:")
//        rejected("Some Technical isuue then rejected the your request:")
//        if(callback)
//        {
//            callback();
//        }
//    },5000)
//})
//}

//const  getpromise=()=>
//{
//    return new  Promise((reslove,rejected)=>
//    {
//        console.log("Succfully paased")
//       // reslove("Passed");
//        rejected("network error")
//    });
//};
//let values= getpromise();
//    values.then((res)=>
//{
//    console.log("Succfully work in Then:",res);
//});
//values.catch((err)=>
//{
//    console.log("Not run promise:",err)
//})

// Fetching the data one by one;
function user1() {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            console.log("Get data1");
            resolve("Passes");
        }, 5000);
    });
};
function user2() {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            console.log("Get data2");
            resolve("Passes");
        }, 5000);
    });
};
let call = user1();
console.log("Fetching the data1...");
call.then((res) => {
    console.log(res);
    console.log("Fetching data 2...");
    let calls = user2();
    calls.then((res) => {
        console.log(res);
    });
});