import React from 'react'
import Cabinet from '../components/Cabiinet'
import {Redirect} from "react-router-dom"
import useAuth from "../hooks/use-auth"
const CabinetPage = () => {
    const{isAuth} = useAuth()
    return (
        <div>
        {   !isAuth&& <Redirect to="/signin"/>}
             <Cabinet/>
        </div>
    )
}

export default CabinetPage
