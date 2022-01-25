import React from 'react'
import './sidebar.css'
import { RiHome3Line , RiBook2Fill } from 'react-icons/ri'
import { SiGoogleanalytics } from 'react-icons/si'
import { MdTrendingUp , MdEmail , MdBookmarks , MdBusinessCenter } from 'react-icons/md'
import { FaUserCircle } from 'react-icons/fa'
import { GiShoppingBag } from 'react-icons/gi'
import { GrTransaction } from 'react-icons/gr'
import { AiFillMessage } from 'react-icons/ai'
import { Link } from 'react-router-dom'


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar-wrapper">
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Dashboard</h3>
                    <ul className="sidebar-list">
                        <Link to='/' className='link'>
                            <li className="sidebar-list-item">
                                <RiHome3Line className='icon-margin'/>
                                Home
                            </li>
                        </Link>
                        
                        <li className="sidebar-list-item">
                            <SiGoogleanalytics size={15} className='icon-margin'/>
                            Analytics
                        </li>

                        <li className="sidebar-list-item">
                            <MdTrendingUp className='icon-margin'/>
                            Sales
                        </li>
                    </ul>
                </div>

                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Quick Menu</h3>
                    <ul className="sidebar-list">
                        <Link to='/users' className='link'>
                            <li className="sidebar-list-item">
                                <FaUserCircle className='icon-margin'/>
                                Users
                            </li>
                        </Link>

                        <Link to='/products' className='link'>
                            <li className="sidebar-list-item">
                                <GiShoppingBag className='icon-margin'/>
                                Products
                            </li>
                        </Link>

                        <li className="sidebar-list-item">
                            <GrTransaction className='icon-margin'/>
                            Transactions
                        </li>

                        <li className="sidebar-list-item">
                            <RiBook2Fill className='icon-margin'/>
                            Reports
                        </li>
                    </ul>
                </div>

                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Notifications</h3>
                    <ul className="sidebar-list">
                        <li className="sidebar-list-item">
                            <MdEmail className='icon-margin'/>
                            Mail
                        </li>

                        <li className="sidebar-list-item">
                            <MdBookmarks className='icon-margin'/>
                            Feedback
                        </li>

                        <li className="sidebar-list-item">
                            <AiFillMessage className='icon-margin'/>
                            Messages
                        </li>
                    </ul>
                </div>

                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Staff</h3>
                    <ul className="sidebar-list">
                        <li className="sidebar-list-item">
                            <MdBusinessCenter className='icon-margin'/>
                            Manage
                        </li>

                        <li className="sidebar-list-item">
                            <SiGoogleanalytics size={15} className='icon-margin'/>
                            Analytics
                        </li>

                        <li className="sidebar-list-item">
                            <RiBook2Fill className='icon-margin'/>
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
