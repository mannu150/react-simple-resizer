import React, { Component, Fragment } from 'react';
import Resizer from 'react-simple-resizer/Resizer';

class ExampleResizer extends Component {
	render() {

		return (
			<Fragment>
				<Resizer className="box" resizeVertical={false} resizeHorizontal={true} height={185} width={300}>
					<div style={{backgroundColor:'#82fefe', height: "100%"}}>one</div>
				</Resizer>
				<div className="box" style={{backgroundColor:'#6592f0', height:"185px", width:"300px"}}>two</div>
			</Fragment>                     
		);
	}
}

export default ExampleResizer;