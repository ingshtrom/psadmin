'use strict';

var React = require('react');
var History = require('react-router').History;
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({

    mixins: [ History ],

    getInitialState: function () {
        return {
            author: { id: '', firstName: '', lastName: '' },
            errors: {}
        };
    },

    setAuthorState: function (event) {
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({ author: this.state.author });
    },

    authorFormIsValid: function () {
        var formIsValid = true;
        this.state.errors = {}; // clear any previous errors


        return formIsValid;
    },

    saveAuthor: function (event) {
        event.preventDefault();

        if (!this.authorFormIsValid()) {
            return;
        }

        AuthorApi.saveAuthor(this.state.author);
        toastr.success('Author saved.');
        this.history.pushState(null, '/authors');
    },

    render: function () {
        return (
            <div>
                <AuthorForm
                    author={this.state.author}
                    onChange={this.setAuthorState}
                    onSave={this.saveAuthor} />
            </div>
        );
    }
});

module.exports = ManageAuthorPage;