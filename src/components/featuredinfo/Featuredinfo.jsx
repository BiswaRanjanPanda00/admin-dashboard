import React from 'react';
import './featuredinfo.css'
import { BsArrowDown , BsArrowUp } from 'react-icons/bs'

const Featuredinfo = () => {
  return (
    <div className='featured'>
        <div className="featured-item">
            <span className="featured-title">Revenue</span>
            <div className="featured-money-container">
                <span className="featured-money">Rs. 2,415</span>
                <span className="featured-money-rate">-11.4 <BsArrowDown color='red'/></span>
            </div>
            <span className="featured-sub">Compared to Last month</span>
        </div>

        <div className="featured-item">
            <span className="featured-title">Sales</span>
            <div className="featured-money-container">
                <span className="featured-money">Rs. 3,415</span>
                <span className="featured-money-rate">-5.4 <BsArrowDown color='red'/></span>
            </div>
            <span className="featured-sub">Compared to Last month</span>
        </div>

        <div className="featured-item">
            <span className="featured-title">Cost</span>
            <div className="featured-money-container">
                <span className="featured-money">Rs. 2,005</span>
                <span className="featured-money-rate">+1.4 <BsArrowUp color='green'/></span>
            </div>
            <span className="featured-sub">Compared to Last month</span>
        </div>
    </div>
    )
};

export default Featuredinfo;
