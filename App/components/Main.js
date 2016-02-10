var React = require('react');

var Main = React.createClass({
	render: function () {
		return (
			<div id="wrapper">
        <nav className="navbar navbar-default navbar-static-top" role="navigation">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="index.html">React Data Table</a>
            </div>

            <div className="navbar-default sidebar" role="navigation">
                <div className="sidebar-nav navbar-collapse">
                    <ul className="nav" id="side-menu">
                        <li>
                            <a href="index.html"><i className="fa fa-dashboard fa-fw"></i> Dashboard</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div id="page-wrapper">
            {this.props.children}
        </div> // #page-wrapper
    </div> // #wrapper
		)
	}
});

module.exports = Main;