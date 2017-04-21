import AppDispatcher from '../dispatcher/AppDispatcher';
import NewsConstants from '../constants/NewsConstants';


const NewsServerAction = {

//Calls dispatcher to initiate API call for sources
  receiveSourceResult(response) {
    AppDispatcher.handleServerAction({
      type: NewsConstants.GET_SOURCE_RESPONSE,
      response,
    });
  },

  receiveArticlesResult(response) {
    AppDispatcher.handleServerAction({
      type: NewsConstants.GET_NEWS_RESPONSE,
      response,
    });
  },
};

export default NewsServerAction;