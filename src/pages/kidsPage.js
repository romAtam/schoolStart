import React,{useEffect} from 'react'
import Page from '../components/Services'
import { animateScroll as scroll } from "react-scroll";
const KidsPage = () => {
    useEffect(() => {
        toggleHome()
       }, []);
       const toggleHome = () => {
         scroll.scrollToTop();
       };
    return (
        <div>
            <Page/>
        </div>
    )
}

export default KidsPage
