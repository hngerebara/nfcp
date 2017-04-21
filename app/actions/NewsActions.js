import AppDispatcher from '../dispatcher/AppDispatcher.js';
import NewsConstants from '../constants/NewsConstants.js';
import NewsAPI from '../utils/NewsAPI.js';

const NewsActions = {
  
  //Calls dispatcher to handle the return of API call sources
  get_NewsSources() {
    AppDispatcher.handleViewAction({
      type: NewsConstants.GET_SOURCE,
    });
  },

  //Calls dispatcher to handle the return of API call for articles
  get_NewsArticles() {
    AppDispatcher.handleViewAction({
      type: NewsConstants.GET_ARTICLES,
    });
  getNewsSources();
  //getNewsArticle();
}

};

export default NewsActions;