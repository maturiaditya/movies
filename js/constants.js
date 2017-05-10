//basic constants
var API_URL = "https://api.themoviedb.org";
var API_VERSION = "/3";
var API_KEY = "api_key=e86339037c22dafdced8517a2085ccd9";
var API_IMAGE_PRE_URL = "https://image.tmdb.org/t/p/w300";

function getimagePreUrl() {
    return API_IMAGE_PRE_URL;
}


//movies end point url
var TOP_RATED_MOVIES = "/movie/top_rated";

var LATEST_MOVIES = "/movie/latest";

var NOW_PLAYING_MOVIES = "/movie/now_playing";

//get full urls by calling the specific method

//TOP RATED MOVIES
function getTopRatedMoviesUrl(page) {
    return API_URL + API_VERSION + TOP_RATED_MOVIES + "?" + API_KEY + "&page=" + page + "&language=en-US";
}


//LATEST MOVIES
function getLatestMoviesUrl(page) {
    return API_URL + API_VERSION + LATEST_MOVIES + "?" + API_KEY + "&page=" + page + "&language=en-US";
}

//NOW PLAYING MOVIES
function getNowPlayingMoviesUrl(page) {
    return API_URL + API_VERSION + NOW_PLAYING_MOVIES + "?" + API_KEY + "&page=" + page + "&language=en-US";
}

//tv end point url
var TOP_RATED_TV = "/tv/top_rated";
var LATEST_TV = "/tv/latest";
var POPULAR_TV = "/tv/popular";


//TOP RATED TV
function getTopRatedTvUrl(page) {
    return API_URL + API_VERSION + TOP_RATED_TV + "?" + API_KEY + "&page=" + page + "&language=en-US";
}

//LATEST TV
function getLatestTvUrl(page) {
    return API_URL + API_VERSION + LATEST_TV + "?" + API_KEY + "&page=" + page + "&language=en-US";
}

//POPULAR TV
function getPopularTvUrl(page) {
    return API_URL + API_VERSION + POPULAR_TV + "?" + API_KEY + "&page=" + page + "&language=en-US";
}

//search end point url
var SEARCH = "/search/multi";

function getSearchUrl(str) {
    return API_URL + API_VERSION + SEARCH + "?" + API_KEY + "&query=" + str + "&language=en-US";
}
