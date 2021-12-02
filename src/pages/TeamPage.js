import React,{useEffect} from 'react'
import Team from '../components/Team'
import { animateScroll as scroll } from "react-scroll";
const TeamPage = () => {
    useEffect(() => {
        toggleHome()
       }, []);
       const toggleHome = () => {
         scroll.scrollToTop();
       };
    return (
        <div>
            <Team/>
        </div>
    )
}

export default TeamPage

