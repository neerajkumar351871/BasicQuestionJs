// First method
//function Hello()
//{
//    console.log("Hello world");
//}
//
//setTimeout(Hello,6000)

// Second Method to setTimeout

//setTimeout(()=>
//    {
//   console.log("I am  Run Succssfully in the World");
//    },4000)

// Example of asyncrnous
//console.log("One");
//console.log("Two");
//console.log("Two");
//setTimeout(()=>
//{
//    let a=10;
//    let b=20;
//    console.log("Addation",a+b);
//},2000)

// Callback Function

//function add(a,b)
//{
//    console.log("Addatation",a+b);
//}
//function cal(a,b,caladd)
//{
//    caladd(a,b);
//}
//cal(2,2, add);
//function greet(name)
//{
//    console.log("Welcome TO ",name,'Singh');
//}
//function send(name,sendname)
//{
//    sendname(name);
//}
// setTimeout(()=>
//    {
//        send('Neeraj',greet);
//   },4000)
//function logics(array)
//{
//    if(array/2==0)
//    {
//      printData(array);
//    }
//    else{
//        printData(array);
//    }
//}
//
//function printData(Data)
//{
//    console.log(Data)
//}
//function sendData(array,sendArray)
//{
//    sendArray(array);
//}
//
//setTimeout(()=>
//    {
//       sendData(20,logics);
//    },3000)

//callbackHell

//function database(id)
//{
//setTimeout(()=>
//    {
//        console.log("DataBase ID:",id);
//    },3000)
//}

//find user id and password.
//function instagram(id,password,check)
//{
//    setTimeout(()=>{
//    if((id==='Neeraj'&& password===123)||( id ==='Anuj'&& password===1234)||(id==="Prince"&& password===12345))
//    {
//   // console.log(`Your id is:${id}and Password is:${password}.`)
//   console.log("Login succssfully")
//    if(check)
//    {
//        check()
//    }
//    }
//    else
//    {
//    //console.log(`Id: ${id} Password: ${password}not found.`)
//    console.log("User are not exited");
//    if(check)
//    {
//        check();
//    }
//    }
//    },3000)
//  
//}
//
//instagram("Neeraj",123,()=>
//{
//    instagram("Prince",2345,()=>
//    {
//        instagram("Anuj",1234);
//    })
//})

function simple(data, callback) {
    setTimeout(() => {
        console.log("Data is:", data);
        if (callback) {
            callback();
        }
    }, 300)
}
//simple(1,()=>
//{
//    simple(2,()=>
//    {
//        simple(3),()=>
//        {
//            simple(4);
//        }
//    });
//})
//simple(1, () => {
//    console.log("Wait data2...")
//    setTimeout(() => {
//        
//        simple(2, () => {
//            console.log("Wait data3...")
//            setTimeout(() => {
//                
//                simple(3, () => {
//                    console.log("Wait data4...")
//                    setTimeout(() => {
//                        simple(4);
//                    }, 1200);
//                });
//            }, 7000);
//        });
//    }, 4000);
//});


let loginSuccess = false;
let errorPrinted = false; 

function getdata() {
    const instagramdata = [
        { Id: 'Neeraj kumar', password: 1234 },
        { Id: 'AnujKumar', password: 12345 },
        { Id: "Princekumar", password: 123456 },
        { Id: "Arsh", password: 1234567 }
    ];

    for (let instadata of instagramdata) {
        Instagram(instadata );
    }
}

function Instagram(Finaldata) {
    //let ides = 'Neeraj kumar';
    //let passwords = 1234;

    setTimeout(() => {
        if (Finaldata.Id === ides && Finaldata.password === passwords) {
            if (!loginSuccess) {
                loginSuccess = true;
                console.log("User are Login");
            }
        } else {
            if (!loginSuccess && !errorPrinted) {
                errorPrinted = true;
                console.log("Id Password are incorrect");
            }
        }
    }, 4000);
}

getdata();



