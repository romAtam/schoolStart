import React,{useState,useEffect} from 'react';
import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom'
export const Team=styled.div`


position: absolute;
top:100px;
width: 100%;
padding: 17px 20px;
z-index:4;
background: rgba(0,0,0,0.7);
display: grid;
grid-template-columns:repeat(auto-fit,minmax(200px,300px));
row-gap:10px;
justify-content: center;
align-items: center;

/* max-height: 340px; */
/* padding: 30px; */
border-bottom: 2px solid #3DB2FF;

transition: all 0.2s ease-in-out;
height:100vh;
overflow: scroll;
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background:black;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #01bf71;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background:#3DB2FF;
}

&:hover{
   
    border-right: 3px solid #3DB2FF;
  
/* box-shadow: 2px 2px 7px 2px #3DB2FF; */
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`
export const TeamUser=styled.div`


display: grid;
grid-template-columns:1fr;
grid-gap:20px;
justify-content: center;
justify-items: center;
align-items: center;
border-radius: 10px;
/* max-height: 340px; */
padding: 30px;
border-bottom: 2px solid #3DB2FF;
box-shadow: 0px 0px 7px 0px #01bf71;
transition: all 0.2s ease-in-out;
&:hover{
   
    border-right: 3px solid #01bf71;;
    border-bottom: 3px solid #01bf71;
box-shadow: 2px 2px 7px 2px #3DB2FF;
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`
const TeamData = () => {
    const[teamdata,setTeam]=useState([{login:"1"}]);
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
        <Team>
         {teamdata.map(user=>{
             return(
                 <div key={user.login}>
                       <LinkR  to={`/team/${user.login}`}>
                   <TeamUser >
                     <img style={{width: '60%',borderRadius:"100%"}} src={user.avatar_url }alt="user" />
                     <p style={{color: 'white'}}>{user.login}</p>
                 </TeamUser>
                
                </LinkR>

                 </div>
              
              

             )
         })}
            
        </Team>
    )
}

export default TeamData
