import React from 'react'
import './cabinet.css'
const PostItem = ({id,title,body}) => {
    return (
     
            
      <div className="post">
            <div className='post__content'>
          <strong className="str">{id}.{title}</strong>
          <div>{body}</div>
      </div>
      
            <div className="post__btns">
              <button className="btn">delete</button>
          </div>
      </div>
    
        
      
    )
}

export default PostItem
