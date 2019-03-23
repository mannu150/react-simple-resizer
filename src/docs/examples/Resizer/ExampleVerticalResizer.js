import React, { Component, Fragment } from 'react';
import Resizer from 'react-simple-resizer/Resizer';

/**  Resizer with no vertical Constraint and resize Vertical **/
class ExampleVerticalResizer extends Component {
	render() {

		return (
			<Fragment>
				<Resizer 
					className="box" 
					resizeVertical={true} 
					resizeHorizontal={false} 
					height={185} 
					width={300}
                    >
					<div style={{backgroundColor:'#82fefe', height: "100%"}}></div>
				</Resizer>
				<div className="box" style={{backgroundColor:'#6592f0', height:"185px", width:"300px"}}></div>
				<div className="clear"></div>
			</Fragment>                     
		);
	}
}

export default ExampleVerticalResizer;