import React,{useState} from 'react'
import PostList from './PostList'
import './cabinet.css'
import {useDispatch} from "react-redux"
import {removeStudent} from "../../store/slices/userSlice"
import {initialDataJs,initialDataUnity} from './InitialData'
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput'
const Cabinet = () => {
const [data1,setData1]=useState(initialDataJs)
const [data2,setData2]=useState(initialDataUnity)
const [title,setTitle] = useState('');
const [body,setBody]=useState('')
const dispatch=useDispatch();
const addNewPost = (e) => {
e.preventDefault();
const newPost={title,body,id:Date.now()};
if(newPost.title===data1[0]['header']){
    setData1([...data1,newPost])
}
 else if(newPost.title===data2[0]['header']){
    setData2([...data1,newPost])
}


}
const data=[data1,data2]
    return (
       <div className="root">
           <button onClick={()=>dispatch(removeStudent())}>log out</button>
              <div className="App"> 
              <form>
                
                    <MyInput value={title}   onChange={(e)=>setTitle(e.target.value)}  type="text" placeholder="title"/>
                    <MyInput onChange={(e)=>setBody(e.target.value)} value={body} type='text' placeholder="description"/>
                    <MyButton onClick={addNewPost}>create</MyButton>
              </form>
            
              {data.map((post,i)=> <PostList data={post}id={post.id} titleheader ={data[i][0]["header"]}/>)}
           
          
       
       </div>
       </div>
     
     
    )
}

export default Cabinet
