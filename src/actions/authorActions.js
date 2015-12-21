'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
    createAuthor: function (author) {
        var newAuthor = AuthorApi.saveAuthor(author);
        
        // tell the dispatcher to alert all stores that 
        // a new author was created
        console.log('dispatching action type of ', ActionTypes.CREATE_AUTHOR, newAuthor);
        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    },
    
    updateAuthor: function (author) {
        var updatedAuthor = AuthorApi.saveAuthor(author);
        
        // tell the dispatcher to alert all stores that 
        // a new author was created
        console.log('dispatching action type of ', ActionTypes.UPDATE_AUTHOR, updatedAuthor);
        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_AUTHOR,
            author: updatedAuthor
        });
    },
    
    deleteAuthor: function (id) {
        AuthorApi.deleteAuthor(id);
        
        console.log('dispatching action type of ', ActionTypes.DELETE_AUTHOR, id);
        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_AUTHOR,
            id: id
        });
    }
};

module.exports = AuthorActions;