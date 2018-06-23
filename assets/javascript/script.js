jQuery(document).ready(function($){

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key:f82147481eb045e1b71a46970dc75370&q&sort:newest";
$.ajax({
  url: url, 
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});

}); 