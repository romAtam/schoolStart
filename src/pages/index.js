import React,{useState} from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { homeObjOne,homeObjTwo,homeObjThree,info1,info2,info3}  from '../components/InfoSection/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'
import Video from '../videos/video.mp4'
import Video1 from '../videos/bluedata.mp4'
import Video2 from '../videos/earth.mp4'
const Home = () => {
    const[isOpen,setIsOpen] =useState(false)

    const toggle= () => {
        setIsOpen(!isOpen)
    }
    return (
        <> 
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection {...info1} video={Video2}/>
       
        <InfoSection {...homeObjOne}/> 
       
        <HeroSection video={Video} {...info2}/>
        <InfoSection {...homeObjTwo}/>
        <Services/>
        <HeroSection  video={Video1} {...info3}/>
        <InfoSection {...homeObjThree}/>
        <Footer/>

            
        </>
    )
}

export default Home
