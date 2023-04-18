export const getToken =()=>{
    if(localStorage.getItem("jwtoken")){
        return JSON.parse(localStorage.getItem("jwtoken"))
    }else{
        return false
    }
}