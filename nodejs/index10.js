// function job(callback1,callback2){
//     setTimeout(()=>{
//         callback1();
//     },2000)
//     var count=0;
//     var timer= setInterval(()=>{
//         callback2();
//         count++;
//         if(count===3){
//             clearInterval(timer);
//         }
//     },1000)
// }

// function job(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("hello world")
//         },2000)
//     })
// }

// function job(data){
//     return new Promise((resolve,reject)=>{
//         if(isNaN(data)){
//             reject("error");
//         }
//         if(data%2){
//             setTimeout(()=>{
//                 resolve("odd");
//             },1000)
//         }else{
//             setTimeout(()=>{
//                 reject("even");
//             },2000)
//         }
//     })
// }

// function job(data){
//     if(isNaN(data)){
//         return new Promise((resolve,reject)=>{
//             reject("error");
//         })
//     }

//     if(data%2){
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 resolve("odd");
//             },1000)
//         })
//     }else{
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 reject("even")
//             },2000)
//         })
//     }
// }

// Promise.race
// function delay(time){
//     return new Promise(function(resolve){
//         setTimeout(resolve, time, 'success' + time);
//     });
// }

// Promise.race((delay(500), delay(100))).then(function(data){
//     console.log(data);
// });

// let central = require('./central'),
//     db1 = require('./db1'),
//     db2 = require('./db2'),
//     db3 = require('./db3'),
//     vault = require('./vault'),
//     mark = require('./mark');
// module.exports = function(id){

//     return new Promise((resolve,reject)=>{
        
//         let userDetails={};

//         central(id)
//         .then((dbNum)=>{

//             let correctDB;

//             if(dbNum==="db1"){
//                 correctDB=db1;
//             }
//             else if(dbNum==="db2"){
//                 correctDB=db2;
//             }else{
//                 correctDB=db3;
//             }

//             correctDB(id)
//             .then((user)=>{

//                 userDetails.userName=user.userName
//                 userDetails.country=user.country;

//             })
//             .catch(()=>{
//                 reject(`Error ${dbNum}`)
//             })

//             vault(id)
//                 .then((personalDetails)=>{
    
//                     userDetails.firstName=personalDetails.firstName;
//                     userDetails.lastName=personalDetails.lastName;
//                     userDetails.email=personalDetails.email;

//                     mark(id);

//                     resolve(userDetails);
    
//                 })
//                 .catch(()=>{
//                     reject("Error Vault")
//                 })
           
//         })
//         .catch((err)=>{
//             reject("Error central");
//         })
//     })
// }
