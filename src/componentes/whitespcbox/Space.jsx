import React, {useState} from 'react'
import "./Space.css"
import blank from '../../media/image-containerclr.png'

const Space=()=> {
    const [text1,setText1]=useState("Get More Done with whitepace")
    const [text2,setText2]=useState("Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks")

    const handleTextChange=()=>{ //set the text u can call this function on button change the text
    setText1("New text1");
    setText2("New text2");
    }

  return (
    <>
    
    <div className="intro">
    <div className="heade">
        
    <p className='txt1'>{text1}</p>
<p className='txt2'>{text2}</p>

<button className='bttn' onClick={handleTextChange}>Update Text</button>
</div>
<div>
    <img className="imgg" src={blank} alt="" />
</div>
</div>
    </>
   
  )
}

export default Space