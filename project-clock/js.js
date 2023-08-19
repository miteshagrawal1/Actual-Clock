let hhand = document.getElementById('hhand')
let mhand = document.getElementById('mhand')
let shand = document.getElementById('shand')
let date = new Date();
// let a = date.getSeconds();
// let a=0;
// setInterval(() => {
//     a++;
//     shand.style.transform += "rotate(6deg)"
//     if(a%60 == 0){
//         mhand.style.transform += "rotate(6deg)";
//     }
//     console.log(a)
// }, 1000);

let a= date.getSeconds();
let d=a;
let b= date.getMinutes();
let c= date.getHours();
console.log(c)
shand.style.transform = `rotate(${(a/60) * 360}deg)`
mhand.style.transform = `rotate(${b*6}deg)`
hhand.style.transform = `rotate(${30*c + 0.5*b}deg)`
setInterval(() => {
    shand.style.transform += `rotate(6deg)`;
    d++;
    if(d%60 == 0){
        mhand.style.transform += `rotate(6deg)`;
    }
    console.log(d)
}, 1000);
// setInterval(() => {
//     mhand.style.transform += `rotate(6deg)`;
//     console.log(a)
// }, (60000 - a*1000));


// setInterval(() => {
//     let sec = date.getSeconds();
//     let secdeg = ((sec/60)*360);
//     shand.style.transform = `rotate(${secdeg}deg)`;
// }, 1000);