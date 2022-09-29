const commonToken= "token"
const commonInfor="infor"

const setToken= (token)=>{
    return localStorage.setItem(commonToken,token)
}

const getToken= ()=>{
    return localStorage.getItem(commonToken)
}

const setUserInfor=(infor)=>{
    return localStorage.setItem(JSON.stringify(commonInfor,infor))
}

const getUserInfor = ()=>{
    return JSON.parse(localStorage.getItem(commonInfor))
}

export{setToken,getToken,setUserInfor,getUserInfor}