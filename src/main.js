$ = jQuery = require('jquery');

(function (win) {
	'use strict';
	// even though we don't use it directly, the transpiled code
	// will use it... some voodoo magic... awesome....
	var React = require('react');
	var ReactDOM = require('react-dom');
	var Home = require('./components/homePage');
	var About = require('./components/about/aboutPage');
	var Authors = require('./components/authors/authorPage');
	var Header = require('./components/common/header');

	var App = React.createClass({
		render: function () {
			var Child;

			switch(this.props.route) {
				case 'about': 
					Child = About; 
					break;
				case 'authors':
					Child = Authors;
					break;
				default: 
					Child = Home;
			}

			return (
				<div>
					<Header />
					<Child />
				</div>
			);
		}
	});

	function render () {
		var route = win.location.hash.substr(1);
		ReactDOM.render(<App route={route} />, document.getElementById('app'));
	}

	win.addEventListener('hashchange', render);
	render();
})(window);
