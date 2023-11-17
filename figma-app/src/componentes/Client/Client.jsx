import React from 'react'

// import Client from './componentes/Client/Client';
import clientpage from '../../Data/Clients'
import client from '../../media/Client.png'
import './Client.css'
const Client = () => {

  return (
    <div>
        <div>
            <div className='clientsay'>What Our Clients Says</div>
            <div>
              
            </div>
            <div className="clientimg">
            <img className="clientimg1" src={client} alt="" />
            {
              clientpage.map((item)=>{
                return<>
                <div>
                <img className="clientimg2" src={item.img} alt="" />
               
            </div>
           
            </>
              })
            }
             </div>
        </div>

    </div>
  )
}

export default Client;