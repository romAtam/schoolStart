import React from 'react'
import Cabinet from '../components/Cabiinet'
import {Redirect} from "react-router-dom"
const CabinetPage = () => {
    return (
        <div>
            <Redirect to="/signin"/>
             <Cabinet/>
        </div>
    )
}

export default CabinetPage
