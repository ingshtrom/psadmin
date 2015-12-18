'use strict';

var React = require('react');

var TextInput = require('../common/textInput');

var AuthorForm = React.createClass({
    propTypes: {
        author: React.PropTypes.shape({
            firstName: React.PropTypes.string.isRequired,
            lastName: React.PropTypes.string.isRequired
        }),
        onChange: React.PropTypes.func.isRequired,
        onSave: React.PropTypes.func.isRequired
    },

    render: function () {
        return (

            <form>
                <h1>Manage Author</h1>

                <TextInput
                    name="firstName"
                    label="First Name"
                    value={this.props.author.firstName}
                    onChange={this.props.onChange} />

                <TextInput
                    name="lastName"
                    label="Last Name"
                    value={this.props.author.lastName}
                    onChange={this.props.onChange} />

                <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
            </form>
        );
    }
});

module.exports = AuthorForm;