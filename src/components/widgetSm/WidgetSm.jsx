import React from 'react';
import './widgetSm.css'
import { MdVisibility } from 'react-icons/md'
import { FaUserCircle } from 'react-icons/fa'

const WidgetSm = () => {
  return (
    <div className='widget-small'>
        <span className="widget-small-title">New Members</span>
        <ul className="widget-small-list">
            <li className="widget-small-list-item">
                <FaUserCircle size={28} />
                <div className="widget-small-user">
                    <span className="widget-small-user-name">Biswa Ranjan</span>
                    <span className="widget-small-user-title">Software Engineer</span>
                </div>
                <button className='widget-small-user-button'>
                    <MdVisibility /> &nbsp;
                    Display
                </button>
            </li>

            <li className="widget-small-list-item">
                <FaUserCircle size={28} />
                <div className="widget-small-user">
                    <span className="widget-small-user-name">Biswa Ranjan</span>
                    <span className="widget-small-user-title">Software Engineer</span>
                </div>
                <button className='widget-small-user-button'>
                    <MdVisibility /> &nbsp;
                    Display
                </button>
            </li>

            <li className="widget-small-list-item">
                <FaUserCircle size={28} />
                <div className="widget-small-user">
                    <span className="widget-small-user-name">Biswa Ranjan</span>
                    <span className="widget-small-user-title">Software Engineer</span>
                </div>
                <button className='widget-small-user-button'>
                    <MdVisibility /> &nbsp;
                    Display
                </button>
            </li>

            <li className="widget-small-list-item">
                <FaUserCircle size={28} />
                <div className="widget-small-user">
                    <span className="widget-small-user-name">Biswa Ranjan</span>
                    <span className="widget-small-user-title">Software Engineer</span>
                </div>
                <button className='widget-small-user-button'>
                    <MdVisibility /> &nbsp;
                    Display
                </button>
            </li>

            <li className="widget-small-list-item">
                <FaUserCircle size={28} />
                <div className="widget-small-user">
                    <span className="widget-small-user-name">Biswa Ranjan</span>
                    <span className="widget-small-user-title">Software Engineer</span>
                </div>
                <button className='widget-small-user-button'>
                    <MdVisibility /> &nbsp;
                    Display
                </button>
            </li>

            <li className="widget-small-list-item">
                <FaUserCircle size={28} />
                <div className="widget-small-user">
                    <span className="widget-small-user-name">Biswa Ranjan</span>
                    <span className="widget-small-user-title">Software Engineer</span>
                </div>
                <button className='widget-small-user-button'>
                    <MdVisibility /> &nbsp;
                    Display
                </button>
            </li>
        </ul>
    </div>
    )
};

export default WidgetSm;
