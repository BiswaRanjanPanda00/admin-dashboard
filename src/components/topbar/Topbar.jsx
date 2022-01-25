import React from 'react'
import './topbar.css'
import { IoNotificationsOutline  , IoSettingsSharp} from 'react-icons/io5'
import { MdLanguage } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'

const Topbar = () => {
    return (
        <div className='topbar'>
            <div className="topbar-wrapper">
                <div className="topbar-left">
                    <span className='logo'>myAdmin</span>
                </div>
                <div className="topbar-right">
                    
                        <div className="topbar-icon-container">
                            <IoNotificationsOutline size={23}/>
                            <span className='topbar-icon-badge'>2</span>
                        </div>

                        <div className="topbar-icon-container">
                            <MdLanguage size={23}/>
                            <span className='topbar-icon-badge'>2</span>
                        </div>

                        <div className="topbar-icon-container">
                            <IoSettingsSharp size={23}/>
                        </div>

                        <CgProfile size={35} color='#555' className='topbar-avatar'/>
                        
                    </div>
                </div>
            </div>
        
    )
}

export default Topbar
