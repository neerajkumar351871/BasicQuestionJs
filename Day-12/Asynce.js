 function api(Id,temprature,cloudes,)
 {
    return new Promise((resolve, rejected)=>
    {
      setTimeout(()=>
        {
        console.log(`${Id} Temprature is ${temprature}degree and cloudes  is${cloudes}`);
        resolve(200);
        },4000)
    })
 }

 // This is used to async  await
// async function weatherData()
// {
//    console.log("Fetching  Data 1..");
//    await api(1,30,"Normal");
//     console.log("Fetching  Data 2..");
//    await api(2,30,"Normal");
//     console.log("Fetching  Data 3..");
//    await api(3,30,"Normal");
//     console.log("Fetching  Data 4..");
//    await api(4,30,"Normal");
//      console.log("Fetching  Data 5..");
//    await api(5,30,"Normal");
//  
// }
// weatherData();

//Promise Chain

// console.log("Fetching  Data 1..");
//api(1,30,"Normal").then((res)=>
//{
//    console.log("Fetching  Data 2..",res);
//    return  api(2,30,"Heavy").then((res)=>
//    {
//       console.log("Fetching  Data 3..");
//        return api(3,30,"Hard").then((res)=>
//        {
//            console.log("sucess",res);
//            
//        })
//    })
//})


//callbackhell;
// function api(Id,temprature,cloudes, callbackHell)
// {
//    {
//      setTimeout(()=>
//        {
//        console.log(`${Id} Temprature is ${temprature}degree and cloudes  is${cloudes}`);
//        if(callbackHell)
//        {
//            callbackHell();
//        }
//        },4000)
//    }
// }

// console.log("Fetching  Data 1..");
//    api(1,30,"Normal",()=>
//{
//     console.log("Fetching  Data 2..");
//    api(2,30,"Normal",()=>
//    {
//           console.log("Fetching  Data 3..");
//           api(3,30,"Normal");  
//    });
//});

// IIFE Immediately invoked function Experssion;


// Console.log("Using Normal Function");
//(async function ()
// {
//    console.log("Fetching  Data 1..");
//    await api(1,30,"Normal");
//     console.log("Fetching  Data 2..");
//    await api(2,30,"Normal");
//     console.log("Fetching  Data 3..");
//    await api(3,30,"Normal");
//     console.log("Fetching  Data 4..");
//    await api(4,30,"Normal");
//      console.log("Fetching  Data 5..");
//    await api(5,30,"Normal");
//  
// })();

// Console.log("Used in Arrow function");

(async  ()=>

{

    console.log("Fetching  Data 1..");

    await api(1,30,"Normal");

    console.log("Fetching  Data 2..");

     await api(2,30,"Normal");

    console.log("Fetching  Data 3..");

     await api(3,30,"Normal");

    console.log("Fetching  Data 4..");

     await api(4,30,"Normal");

    console.log("Fetching  Data 5..");

      await api(5,30,"Normal");

    

})();
