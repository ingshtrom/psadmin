'use strict';

var React = require('react');
var History = require('react-router').History;
var AuthorForm = require('./authorForm');
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var Lifecycle = require('react-router').Lifecycle;
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({

    mixins: [ History, Lifecycle ],

    routerWillLeave: function () {
        if (this.state.dirty) {
            return 'Leave without saving?';
        }
    },

    componentWillMount: function () {
        var authorId = this.props.params.id;
        
        console.log('upon navigation, current author is', authorId);
        if (authorId) {
            this.setState({ author: AuthorStore.getAuthorById(authorId) });
        }
    },

    getInitialState: function () {
        return {
            author: { id: '', firstName: '', lastName: '' },
            errors: {},
            dirty: false
        };
    },

    setAuthorState: function (event) {
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({ 
            author: this.state.author,
            dirty: true
        });
    },

    authorFormIsValid: function () {
        var formIsValid = true;
        this.state.errors = {}; // clear any previous errors

        if (this.state.author.firstName.length < 3) {
            this.state.errors.firstName = 'First name must be at least 3 characters.';
            formIsValid = false;
        }

        if (this.state.author.lastName.length < 3) {
            this.state.errors.lastName = 'Last name must be at least 3 characters.';
            formIsValid = false;
        }

        this.setState({errors: this.state.errors});
        return formIsValid;
    },

    saveAuthor: function (event) {
        event.preventDefault();

        if (!this.authorFormIsValid()) {
            return;
        }

        console.log('manageAuthorPage.saveAuthor: ', this.state.author);
        if (this.state.author.id) {
            AuthorActions.updateAuthor(this.state.author);
        } else {
            AuthorActions.createAuthor(this.state.author);
        }
        this.setState({ dirty: false });
        toastr.success('Author saved.');
        this.history.pushState(null, '/authors');
    },

    render: function () {
        return (
            <div>
                <AuthorForm
                    author={this.state.author}
                    onChange={this.setAuthorState}
                    onSave={this.saveAuthor} 
                    errors={this.state.errors} />
            </div>
        );
    }
});

module.exports = ManageAuthorPage;