import request from "@/utlis/http";

export const onLogin = ({username,password,code})=>{
    return request({
        url:`/user/login?username=${username}&password=${password}&code=${code}`,
        method:'post',
    })
}

export const getImage=()=>{
    return request({
        url:'http://119.45.133.128:8089/api/sysUser/image',
        method:'post',
        responseType: 'blob'
    })
}