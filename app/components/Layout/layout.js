import React from 'react';
import LeftSideBar from './leftSide';
import RightSide from './rightSide';
import Header from './header';
import Footer from './footer';
import RefreshSource from "./refresh";


export default class Layout extends React.Component {
  render() { 
    return (
      <div>
  	      <div>
              <LeftSideBar/>
              
          </div>
      </div>
    );
  }
}