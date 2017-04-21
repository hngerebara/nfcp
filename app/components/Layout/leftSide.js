import React from 'react';
import { render } from 'react';
import * as NewsAPI from "../../utils/NewsAPI";
import { TablePagination } from 'react-pagination-table';
import SourceStore from '../../stores/SourceStore';
import NewsActions from '../../actions/NewsActions';
import ListItem from './ListItem';

export default class LeftSideBar extends React.Component {
	constructor(props){
    super(props);
    this._onChange = this._onChange.bind(this);
    this.state = SourceStore.getAllSources();
  }
		
    
  _onChange (){
    this.setState(SourceStore.getAllSources());
  }

  //Mount sources from news API 
 componentDidMount (){
    SourceStore.addChangeListener(this._onChange);
  }

  componentWillUnmount (){
    SourceStore.removeChangeListener(this._onChange);
  }
  


	render (){

		return (
		    <div className="col-lg-12 pull-left">
        <h3><i>Select News Sources</i></h3>
                          <h3> will display news source list here</h3>
          <ul id ="newslist">        
                           {
                          this.state.sources && 
                          this.state.sources.map(source=>{
           return <div> <li>{source.name}{source.url}</li></div>
                          })
                        }
                      
           </ul>
        </div>
			);
	}
}

