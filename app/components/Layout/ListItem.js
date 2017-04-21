import React from 'react';
import * as NewsAPI from "../../utils/NewsAPI";

export default class ListItem extends React.Component {
    constructor(props){
        super(props);
        this._onClick = this._onClick.bind(this)
    }

    _onClick(){
        
         if(this.props){
             this.sourceId = this.props.item.id;
             NewsAPI.getNewsArticle(this.sourceId);
         }
    }

    render() {
        console.log(this.props);
        return (<li className="dropdown-header"  title={this.props.item.description}>
                    <a href="#" onClick={this._onClick}> {this.props.item.name} </a>
               </li>)
    }
}
