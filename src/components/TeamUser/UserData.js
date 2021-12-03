import React,{useState,useEffect} from 'react';
import styled from "styled-components";
import{useParams}from "react-router-dom"
import LeaderData, { LeadUser } from './leaderTeam';
import { ButtonR } from '../ButtonElement';
import {HeroBtnWrapper,ArrowForward,ArrowRight} from "../HeroSection/HeroElements"

export const User=styled.div`

width: 100%;
max-width:1400px;
margin: 0 auto;
margin-top: 0px;
display: grid;
grid-template-columns:repeat(auto-fit,minmax(100px,1200px));
grid-template-rows: 1fr 5fr;
justify-content: center;
background: transparent;
grid-gap:20px;

font-size:20px;

border-radius: 10px;
/* max-height: 340px; */
padding: 30px;
/* border-bottom: 2px solid #3DB2FF;
box-shadow: 0px 0px 7px 0px #01bf71; */
transition: all 0.2s ease-in-out;

 &:hover{
   
    /* border-right: 3px solid #01bf71;
    border-bottom: 3px solid #01bf71; */
box-shadow: 2px 2px 7px 2px #3DB2FF;
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
} 
`
const Part1=styled.div`

line-height:2rem;
display: grid;
grid-template-columns: repeat(auto-fit,minmax(100px,200px));
align-items: center;
justify-items: center;
justify-content: center;
text-align: center;
grid-gap:20px;
/* border-bottom:3px solid #01bf71; */

`
const UserData = () => {
    const[userdata,setUser]=useState({});
    const[hover,setHover]=useState(false);
    const onHover=()=>{
        setHover(!hover);
    }
  const params=useParams();
  console.log(params);
    useEffect(() =>{

        const userfetch=async() =>{
            const userJson=await fetch(`https://api.github.com/users/${params.id}`)
            const user =await userJson.json()
            console.log(user);
            setUser(user);
        }
        userfetch();
    },[])


    const leader={
        display: "grid",
        gridTemplateColumns:"repeat(auto-fit,100px)",
        textAlign: 'center',
        background:"black"
    }
    return (
      
         
                 <User >
                  
                     <Part1>

                          <LeadUser>
                
                      <img style={{borderRadius:"20%",boxShadow: "2px 2px 17px 2px #3DB2FF"}} width="100%" src={userdata.avatar_url }alt="user" />
                     </LeadUser>
                     <div >
                      <h2 style={{color:"#3DB2FF"}}>TEAM LEAD</h2>
                        <p style={{color: 'white'}}>{userdata.name}</p>
                        <HeroBtnWrapper>
                   <ButtonR dark='true' primary='true' onMouseLeave={onHover} onMouseEnter={onHover} to='signup'>Запишіться{hover?<ArrowForward/>:<ArrowRight/>}</ButtonR>

               </HeroBtnWrapper>
                     </div>
                         </Part1>
                         {/* <p style={{color:"orange",margin:"10px 30px 10px 0"}}>students</p> */}
                         <LeaderData num={{start:6,end:11}}/>

                  
                
                
                    
                    
                    
                   
                 </User>

             )
      
      
    
}

export default UserData