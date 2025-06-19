//class cars
//{
//    start()
//    {
//        console.log("Start the car");
//    }
//    Stop()
//    {
//        console.log("Stop The car");
//    }
//    Brands(Brand)
//    {
//        this.Brands=Brand;
//        console.log(this.Brands);
//    }
//}
//let car=new cars;
//car.Brands("X056");
//class data
//{
// FullName(Name)
// {
//    console.log("Full Name is:",Name)
// }
// depart(depar)
// {
//       console.log("Full Name is:",depar)
// }
//}
//let  Details= new data;
//Details.FullName("Neeraj kumar");
//Details.depart("Bca");

//const Detail=
//{
//    salaryTax(salary)
//    {
//        console.log("Calculate the salary",salary);
//    }
//}
//let Mohan=
//{
//    getSalary()
//    {
//        console.log("plese get the salary");
//    }
//}
//Mohan.__proto__=Detail;
//console.log(Mohan.salaryTax(10000));


//calculate  salary through prototyping
//const employe=
//{
//    salaryTax(salary)
//    {
//        let tolalSalry=salary/100*30;
//        console.log('Before your salary:',salary)
//        console.log("After apply the tax In your salary:",tolalSalry)
//    }
//}
//let Mohan=
//{
//    getSalary(getsal)
//    {
//    console.log("Company  Credit the salary:",getsal)
//   
//    }
//}
//Mohan.__proto__=employe;
//let salarys=10000
//Mohan.getSalary(10000);
//employe.salaryTax(100000)

const Multiplevaluecalca = {
    evens: [],
    odds: [],
    primes: [],
    nonprimes: [],

    evenOdd(numbers) {
        for (let number of numbers) {
            if (number % 2 === 0) {
                this.evens.push(number);
            } else {
                this.odds.push(number);
            }
        }
    },

    isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    },

    primeNumber(numbers) {
        for (let number of numbers) {
            if (this.isPrime(number)) {
                this.primes.push(number);
            } else {
                this.nonprimes.push(number);
            }
        }
    },

    Values() {
        console.log("Even Numbers:", this.evens);
        console.log("Odd Numbers:", this.odds);
        console.log("Prime Numbers:", this.primes);
        console.log("Non-Prime Numbers:", this.nonprimes);
    }
};

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];``
Multiplevaluecalca.evenOdd(array);
Multiplevaluecalca.primeNumber(array);
Multiplevaluecalca.Values();

