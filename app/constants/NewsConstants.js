//Actions
import keymirror from'keymirror';

const NewsConstants = keymirror({
  GET_ARTICLES: null, //to initiaate API call
  GET_ARTICLES_RESPONSE: null, //To handle the return of API call
  GET_ARTICLES_ERROR: null,
  GET_SOURCE: null, //to initiaate API call
  GET_SOURCE_RESPONSE: null, //To handle the return of API call
  GET_SOURCE_ERROR: null
});

export default NewsConstants;
