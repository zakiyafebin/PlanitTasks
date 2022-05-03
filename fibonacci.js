// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

function getNumber(prompt) {
    let readlineSync = require('readline-sync');
    return parseInt(readlineSync.question(prompt));
}
let n = getNumber('Enter the number n : ');
//nth number in the fibonacci series given n
function fibonacciTermN(n){

    let fib1 = 0;
    let fib2 = 1;
    let fib3;
    if(n <= 2){
        if(n==1){
            console.log(`${n} nd/rd/th term of fibonacci series is : ${fib1}`);
        }
        else if(n==2){
            console.log(`${n} nd/rd/th term of fibonacci series is : ${fib2}`);
        }
        else{
            console.log(`Please enter a number greater than zero`);
        }
    }
    else{
        for(let i =2; i<n; ++i){
            fib3 = fib1 + fib2;
            fib1 = fib2;
            fib2 = fib3;
            //console.log(fib3);
        }
        console.log(`${n} nd/rd/th term of fibonacci series is : ${fib3}`);
    }
    
}
fibonacciTermN(n);

let F = getNumber('Enter a number to check wheather it is fibonacci or not: ');


//nearest Fibonocci number
function nearestFib(F){
    let fib1 = 0;
    let fib2 = 1;
    let count = 2;
    let fib3;
    if(F<2){
        if(F==0){
            console.log(`${F} is a fibonacci number!!!`);
            count = 1;
            console.log(`Index is : ${count}`);
        }
        else if(F ==1){
            console.log(`${F} is a fibonacci number!!!`);
            count = 2 ;
            console.log(`Index is : ${count}`);

        }
    }
    else{
        do{
            fib3 = fib1 + fib2;
            fib1 = fib2;
            fib2 = fib3;
            count ++;
        }while(fib3 <= F)
        if(F === fib1){
            console.log(`${F} is a fibonacci number!!!`);
            console.log(`Index is : ${count-1}`);
        }
        else{
            let nearFib;
            // console.log(F-fib1)
            // console.log(fib3-F)
            if((F-fib1)< (fib3-F)){
                nearFib = fib1;
                count -=1;
            }
            else{
                nearFib = fib3
                
            }
            console.log(`${F} is not a Fibonacci number.`);
            console.log(`Nearest fibonacci number is ${nearFib}. Closest index is ${count}.`)
        }

    }
    

}
nearestFib(F);