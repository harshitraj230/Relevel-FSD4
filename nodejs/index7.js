//Promises

//by default promise is a javascript object that encapsulates the result of an asyc operation

//Promise object
//Pending, Fullfilled, Rejected

// const promise= new Promise((resolve,reject)=>{
    
//     let dbOperation=true;

//     if(dbOperation){
//         resolve();
//     }else{
//         reject();
//     }
// })

// promise
// .then(()=>{
//     console.log("successCall"); 
// })
// .catch(()=>{
//     console.log("some error");
// })


const database={usersData:[{name:"Utkarsh",email:"utmalik@amazon.com"},
{name:"Rahul",email:"rahul@gmail.com"}]}

function getUsers(){

    let successCall=true;

    return new Promise((resolve,reject)=>{
        console.log("Promise in pending state");
        setTimeout(()=>{
            if(successCall){
                console.log("Promise in fulfilled state");
                resolve(database.usersData)
            }else{
                console.log("Promise in rejected state");
                reject('Failed to make a DB call');
            }
        },2000);
    })
}
getUsers()
.then((users)=>{
    console.log(users);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log("Promise in settled state");
})