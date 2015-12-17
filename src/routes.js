'use strict';

var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
// NOTE: this is what we want, but it requires server config
//var createBrowserHistory = require('history/lib/createBrowserHistory');

var App = require('./components/app');
var HomePage = require('./components/homePage');
var AuthorPage = require('./components/authors/authorPage');
var AboutPage = require('./components/about/aboutPage');

var routes = (
    //<Router history={createBrowserHistory()}>
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage} />
            <Route path="authors" component={AuthorPage} />
            <Route path="about" component={AboutPage} />
            <Route path="*" component={HomePage}/>
        </Route>
    </Router>
);

module.exports = routes;