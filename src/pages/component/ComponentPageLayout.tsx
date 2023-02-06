import React from 'react';
import { Outlet } from 'react-router-dom';
import "./styles.css";

type Props = {};

const ComponentPageLayout = (props: Props) => {
  return (
    <div className='project-layout'>
      <div className="container">
        <img src={require('../../assets/images/calculator.png')} width="100%" height="350" />
        <div className="middle">
          <div className="text"><a href="https://shrddhathakker.github.io/calculator/" target="_blank">Link</a></div>
        </div>
        <div className='title'>Calculator App</div>
      </div>
      <div className="container">
        <img src={require('../../assets/images/to-do-list.png')} width="100%" height="350" />
        <div className="middle">
          <div className="text"><a href="https://shrddhathakker.github.io/todolist/" target="_blank">Link</a></div>
        </div>
        <div className='title'>To Do List</div>
      </div>
      <div className="container">
        <img src={require('../../assets/images/portfolio.jpeg')} width="100%" height="350"/>
        <div className="middle">
          <div className="text"><a href="https://shrddhathakker.github.io/portfolio/" target="_blank">Portfolio</a></div>
        </div>
        <div className='title'>Portfolio</div>
      </div>
    </div>
  );
};

export default ComponentPageLayout;