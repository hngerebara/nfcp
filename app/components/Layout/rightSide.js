import React from 'react';
import ArticlesStore from '../../stores/ArticlesStore';
import NewsActions from '../../actions/NewsActions';
import ArticleItem from './article-items.js'
import * as NewsAPI from "../../utils/NewsAPI";

export default class RightSide extends React.Component {

    constructor(props){
        super(props);
        this.state = {articles: ArticlesStore.getAllArticles()};
        this.defaultId = 'cnn';
        this.sortBy = undefined;
        this._onChange = this._onChange.bind(this)
    }

    _onChange (){
        this.setState(ArticlesStore.getAllArticles());
     }
  
    componentWillMount (){
        ArticlesStore.addChangeListener(this._onChange);
        NewsAPI.getNewsArticle(this.defaultId,  this.sortBy);
    }

    componentWillUnmount (){
        ArticlesStore.removeChangeListener(this._onChange);
    }

    shouldComponentUpdate (nextProps, nextState){
        console.log(nextProps, nextState);
        this.setState({articles : ArticlesStore.getAllArticles()});
        return true;
    }

    render (){
        let news = [];
        let rows = [];

        if(news) {
            news.map(function(item, index) {
                rows.push(<ArticleItem key={index} index={index} item={item}/>);
            });
        }

        return (
            <div className="col-lg-12">
                <div style={{display :'inline-block', width:'100%'}}>
                    {rows}
                </div>
            </div>
      );
    }

};