// let studentInfo= {
//     rollno:1,
//     name:"Rishav",
//     course: "MCA",
//     college: "KIET",
//     marks: [2,3,4,5,6],
//     music: ()=> console.log("Play Music"),
//     play: function playfun(){console.log("Play Cricket")},
// }

// let arrayvalue= [studentInfo, studentInfo];
// arrayvalue.forEach(item=>console.log(item.marks));

// console.log(studentInfo);
// console.log(studentInfo.name);
// console.log(studentInfo.marks);

//  studentInfo.marks.forEach(value=>(`value of student marks ${value}`));

// console.log(studentInfo.music());
// console.log(studentInfo.play());


let ipl={
    name:"csk",
    matches: 20,
    stadium: 5,
    public: 45,
}

let array=[ipl];
array.forEach(item => console.log(item.stadium));

array.map(items =>console.log(items.public));