const msg =()=>{
    console.log("Arrow Function")
}


let data =[10,20,30,40, "KIET",msg];
console.log(data);
data[5]();

// for(let i=0 ;i<data.length;i++){
//     console.log(`value of ${i} is ${data[i]}`);
// }

// for(let index in data){
//     console.log(`value of ${index} is at ${data[index]}`);
// }

// for(let value of data ){
//     console.log(`value of Array= ${value}`);
// }

data.forEach(value=> console.log(`value of Array= ${value}`));