'use strict';

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');
var Link = require('react-router').Link;

// keep in mind that using a variable like this allows for more
// useful error messages
var AuthorPage = React.createClass({
    getInitialState: function () {
       return {
           authors: []
       };
    },

    componentDidMount: function () {
        if (this.isMounted()) {
            this.setState({ authors: AuthorApi.getAllAuthors() });
        }
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