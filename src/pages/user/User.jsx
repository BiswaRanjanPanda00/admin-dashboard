import React from 'react';
import './user.css'
import { MdPermIdentity , MdEmail , MdLocationPin , MdUpload } from 'react-icons/md'
import { BsCalendar2 } from 'react-icons/bs'
import { GiRotaryPhone } from 'react-icons/gi' 
import { Link } from 'react-router-dom'

const User = () => {
  return (
    <div className='user'>
      <div className="user-title-container">
        <h2 className="user-title">Edit User</h2>
        <Link to='/newUser'>
          <button className='user-add-button'>Create</button>
        </Link>
      </div>
      <div className="user-container">
        <div className="user-show">
          <div className="user-show-top">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" className="user-show-img" />
            <div className="user-show-top-title">
              <span className="user-show-user-name">Anna</span>
              <span className="user-show-user-title">Software Engineer</span>
            </div>
          </div>
          <div className="user-show-bottom">
            <span className="user-show-bottom-title">Account Details</span>
            <div className="user-show-info">
              <MdPermIdentity />
              <span className="user-show-info-title">anna25</span>  
            </div>

            <div className="user-show-info">
              <BsCalendar2 size={15}/>
              <span className="user-show-info-title">01 Mar 2000</span>  
            </div>

            <span className="user-show-bottom-title">Contact Details</span>

            <div className="user-show-info">
              <GiRotaryPhone />
              <span className="user-show-info-title">+1 23456789</span>  
            </div>

            <div className="user-show-info">
              <MdEmail />
              <span className="user-show-info-title">anna2000@gmail.com</span>  
            </div>

            <div className="user-show-info">
              <MdLocationPin />
              <span className="user-show-info-title">New York | US</span>  
            </div>
          </div>
        </div>
        <div className="user-update">
          <span className="user-update-title">Edit</span>
          <form className="user-update-form">
            <div className="user-update-left">
              <div className="user-update-item">
                <label>Full Name</label>
                <input type="text" placeholder='Anna' className="user-update-input" />
              </div>

              <div className="user-update-item">
                <label>Userame</label>
                <input type="text" placeholder='anna25' className="user-update-input" />
              </div>

              <div className="user-update-item">
                <label>Phone No.</label>
                <input type="text" placeholder='+1 23456789' className="user-update-input" />
              </div>

              <div className="user-update-item">
                <label>Mail</label>
                <input type="text" placeholder='anna2000@gmail.com' className="user-update-input" />
              </div>

              <div className="user-update-item">
                <label>Location</label>
                <input type="text" placeholder='New York | USA' className="user-update-input" />
              </div>
            </div>
            <div className="user-update-right">
              <div className="user-update-upload">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" className="user-update-img" />
                <label htmlFor="file"><MdUpload size={24} className='user-update-icon'/></label>
                <input type="file" id='file' style={{display : 'none'}}/>
              </div>
              <button className="user-update-button">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default User;
