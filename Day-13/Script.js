function userDetails() {
    let Username = document.querySelector("#Username").value;
    let lastName = document.querySelector("#Last").value;
    let email = document.querySelector("#email").value;
    let contactNo = document.querySelector("#phone").value;
    let DOB = document.querySelector("#dob").value;
    let gender = document.querySelector("#gender").value;
    let password = document.querySelector("#password").value;
    let confirmPassword = document.querySelector("#confirm-password").value;
    DeepDetails.Username(Username, lastName);
    DeepDetails.Email(email);
    DeepDetails.contact(contactNo);
    DeepDetails.Dob(DOB);
    DeepDetails.gender(gender);
    DeepDetails.passwordverification(password,confirmPassword);
    
    
}


let DeepDetails = {
    Username: function (Username, lastName) {
        FUllname=Username+lastName;
      Employedata.push(FUllname);
    },
    Email:function(email)
    {
 Employedata.push(email);
    },
    contact:function(Contact)
    {
       Employedata.push(Contact);
        
    },
    Dob:function(dob)
    {
      Employedata.push(dob);
    },
    gender:function(gender)
    {
    Employedata.push(gender);
    },
    passwordverification:function(password,confirmPassword)
    {
        let finalpassword=0;
     if (password == confirmPassword) {
        finalpassword=password
    } else {
        let confirmInput = document.querySelector("#confirm-password");
        confirmInput.style.border = '2px solid red'; 
        let errorMsg = document.querySelector("#error-msg");
        if (errorMsg) {
            errorMsg.innerText = "Passwords do not match!";
        }
        let btn = document.querySelector("#btn");
        btn.disabled = true;
    }
         Employedata.push(finalpassword);
    }
   
};
let btn=document.querySelector("#btn");
btn.addEventListener('click',(items)=>
{
    items.preventDefault();
   userDetails();
}
)

let Employedata=[];
 console.log(Employedata);

// Write the professinoal codes
//let employeeData = [];
//
//function collectUserDetails() {
//    const user = {
//        firstName: getValue("#Username"),
//        lastName: getValue("#Last"),
//        email: getValue("#email"),
//        phone: getValue("#phone"),
//        dob: getValue("#dob"),
//        gender: getValue("#gender"),
//        password: getValue("#password"),
//        confirmPassword: getValue("#confirm-password"),
//    };
//
//    if (!validatePasswords(user.password, user.confirmPassword)) {
//        showPasswordError();
//        return;
//    }
//
//    storeUserData(user);
//    console.log(employeeData);
//}
//
//function getValue(selector) {
//    return document.querySelector(selector).value.trim();
//}
//
//function validatePasswords(password, confirmPassword) {
//    return password === confirmPassword && password !== "";
//}
//
//function showPasswordError() {
//    const confirmInput = document.querySelector("#confirm-password");
//    confirmInput.style.border = "2px solid red";
//
//    const errorMsg = document.querySelector("#error-msg");
//    if (errorMsg) {
//        errorMsg.innerText = "Passwords do not match!";
//    }
//
//    const btn = document.querySelector("#btn");
//    btn.disabled = true;
//}
//
//function storeUserData(user) {
//    const fullName = `${user.firstName} ${user.lastName}`;
//    employeeData.push({
//        fullName: fullName,
//        email: user.email,
//        phone: user.phone,
//        dob: user.dob,
//        gender: user.gender,
//        password: user.password
//    });
//}
//
//document.querySelector("#btn").addEventListener("click", (e) => {
//    e.preventDefault();
//    collectUserDetails();
//});


