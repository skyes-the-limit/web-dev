import React from 'react'

import TuitList from "../TuitList/index.js";
import WhatsHappening from '../WhatsHappening/index.js';

import './index.css'

const HomeScreen = () => {
  return (
    <div
      id="wd-home-body"
    >
      <WhatsHappening />
      <TuitList />
    </div>
  )
}

export default HomeScreen