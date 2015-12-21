'use strict';

var React = require('react');
var AuthorStore = require('../../stores/authorStore');
var AuthorList = require('./authorList');
var Link = require('react-router').Link;

// keep in mind that using a variable like this allows for more
// useful error messages
var AuthorPage = React.createClass({
    getInitialState: function () {
       return {
           authors: AuthorStore.getAllAuthors()
       };
    },
    
    componentWillMount: function () {
        AuthorStore.addChangeListener(this._onChange);
    },
    
    componentWillUnmount: function () {
        AuthorStore.removeChangeListener(this._onChange);
    },
    
    _onChange: function () {
        this.setState({ authors: AuthorStore.getAllAuthors() });
    },

	render: function () {
		return (
			<div>
				<h1>Authors</h1>
                <Link to="author" className="btn btn-default">Add Author</Link>
                <AuthorList authors={this.state.authors} />
			</div>
		);
	}
});

module.exports = AuthorPage;