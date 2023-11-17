import React from 'react'
import Group from '../../media/GroupImg.png'
import './Afterplan.css'
// import 
const Afterplan = () => {
  return (
    <div>
        <div className="afplan">
            <img src={Group} alt="" className='cirleimg' />
            <div className='alltxt1'>
            <div  className='boldtxt'>Your work, everywhere you are</div>
            <div  className='smalltxt'>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</div>
            <button className='butn'>Try Taskey</button>
            </div>
        </div>
       
     
    </div>
  )
}

export default Afterplan