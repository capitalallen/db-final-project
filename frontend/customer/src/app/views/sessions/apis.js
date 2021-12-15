import {check_user,add_user} from '../../util'

export const checkPassword = async(email,password)=>{
    const userObj={
        email:email,
        password:password,
        type:"C"
    }
    const res=await check_user(userObj)
    console.log(res)
    if (res){
        return res.data; 
    } else {
        return res;
    }
}

export const signup=async(email,password)=>{
    const userObj={
        email:email,
        type:"C",
        password:password
    } 
    console.log(userObj);
    const res=await add_user(userObj);
    if (res){
        return true 
    }else{
        return false
    }
}