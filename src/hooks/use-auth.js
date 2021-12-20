import{useSelector} from "react-redux"



const useAuth=()=>{
    const {email, token,id}=useSelector(state=>state.student)
    return {
        isAuth:!!email,
        email,
        token,
        id
    }
}
export default useAuth;