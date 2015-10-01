var React = require('react');
var ProductBoxComponent = require('./ProductBoxComponent');
var CardComponent = require('./CardComponent');
var DateComponent = require('./DateComponent');

/*
 * INSTRUCTIONS
 * 1. Customize each one of the product boxes to have a different image, brand,
 *    product name and price. Only change the contents of this file.
 * 2. Customize each one of the cards to show a different image, poster, time, 
 *    location and message. Only change the contents of the CardComponent.js 
 *    file.
 * 3. Customize each one of the dates to show a different month, day of the
 *    month and day of the week. You will need to change this file as well as
 *    the DateComponent.js file.
 */

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<div className="row">
					<ProductBoxComponent  
					image= "http://luxtec.ru/upload/iblock/eb7/eb7a67401ddd5d8894341d376b5e62c5.jpg"
					brand="Legos"
					name="Star Wars Lego"
					price="30.00"/>
					<ProductBoxComponent 
					image= "http://www.wisewonders.org/wp-content/uploads/2015/09/playdoh.jpg"
					brand="Hasbro"
					name="Play Doh"
					price="10.00"/>
					<ProductBoxComponent 
					image= "http://info.roosterbank.com/blog/wp-content/uploads/2013/05/_d_improd_/EtchBlog_f_improf_431x206.png"
					brand="Ohio Art"
					name="Etch-A-Sketch"
					price="12.00"/>
					<ProductBoxComponent 
					image= "http://www.virginmedia.com/images/gameboy-400.jpg"
					brand="Nintendo"
					name="GameBoy"
					price="200.00"/>
				</div>
				<div className="row">
					<CardComponent
						image="https://lh5.googleusercontent.com/-ZadaXoUTBfs/AAAAAAAAAAI/AAAAAAAAAGA/19US52OmBqc/photo.jpg"
						name="Sammy Earhart"
						time="18 mins"
						location="Milwaukee, WI"
						message="So many people forget this: Saying you're a leader doesn't make you a leader. Leading makes you a leader."/>
					<CardComponent
						image="http://www.morganstanley.com/assets/images/people/tiles/michael-wilson.jpg"
						name="Dewey Foerster"
						time="22 mins"
						location="Madison, WI"
						message="Just preordered a Nexus 5x. Google fi here I come!"/>
					<CardComponent
						image="https://ouishare.s3.amazonaws.com/uploads/user/image/104/Profile_Ouishare.jpg"
						name="Betty Bradford"
						time="18 mins"
						location="Madison, WI"
						message="Vote for my boss sister to help her win the Alpine Club Photo contest for this photo of the beautiful New Mexico countryside!"/>
					<CardComponent
						image="https://ouishare.s3.amazonaws.com/uploads/user/image/104/Profile_Ouishare.jpg"
						name="Betty Bradford"
						time="18 mins"
						location="Madison, WI"
						message="Vote for my boss sister to help her win the Alpine Club Photo contest for this photo of the beautiful New Mexico countryside!"/>
				</div>
				<div className="row">
					<DateComponent month="October" day="30" dayOfWeek="Thursday"/>
					<DateComponent month="June" day="11" dayOfWeek="Monday"/>
					<DateComponent month="December" day="09" dayOfWeek="Friday"/>
					<DateComponent month="November" day="13" dayOfWeek="Saturday"/>
				</div>
			</div>
		);
	}
});