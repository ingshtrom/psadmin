'use strict';

var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Redirect = require('react-router').Redirect;

var App = require('./components/app');
var HomePage = require('./components/homePage');
var AuthorPage = require('./components/authors/authorPage');
var ManageAuthorPage = require('./components/authors/manageAuthorPage');
var AboutPage = require('./components/about/aboutPage');
var NotFoundPage = require('./components/notFoundPage');

var routes = (
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage} />
            <Route path="authors" component={AuthorPage} />
            <Route path="about" component={AboutPage} />
            <Route path="author" component={ManageAuthorPage} />
            <Route path="*" component={NotFoundPage}/>
            // I had trouble getting redirects to work
            // think it is because of our history method
            <Redirect from="about-us" to="about" />
            <Redirect from="authurs" to="authors" />
            <Redirect from="about/*" to="about" />
        </Route>
    </Router>
);

module.exports = routes;
