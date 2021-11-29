import React from 'react'

import PostItem from './PostItem'
const PostList = ({data,titleheader}) => {
  
  
 
    return (
        <div>
              <h1 style={{color:`red`,textAlign:'center'}}>{titleheader}</h1>
             {
            data.map(({id,title,body}) =><PostItem key={id} id={id} title={title} body={body}/>)

        
          

        }
      
        </div>
    )
}

export default PostList
