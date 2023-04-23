// function getUsers(){
//     return [{name:"Utkarsh",email:"utmalik@amazon.com"},
//             {name:"Rahil",email:"rahul@gmail.com"}];
// }
// function findUser(name){
//     var users=[];
//     setTimeout(()=>{
//         users=getUsers();
//     },1000)
//     const user=users.find((user)=>user.name===name);
//     return user;
// }
// console.log(findUser('Utkarsh'));

const database={usersData:[{name:"Utkarsh",email:"utmalik@amazon.com"},
{name:"Rahul",email:"rahul@gmail.com"}]}

// function getUsers(fn){
//     setTimeout(()=>{
//         const usersData=database.usersData;
//         fn(usersData);
//     },2000)
// }

// function findUser(name,fn){
//     getUsers((usersData)=>{
//         const user=usersData.find((user)=>user.name===name);
//         fn(user);
//     });
// }
// findUser("Rahul",(user)=>{
//     console.log(`My name is ${user.name} and my email is ${user.email}`);
// });

function getUsers(fn){
    setTimeout(()=>{
        usersData=database.usersData;
        fn(usersData);
    },2000)
}
function findUser(name,fn){
    getUsers((users)=>{
        const user=users.find((user)=>user.name===name);
        fn(user);
    })
}
const user=findUser("Rahul",(user)=>{
    console.log(`My name is ${user.name} and my email is ${user.email}`);
});
