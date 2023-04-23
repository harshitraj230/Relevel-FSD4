// let promise1 = new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         resolve(10);
//     },2000)
// })

// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(20);
//     },2000)
// })

// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(30);
//     },2000)
// })

// let sum=0;
// promise1.then((x)=>{
//     promise2.then((y)=>{
//         promise3.then((z)=>{
//             sum=x+y+z;
//             console.log(sum);
//         })
//     })
// })

// promise1.then((x)=>{
//     return 3*x;
// })
// .then((y)=>{
//     return 5*y;
// })
// .then((z)=>{
//     return 7*z;
// })
// .then((ans)=>{
//     console.log(ans);
// })

// let promise= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(10);
//     },3000);
// })

// promise.then((result)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(result*3)
//         },3000)
//     })
// })
// .then((result)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(result*5);
//         },3000)
//     })
// })
// .then((result)=>{
//     console.log(result);
// })

//  step1()
//  .then(result=>step2(result))
//  .then(result=>step3(result));

//userId
//get the user form a DB based on userId
//What are the services of the selected user
//Calculate the service cost from the users services

// function getUser(userId){
//     return new Promise((resolve,reject)=>{
//         console.log("calling DB");
//         setTimeout(()=>{
//             resolve({
//                 userId:userId,
//                 userName:"admin"
//             },1000)
//         })
//     })
// }

// function getServices(user){
//     return new Promise((resolve,reject)=>{
//         console.log("calling services API");

//         setTimeout(()=>{
            
//             resolve(['Email','VPN','CDN']);
//         },2000)
//     })
// }

// function getServiceCost(services){
//     return new Promise((resolve,reject)=>{
//         console.log("calling pricing API");

//         setTimeout(()=>{
//             resolve(services.length * 100);
//         },2000)
//     })
// };

// getUser(1234)
// .then((user)=>{
//     getServices(user)
//     .then(services=>{
//         getServiceCost(services)
//         .then(cost=>{
//             console.log(cost);
//         })
//     })
// })

// getUser(1234)
// .then(getServices)
// .then(getServiceCost)
// .then(console.log)

// const promise1= new Promise((resolve,reject)=>{
    
//     setTimeout(()=>{
//         resolve("hello 1");
//     },1000)
// })

// const promise2= new Promise((resolve,reject)=>{
    
//     setTimeout(()=>{
//         resolve("hello 2");
//         // reject("error");
//     },2000)
// })

// const promise3= new Promise((resolve,reject)=>{
    
//     setTimeout(()=>{
//         resolve("hello 3");
//     },3000)
// })

// Promise.all([promise1,promise2,promise3])
// .then(data=>{
//     console.log(data);
// })
// .catch(err=>{
//     console.log(err);
// })

// const promise1= new Promise((resolve,reject)=>{
    
//     setTimeout(()=>{
//         // reject("Pricing service is down");
//         resolve(10);
//     },2000)
// })

// const promise2= new Promise((resolve,reject)=>{
    
//     setTimeout(()=>{
//         resolve(20);
//         // reject("error");
//     },3000)
// })

// const promise3= new Promise((resolve,reject)=>{
    
//     setTimeout(()=>{
//         resolve(40);
//     },1000)
// })

// Promise.all([promise1,promise2,promise3])
// .then(data=>{
//     const ans= data[0] + data[1] + data[2];
//     console.log(ans);
// })
// .catch(err=>{
//     console.log(err);
// })