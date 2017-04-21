
import {Dispatcher} from 'flux';
import assign from 'object-assign';

const AppDispatcher = assign(new Dispatcher(), {
  
  handleViewAction(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action
    });
  },

  handleServerAction(action) {
    this.dispatch({
      source: 'SERVER_ACTION',
      action,
    });
  }
});


export default AppDispatcher;
