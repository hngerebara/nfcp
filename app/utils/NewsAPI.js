import NewsServerAction from '../actions/NewsServerAction.js';
import NewsActions from '../actions/NewsActions.js';
import request from 'superagent';
import apikey  from './config.js';



export function getNewsSources(){
	request
    .get('https://newsapi.org/v1/sources')
    .set('Accept' : 'application/json')
    .end((err, response) => {
      console.log('sources getting here');
      if (err) return console.error(err);{
        NewsServerAction.receiveSourceResult(response.body.data);
      console.log(response.body);
      }
      
       
   }); 
}

// let errorHandler = function (err) {
//     console.error(err);
// };

export function getNewsArticle(source, sortBy) {
    request
    .get('https://newsapi.org/v1/articles')
    .set('X-Api-Key', apikey.apikey)
    .query({source: source, sortBy: sortBy})
    .end((err, response) => {
    console.log('getting here articles');
    if (err || !response.ok) {
       console.log('Articles API not reached');
    } else {
        NewsActions.get_NewsArticles(response)
    }
    });
}



