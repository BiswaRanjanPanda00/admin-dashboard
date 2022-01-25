import React from 'react';
import Chart from '../../components/chart/Chart';
import Featuredinfo from '../../components/featuredinfo/Featuredinfo';
import './home.css'
import { userData } from '../../Dummydata';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';

const Home = () => {
  return (
      <div className='home'>
        <Featuredinfo />
        <Chart data={userData} title='User Analytics' grid dataKey='Active User'/>
        <div className="home-widgets">
          <WidgetSm />
          <WidgetLg />
        </div>
      </div>
  )
};

export default Home;
