import React from 'react';
import './Sign.css'
// import backgroundImage from '../media/Loginimg.png';

const Sign = () => {
  return (
    <>
    <div className='bckgrdimg'>
      <div className="box-outer" id="box1">
        <form name="signup_form" method="post" action=" " autoComplete="off">
          <h2 className="heading">Sign Up Form</h2>

          <label>First Name</label>
          <input type="text" name="first_name" className="input-control" placeholder="Your first name" id="fstname" />
          <p className="error" id="er1"></p>
          <i className="fa-solid fa-circle-exclamation iconfst"></i>
          <i className="fa-solid fa-circle-check checkfst"></i>

          <label>Last Name</label>
          <input type="text" name="last_name" className="input-control" placeholder="Your last name" id="lstname" />
          <p className="error" id="er2"></p>
          <i className="fa-solid fa-circle-exclamation iconlst"></i>
          <i className="fa-solid fa-circle-check checklst"></i>

          <label>Email</label>
          <input type="text" name="email" className="input-control" placeholder="Your email address" id="Email" />
          <p className="error" id="er3"></p>
          <i className="fa-solid fa-circle-exclamation iconemail"></i>
          <i className="fa-solid fa-circle-check checkemail"></i>

          <label>Phone.No</label>
          <input type="text" name="phno" className="input-control" placeholder="Phone.No" id="Phn" />
          <p className="error" id="er4"></p>
          <i className="fa-solid fa-circle-exclamation iconphoneno"></i>
          <i className="fa-solid fa-circle-check checkphno"></i>

          <label>New Password</label>
          <input type="password" name="password" className="input-control" id="newpswd" />
          <p className="error" id="er5"></p>
          <i className="fa-solid fa-circle-exclamation iconpswd"></i>
          <i className="fa-solid fa-circle-check checkpswd"></i>

          <label>Confirm Password</label>
          <input type="password" name="password" className="input-control" id="cnfm" />
          <p className="error" id="er6"></p>
          <i className="fa-solid fa-circle-exclamation iconcnfm"></i>
          <i className="fa-solid fa-circle-check checkcnfm"></i>

          <input type="button" name="submit" className="button" id="btn2" />
        </form>
        <img className="img1" src="https://as1.ftcdn.net/v2/jpg/00/77/56/96/1000_F_77569638_nJUrjM1Xf7ItrHjsKAE0d4Nz3BnAuuBX.jpg" alt="img" />
       
      </div>
      </div>
    </>
  );
}

export default Sign;
