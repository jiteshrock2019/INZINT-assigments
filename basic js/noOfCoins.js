// var n = prompt("enter the no to find no of coins it contains");
var n = 53;
var c = 0;

if(n > 10){
    c = c+n/10;
    n= n%10;
}

if(n>=5){
    c=c+n/5;
    n=n%5;
}

if(n>=2){
    c=c+n/2;
    n=n%2;
}

if(n==1){
    c++;
}

console.log("The number of coins contained by "+ n +"is "+ c);