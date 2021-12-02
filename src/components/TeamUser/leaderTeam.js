import React,{useState,useEffect} from 'react';
import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom'
export const LeadTeam=styled.div`



z-index:999;
background: transparent;
display: grid;
grid-template-columns:repeat(auto-fit,minmax(0px,200px));
grid-gap:20px;
justify-content: center;
align-items:center;

/* max-height: 340px; */
/* padding: 30px; */
/* border-bottom: 2px solid #3DB2FF; */

transition: all 0.2s ease-in-out;
height:400px;

overflow: scroll;
scroll-behavior: smooth;
/* width */
::-webkit-scrollbar {
  width: 12px;
}

/* Track */
::-webkit-scrollbar-track {
  background:black;
}



/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background:#3DB2FF;
}

&:hover{
   
    /* border-right: 3px solid #01bf71;; */
  
/* box-shadow: 2px 2px 7px 2px #3DB2FF; */
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`
export const LeadUser=styled.div`


display: grid;
grid-template-columns:repeat(auto-fit,minmax(100px,400px));
grid-gap:20px;
margin:8px ;
justify-content: center;
justify-items: center;
align-items: center;
border-radius: 10px;
/* max-height: 340px; */

border-bottom: 2px solid #3DB2FF;
/* box-shadow: 0px 0px 7px 0px #01bf71; */
transition: all 0.2s ease-in-out;
&:hover{
   
    border-right: 3px solid  #3DB2FF;
    border-bottom: 3px solid  #3DB2FF;
box-shadow: 2px 2px 7px 2px #3DB2FF;
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`
const LeaderData = ({num}) => {
    const[leaddata,setTeam]=useState([{login:"1"}]);
    useEffect(() =>{

        const teamfetch=async() =>{
            const teamJson=await fetch("https://api.github.com/users")
            const team =await teamJson.json()
            console.log(team);
            setTeam(team);
        }
        teamfetch();
    },[])
    return (
        <LeadTeam>
         {leaddata.slice(num.start,num.end).map(user=>{
             return(
                 <div key={user.login}>
                       <LinkR  to={`/team/${user.login}`}>
                   <LeadUser >
                     <img style={{width: '70%',borderRadius:"20px",marginTop: '8px'}} src={user.avatar_url }alt="user" />
                     <p style={{color: 'white'}}>{user.login}</p>
                 </LeadUser >
                
                </LinkR>

                 </div>
              
              

             )
         })}
            
        </LeadTeam>
    )
}

export default LeaderData
