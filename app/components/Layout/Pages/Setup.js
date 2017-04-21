import React from 'react';
// import 'normalize.css/normalize.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Grid, Row, Col } from 'react-bootstrap';
import SideBar from './leftSide';
import RightSide from './rightSide';


export default class Setup extends React.Component {
  render() { 
    return (
      <div>
        <RightSide />
      </div>
    );
  }
}