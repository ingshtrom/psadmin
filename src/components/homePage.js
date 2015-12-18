'use strict';

var React = require('react');
var Link = require('react-router').Link;
//var Lifecycle = require('react-router').Lifecycle;

var Home = React.createClass({

    //mixins: [ Lifecycle ],
    //
    //routerWillLeave: function (nextLocation) {
    //    return 'Are you sure you want to leave the home page?';
    //},

    render: function () {
        return (
            <div className="jumbotron">
                <h1>Pluralsignt administration</h1>
                <p>React, React Router, and Flux for ultra-responsive web apps.</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
            </div>
        );
    }
});

module.exports = Home;
