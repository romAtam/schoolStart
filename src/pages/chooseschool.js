import React from 'react'
import Choose from '../components/ChooseSchool'
const Chooseschool = ({schoolOpen,toggleSchool}) => {
    return (
        <div>
            <Choose schoolOpen={schoolOpen} toggle={toggleSchool}/>
        </div>
    )
}

export default Chooseschool
