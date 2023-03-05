import React, { useState } from 'react';

const AuthContext=React.createContext();


export const AuthProvider=(props)=>{
    const [login, setLogin] =useState(true);
let url;
const Auth=async(obj)=>{
    
if(login){
     url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBWBlfzADZbvqEDqq7SnQINQ80zhX_jxD8'
}else{
     url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBWBlfzADZbvqEDqq7SnQINQ80zhX_jxD8'
}

fetch(url, {
    method:'POST',
    body:JSON.stringify(obj),
    headers:{
        'Content-Type':'application/json'
    }
})
.then((res)=>{
    // res.then((resp)=>{
    //     console.log(resp)
    // })
    console.log(res)
}).catch((err)=>{
    console.log(err)
})
// try{
// const response=await fetch(url,{
//     method:'POST',
//     body:JSON.stringify(obj),
//     headers:{
//         'Content-Type':'application/json'
//     }
// })
// const data=await response.json()
// console.log(data)
// }
// catch(err){
// console.log(err);
// }
}


const switchAuthHandler=()=>{
    setLogin((prev)=>!prev)
}

    const values={
        switchAuth:switchAuthHandler,
        isLogin:login,
        authFunction:Auth
    }
    return (
        <AuthContext.Provider value={values} >
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContext;