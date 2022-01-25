import React from 'react';
import './widgetLg.css'
import { FaUserCircle } from 'react-icons/fa';

const WidgetLg = () => {

  const Button = ({type}) => {
      return <button className={'widget-large-button ' + type}>{type}</button>
  }

  return (
    <div className='widget-large'>
        <h3 className="widget-large-title">Latest Transactions</h3>
        <table className="widget-large-table">
          <tr className="widget-large-row">
            <th className="widget-large-heading">Customer</th>
            <th className="widget-large-heading">Date</th>
            <th className="widget-large-heading">Amount</th>
            <th className="widget-large-heading">Status</th>
          </tr>

          <tr className="widget-large-row">
            <td className="widget-large-user"><FaUserCircle size={28} /> <span className="widget-large-user-name">Susan Carol</span></td>
            <td className="widget-large-date">2 Jun 2021</td>
            <td className="widget-large-amount">Rs. 200 </td>
            <td className="widget-large-status"><Button type='Approved' /></td>
          </tr>

          <tr className="widget-large-row">
            <td className="widget-large-user"><FaUserCircle size={28} /> <span className="widget-large-user-name">Susan Carol</span></td>
            <td className="widget-large-date">4 May 2021</td>
            <td className="widget-large-amount">Rs. 7,000 </td>
            <td className="widget-large-status"><Button type='Pending' /></td>
          </tr>

          <tr className="widget-large-row">
            <td className="widget-large-user"><FaUserCircle size={28} /> <span className="widget-large-user-name">Susan Carol</span></td>
            <td className="widget-large-date">6 Jul 2021</td>
            <td className="widget-large-amount">Rs. 790 </td>
            <td className="widget-large-status"><Button type='Declined' /></td>
          </tr>

          <tr className="widget-large-row">
            <td className="widget-large-user"><FaUserCircle size={28} /> <span className="widget-large-user-name">Susan Carol</span></td>
            <td className="widget-large-date">2 May 2021</td>
            <td className="widget-large-amount">Rs. 100 </td>
            <td className="widget-large-status"><Button type='Declined' /></td>
          </tr>

          <tr className="widget-large-row">
            <td className="widget-large-user"><FaUserCircle size={28} /> <span className="widget-large-user-name">Susan Carol</span></td>
            <td className="widget-large-date">2 Jan 2021</td>
            <td className="widget-large-amount">Rs. 1,900 </td>
            <td className="widget-large-status"><Button type='Approved' /></td>
          </tr>
        </table>
    </div>
    )
};

export default WidgetLg;
