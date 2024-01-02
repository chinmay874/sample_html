let a=[1,4,6,0,8,5,0,0,0];
let b=[];




/////////////////////   method 1  //////////////////////
// const value =()=>{
//     a.forEach(element => {
//         if(element>0){
//             b.push(element)
//         }
//     });
//     console.log(b);
// }

// value();

///////////////////  method 2   ////////////////
for(let i=0;i < a.length;i++){
    if(a[i]>0){
    b.push(a[i]);
}
}
console.log(b);


//html tags learn