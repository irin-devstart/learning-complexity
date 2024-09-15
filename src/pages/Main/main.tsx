import React, { useState, ChangeEvent } from 'react'
import Post from '../Post'
import './main.styles.css'

const Main = () => {
   const [postResource, setPostResource] = useState<Posts[]>([])

   const handleAdd = () => {}

   return (
      <div className="container">
         <div className="body">
            <form>
               <label htmlFor="title"> Title</label>
               <input type="text" name="title" />
               <label htmlFor="body"> Body</label>
               <textarea name="body" id="body" cols={30} rows={10}>
                  test
               </textarea>
            </form>
         </div>
         <div className="data-table"></div>
      </div>
   )
}

export default Main
