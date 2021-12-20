import React,{useEffect} from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
// import Navbar from '../components/Navbar'
// import Sidebar from '../components/Sidebar'
import { homeObjOne,homeObjTwo,homeObjThree,info1,info2,info3}  from '../components/InfoSection/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'
import Video from '../videos/video.mp4'
import Video1 from '../videos/bluedata.mp4'
import Video2 from '../videos/earth.mp4'
const Home = ({toggle}) => {
    // const[isOpen,setIsOpen] =useState(false)

    // const toggle= () => {
    //     setIsOpen(!isOpen)
    // }
    useEffect(() => {
        window.scrollTo(0, 100)
        
      },[])
    return (
        <> 
        {/* <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/> */}
        <HeroSection toggle={toggle} {...info1} video={Video2}/>
       
        <InfoSection page="game" {...homeObjOne}/> 
       
        <HeroSection toggle={toggle} video={Video} {...info2}/>
        <InfoSection page="web" {...homeObjTwo}/>
        {/* <Services/> */}
        <HeroSection toggle={toggle}  video={Video1} {...info3}/>
        <InfoSection page="kids"  {...homeObjThree}/>
        
        <Footer/>
            
        </>
    )
}

export default Home
