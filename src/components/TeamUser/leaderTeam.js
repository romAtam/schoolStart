import React,{useState,useEffect} from 'react';
import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom'

export const ImgWrap=styled.img`

width: 70%;

margin-top: 8px;
box-shadow: 1px 1px 7px 1px #3DB2FF;
transition: all 0.3s ease-in-out;
border-radius:100%;

&:hover{
    box-shadow: 2px 2px 87px 2px #3DB2FF;
/* border:0.5px solid yellow; */
border-radius:30px;

}
`
export const UserName=styled.p`
font-size: 1rem;
font-weight:100;
color:white;
transition: all 0.5s ease;
&:hover{
    color:yellow;
    transition: all 0.5s ease;
    font-weight:300;
}


`

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
height:600px;

overflow: scroll;
scroll-behavior: smooth;
/* width */
::-webkit-scrollbar {
  width: 1px;
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

/* box-shadow: 0px 0px 7px 0px #01bf71; */

 border-top: 2px solid #3DB2FF;
   
color:white;
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    border-radius: 10px;
    padding: 30px;
transition: all 0.2s ease-in-out;
&:hover{
    padding:10px;
   border-radius: 50px;
/* max-height: 340px; */
border-top: 1px solid #3DB2FF;
border-bottom: 1px solid #3DB2FF;
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
         {leaddata.map(user=>{
             return(
                 <div key={user.login}>
                       <LinkR style={{textDecoration: 'none'}}  to={`/team/${user.login}`}>
                   <LeadUser >
                     <ImgWrap  src={user.avatar_url }alt="user" />
                     <UserName >{user.login}</UserName>
                 </LeadUser >
                
                </LinkR>

                 </div>
              
              

             )
         })}
            
        </LeadTeam>
    )
}

export default LeaderData