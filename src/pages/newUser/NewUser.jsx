import React from 'react';
import './newuser.css'
const NewUser = () => {
  return (
    <div className='new-user'>
        <h2 className="new-user-title">New User</h2>
        <form className="new-user-form">
            <div className="new-user-item">
                <label>
                    Username
                </label>
                <input type="text" placeholder='Enter Username' />
            </div>

            <div className="new-user-item">
                <label>
                    Full Name
                </label>
                <input type="text" placeholder='Enter Full Name' />
            </div>

            <div className="new-user-item">
                <label>
                    Email
                </label>
                <input type="email" placeholder='Enter Email Id' />
            </div>

            <div className="new-user-item">
                <label>
                    Password
                </label>
                <input type="password" placeholder='Enter Password' />
            </div>

            <div className="new-user-item">
                <label>
                    Phone No.
                </label>
                <input type="text" placeholder='Enter Phone Number' />
            </div>

            <div className="new-user-item">
                <label>
                    Address
                </label>
                <input type="text" placeholder='Enter Address' />
            </div>

            <div className="new-user-item">
                <label>
                    Gender
                </label>
                <div className="new-user-gender">
                    <input type="radio" name='gender' id='male' value='male'/>
                    <label htmlFor="male">Male</label>
                    <input type="radio" name='gender' id='female' value='female'/>
                    <label htmlFor="female">Female</label>
                    <input type="radio" name='gender' id='others' value='others'/>
                    <label htmlFor="others">Others</label>
                </div>
            </div>

            <div className="new-user-item">
                <label>
                    Active
                </label>
                <select name="active" id="active" className="new-user-select">
                    <option value='yes'>Yes</option>
                    <option value='no'>No</option>
                </select>
            </div>


            <button className="new-user-button">Create</button>
        </form>
    </div>
    )
};

export default NewUser;
