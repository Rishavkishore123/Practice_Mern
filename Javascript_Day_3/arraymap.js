let value= [1,2,3,4,5,6,7,8,9];

value.push(11);


console.log(value);

value.map(item=>console.log(`value of x 10=${item*10}`));
let sumValue = value.reduce((a,b)=> a+b);

console.log(`Sum of array ${sumValue}`);

let mulValue = value.reduce((a,b)=> a*b);

console.log(`Sum of array ${mulValue}`);


let evenNo =value.filter((item=> item%2===0));
console.log(evenNo);


