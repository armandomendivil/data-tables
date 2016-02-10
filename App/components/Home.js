var React = require('react');
var Table = require('./Table');

var Home = React.createClass({
	render: function () {
		return (
			<div>
				<div className="row">
	        <div className="col-lg-12">
	            <h1 className="page-header">Tables</h1>
	        </div>
	      </div>
	      <Table />
			</div>
		)
	}
});

module.exports = Home;