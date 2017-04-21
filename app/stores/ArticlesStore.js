import AppDispatcher from '../dispatcher/AppDispatcher';
import NewsConstants from '../constants/NewsConstants';
import ObjectAssign from 'object-assign';
import {EventEmitter} from 'events';
import EventConstants from "../constants/EventConstants";
import _ from 'lodash';


const _articles = {
  list: []
};

const ArticlesStore = ObjectAssign( {}, EventEmitter.prototype, {

  getState() {
        return _state;
    },

  addChangeListener(cb) {
    this.on(EventConstants.CHANGE_EVENT, cb);
  },

  addClickListener(cb){
      this.on(EventConstants.CLICK_EVENT, cb);
  },

  removeClickListener(cb){
        this.removeListener(EventConstants.CLICK_EVENT, cb);
  },


  removeChangeListener(cb) {
    this.removeListener(EventConstants.CHANGE_EVENT, cb);
  },

  getAllArticles(){
    return _articles.list;
  },

  getALlById() {
    return _.find(_articles,{query:query});
  }


});
  

AppDispatcher.register(payload => {
  switch (payload.actionType) {
      case NewsConstants.GET_ARTICLES:
        //if (_articles.list.length > 0) _articles.list = [];
          _articles.list.push(payload.response);
          ArticlesStore.emit(EventConstants.CHANGE_EVENT);
        break;
      default:
       return true;
  }
});

export default ArticlesStore;