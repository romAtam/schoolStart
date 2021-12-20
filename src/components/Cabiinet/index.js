
import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import {db} from "../../firebase"
import {collection,getDocs,addDoc} from "firebase/firestore"
import { useParams } from 'react-router-dom'

const Container= styled.div`
color:white;
display: grid;
grid-template-columns:repeat(auto-fit,minmax(400px,1fr));
padding:2rem;
grid-gap: 40px;
justify-content: center;
align-items: center;

`
const Course = styled.form`
display:grid ;
grid-gap: 20px;
margin:1rem 2rem;

border:6px solid #103;
/* justify-content: center;
align-items: center; */
justify-items: center;
background: rgb(38,37,37);
background: linear-gradient(180deg, rgba(38,37,37,1) 0%, rgba(0,0,0,1) 18%, rgba(33,33,33,1) 100%);
border-right:11px solid #103;
box-shadow: 1px 4px 15px 12px  blue;
border-bottom:4px solid #103;
padding:1rem 2rem;
border-radius:40px;
border-top: 17px solid #103;
border-top-left-radius: 84px;
    border-top-right-radius: 84px;
/* transform: rotate3d(1, 0, 0, 0.542rad); */
&:hover{
    box-shadow: 11px 14px 25px 22px #3Da2FF;
}
`
const Input= styled.input`
outline: none;
font-size: 1.3rem;
font-weight:400;
padding:1rem 2rem;
/* box-shadow:1px 1px 35px 1px blue; */
box-shadow: 2px 2px 2px blue;
border-radius:10px;
width:90%;
color:blue;
border:6px solid black;
border-top:none;
background: rgb(38,37,37);
background: linear-gradient(180deg, rgba(38,37,37,1) 0%, rgba(0,0,0,1) 18%, rgba(33,33,33,1) 100%);
/* background-color:rgb(242,242,242); */
`
const Ha3=styled.h3`
transform: rotate3d(1, 0, 0, 0.642rad);
`
const Name=styled.div`
justify-items: start;
box-shadow: 0px 1px 17px 1px #3DB2FF;
overflow: hidden;
border-left: none;
border-right:  8px solid #103;
border-radius:30px;
border-top: 8px solid #103;
padding:1rem;
display:grid;
width:95%;
grid-template-columns:repeat(auto-fit,minmax(70px,1fr));
justify-content:center;
grid-gap:10px;
@media(max-width:780px){
    border-radius:10px;
}
`
const Cabinet = () => {
    const[usersDB,setUsersDB]=useState([])
    const[coment,setComent] = useState({})
    const {id}=useParams()


    const usersColRef=collection(db,"users")
    useEffect(() =>{
      
                    const getUsers = async() =>{
const data=await getDocs(usersColRef)
setUsersDB(data.docs.map(user=>({...user.data(),id:user.id})).filter(user=>user.day===id))


       }
        getUsers()

    },[])

    const usersWeb9=usersDB.filter(user=>user.course==="web9")
    const usersWeb11=usersDB.filter(user=>user.course==="web11")
    const usersWeb13=usersDB.filter(user=>user.course==="web13")
    const usersWeb15=usersDB.filter(user=>user.course==="web15")
    const usersWeb17=usersDB.filter(user=>user.course==="web17")
    const usersWeb19=usersDB.filter(user=>user.course==="web19")
 
    let fullgame=false;
if(usersWeb11.length>=2){
fullgame=true;
}
const handleName=(e)=>{
    const course=e.target.name;
    const message=e.target.value;
    setComent({...coment,course:course,name:message});
}
const handlePhone=(e)=>{
    setComent({...coment,phone:e.target.value});
}
const handleSubmit=async(e)=>{
    if(!coment.name||!coment.phone){
        return;
    }
    e.preventDefault();
await addDoc(usersColRef,{...coment,age:13,day:id})
setComent({name:"",phone:""})

setUsersDB([...usersDB,{...coment,age:13,day:id}])
}

    return (
        <Container>
       
            <Course onSubmit={handleSubmit}> 
                   <Ha3>web dev</Ha3>
                 
                 <div style={{color: 'grey'}}>{id}</div>
                   
                   <span style={{color: 'grey'}}>vilni mista:{2-usersWeb9.length}</span>
               <span>9.00-11.00(OT 13 LET)</span>
               <Input value={coment.course==="web9"?coment.name:""} name="web9" onChange={handleName} type="text"  placeholder="your name"/>
               <Input value={coment.course==="web9"?coment.phone:""} name="web9" onChange={handlePhone} type="text"  placeholder="your phone"/>
               <button  style={{padding:"0.5rem 4rem",boxShadow:"2px 2px 8px 2px blue"}} className="btn pushable">9:00-11:00</button>
               <Name>
                   
                   <span style={{color:"grey",padding:"0.5rem 4px",marginRight:"10px",borderBottom:"1px solid blue"}}>записались: </span>  
                    {usersWeb9.length > 0 ? usersWeb9.map(user=>(<span style={{padding:"0.5rem 1rem"}}>{user.name.slice(0,10)}..</span>)):<span>poki nema</span>}
                  
                    
                   </Name>
            </Course>
            <Course onSubmit={handleSubmit}> 
                   <Ha3>web dev</Ha3>
                 
                 <div style={{color: 'grey'}}>{id}</div>
                   
                   <span style={{color: 'grey'}}>vilni mista:{2-usersWeb11.length}</span>
               <span>11.00-13.00(OT 13 LET)</span>
               <Input value={coment.course==="web11"?coment.name:""} name="web11" onChange={handleName} type="text"  placeholder="your name"/>
               <Input value={coment.course==="web11"?coment.phone:""} name="web11" onChange={handlePhone} type="text"  placeholder="your phone"/>
               <button  style={{padding:"0.5rem 4rem",boxShadow:"2px 2px 8px 2px blue"}} className="btn pushable">11:00-13:00</button>
               <Name>
                   
                   <span style={{color:"grey",padding:"0.5rem 4px",marginRight:"10px",borderBottom:"1px solid blue"}}>записались: </span>  
                    {usersWeb11.length > 0 ? usersWeb11.map(user=>(<span style={{padding:"0.5rem 1rem"}}>{user.name.slice(0,10)}..</span>)):<span>poki nema</span>}
                  
                    
                   </Name>
            </Course>
            <Course onSubmit={handleSubmit}> 
                   <Ha3>web dev</Ha3>
                 
                 <div style={{color: 'grey'}}>{id}</div>
                   
                   <span style={{color: 'grey'}}>vilni mista:{2-usersWeb13.length}</span>
               <span>13.00-15.00(OT 13 LET)</span>
               <Input value={coment.course==="web13"?coment.name:""} name="web13" onChange={handleName} type="text"  placeholder="your name"/>
               <Input value={coment.course==="web13"?coment.phone:""} name="web13" onChange={handlePhone} type="text"  placeholder="your phone"/>
               <button  style={{padding:"0.5rem 4rem",boxShadow:"2px 2px 8px 2px blue"}} className="btn pushable">13:00-15:00</button>
               <Name>
                   
                   <span style={{color:"grey",padding:"0.5rem 4px",marginRight:"10px",borderBottom:"1px solid blue"}}>записались: </span>  
                    {usersWeb13.length > 0 ? usersWeb13.map(user=>(<span style={{padding:"0.5rem 1rem"}}>{user.name.slice(0,10)}..</span>)):<span>poki nema</span>}
                  
                    
                   </Name>
            </Course>
            <Course onSubmit={handleSubmit}> 
                   <Ha3>web dev</Ha3>
                 
                 <div style={{color: 'grey'}}>{id}</div>
                   
                   <span style={{color: 'grey'}}>vilni mista:{2-usersWeb15.length}</span>
               <span>15.00-17.00(OT 13 LET)</span>
               <Input value={coment.course==="web15"?coment.name:""} name="web15" onChange={handleName} type="text"  placeholder="your name"/>
               <Input value={coment.course==="web15"?coment.phone:""} name="web15" onChange={handlePhone} type="text"  placeholder="your phone"/>
               <button  style={{padding:"0.5rem 4rem",boxShadow:"2px 2px 8px 2px blue"}} className="btn pushable">15:00-17:00</button>
               <Name>
                   
                   <span style={{color:"grey",padding:"0.5rem 4px",marginRight:"10px",borderBottom:"1px solid blue"}}>записались: </span>  
                    {usersWeb15.length > 0 ? usersWeb15.map(user=>(<span style={{padding:"0.5rem 1rem"}}>{user.name.slice(0,10)}..</span>)):<span>poki nema</span>}
                  
                    
                   </Name>
            </Course>
            
        </Container>
    )
}

export default Cabinet


