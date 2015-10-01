var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="card">
				<header>
					<img src={this.props.image} />
					<div>
						<a href="#" className="name">{this.props.name}</a>
						<div>
							<div className="time">{this.props.time}</div>
							<div className="location">{this.props.location}</div>
						</div>
					</div>
				</header>
				<p>
					{this.props.message}
				</p>
			</div>

		);
	}
});