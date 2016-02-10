var React = require('react');

var Table = React.createClass({
	render: function () {
		return (
			 <div className="row">
		      <div className="col-lg-12">
		          <div className="panel panel-default">
		              <div className="panel-heading">
		                  React DataTables
		              </div>
		              <div className="panel-body">
		                  <div className="dataTable_wrapper">
		                      <table className="table table-striped table-bordered table-hover" id="dataTables-example">
		                          <thead>
		                              <tr>
		                                  <th>Rendering engine</th>
		                                  <th>Browser</th>
		                                  <th>Platform(s)</th>
		                                  <th>Engine version</th>
		                                  <th>CSS grade</th>
		                              </tr>
		                          </thead>
		                          <tbody>
		                              <tr className="gradeC">
		                                  <td>Tasman</td>
		                                  <td>Internet Explorer 5.2</td>
		                                  <td>Mac OS 8-X</td>
		                                  <td className="center">1</td>
		                                  <td className="center">C</td>
		                              </tr>
		                              <tr className="gradeA">
		                                  <td>Misc</td>
		                                  <td>NetFront 3.1</td>
		                                  <td>Embedded devices</td>
		                                  <td className="center">-</td>
		                                  <td className="center">C</td>
		                              </tr>
		               var            </tbody>
		                      </table>
		                  </div>
		              </div>
		          </div>
		      </div>
		  </div>
		)
	}
});

module.exports = Table;