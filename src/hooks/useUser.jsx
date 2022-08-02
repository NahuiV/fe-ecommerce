import { WindowSharp } from "@mui/icons-material"
import { useContext,useCallback } from "react"
import Context from '../context/UserContext'
import {loginService} from '../services/AuthenticationService'

export const useUser = () =>{
    const [jwt,setJWT] = useContext(Context)
    
    const login = useCallback(({username,password}) => {
        loginService({username,password})
            .then(res =>{
                window.sessionStorage.setItem('jwt',jwt)
                setJWT(res)
            })
            .catch(err =>{
                window.sessionStorage.removeItem('jwt')
                console.error(err)
            })
    },[setJWT])

    const logout = useCallback(()=>{
        logout({username,password})
            .then(res =>{
                setJWT(res)
            })
            .catch(err =>{
                console.error(err)
            })
    },[null])

    return {login,logout}
}