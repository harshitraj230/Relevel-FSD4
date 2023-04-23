//Async Await

//async operations

//await async

// function getUser(userId){
//     return new Promise((resolve,reject)=>{
//         console.log("calling DB");
//         setTimeout(()=>{
//             resolve({
//                 userId:userId,
//                 userName:"admin"
//             })
//             // reject("error")
//             },1000)
//         })
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

// async function calculateCost(userId){
//     let user = await getUser(userId);
//     let services = await getServices(user);
//     let cost = await getServiceCost(services);
//     return cost;
// }

// calculateCost(1234)
// .then(console.log)

// async function f1(){
//     return "hello";
// }

// // console.log(f1());

// f1()
// .then(data=>{
//     console.log(data);
// })

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
//         reject("hello 3");
//     },3000)
// })

// async function calculateSum(){
//     return await Promise.all([promise1,promise2,promise3]);
// }

// calculateSum()
// .then(data=>{
//     console.log(data);
// })

// function getUser(userId){
//     return new Promise((resolve,reject)=>{
//         console.log("calling DB");
//         setTimeout(()=>{
//             resolve({
//                 userId:userId,
//                 userName:"admin"
//             })
//             // reject("error")
//             },1000)
//         })
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

// async function calculateCost(userId){
//     let user = await getUser(userId);
//     let services = await getServices(user);
//     let cost = await getServiceCost(services);
//     return cost;
// }

// calculateCost(1234)
// .then(console.log)// function getUser(userId){
//     return new Promise((resolve,reject)=>{
//         console.log("calling DB");
//         setTimeout(()=>{
//             resolve({
//                 userId:userId,
//                 userName:"admin"
//             })
//             // reject("error")
//             },1000)
//         })
// }



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
//         reject("Something went wrong");
//     },3000)
// })

// async function calculateSum(){
//     try{
//     return await Promise.all([promise1,promise2,promise3]);
//     }
//     catch(err){
//         return err;
//     }
// }

// calculateSum()
// .then(data=>{
//     console.log(data);
// })

//Error Handling

function getUser(userId){
    return new Promise((resolve,reject)=>{
        console.log("calling DB");
        setTimeout(()=>{
            resolve({
                userId:userId,
                userName:"admin"
            })
            // reject("error")
            },1000)
        })
}

function getServices(user){
    return new Promise((resolve,reject)=>{
        console.log("calling services API");

        setTimeout(()=>{
            
            resolve(['Email','VPN','CDN']);
        },2000)
    })
}

function getServiceCost(services){
    return new Promise((resolve,reject)=>{
        console.log("calling pricing API");

        setTimeout(()=>{
            reject("Pricing sevice is down");
        },2000)
    })
};

async function calculateCost(userId){
    try{
    let user = await getUser(userId);
    let services = await getServices(user);
    let cost = await getServiceCost(services);
    return cost;
    }catch(err){
        return "Something went wrong";
    }
}

calculateCost(1234)
.then(console.log)