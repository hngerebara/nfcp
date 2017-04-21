
import AppDispatcher from '../dispatcher/AppDispatcher';
import NewsConstants from '../constants/NewsConstants';
import ObjectAssign from 'object-assign';
import {EventEmitter} from 'events';
import _ from 'lodash';
import EventConstants from "../constants/EventConstants";


const _sources = {
  list: []
};

// Initialize the singleton to register with the
// dispatcher and export for React components
const SourceStore = ObjectAssign( {}, EventEmitter.prototype, {

// Define the public event listeners and getters that
// the views will use to listen for changes and retrieve
// the store
  addChangeListener(cb) {
    this.on(EventConstants.CHANGE_EVENT, cb);
  },

  // addClickListener(cb){
  //   this.on(EventConstants.CLICK_EVENT, cb);
  // },

  // removeClickListener(cb){
  //   this.removeListener(EventConstants.CLICK_EVENT, cb);
  // },


  removeChangeListener(cb) {
    this.removeListener(EventConstants.CHANGE_EVENT, cb);
  },

  //Assessor method to get all the sources
  getAllSources(){
    return _sources;
  }

});

// Register each of the actions with the dispatcher
// by changing the store's data and emitting a
// change
SourceStore.dispatchToken = AppDispatcher.register(payload => {

  switch (payload.type){
    // Add the data defined in the TodoActions
    // which the View will pass as a payload
        case NewsConstants.GET_SOURCE_RESPONSE:
        console.log("Data received");
        console.log(payload.response);
        const name = payload.response.sources[0].body.name;
        _sources.list.push(name);

        console.log(name);
                 
            SourceStore.emit(EventConstants.CHANGE_EVENT);
            break;
        default:
            return true;
  }
  
});

export default SourceStore;