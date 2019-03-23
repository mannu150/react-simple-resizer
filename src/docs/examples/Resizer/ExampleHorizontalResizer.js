import React, { Component, Fragment } from 'react';
import Resizer from 'react-simple-resizer/Resizer';

/**  Resizer with maxWidth and minWIdth Constraint and resize Horizontal **/
class ExampleHorizontalResizer extends Component {
	render() {

		return (
			<Fragment>
				<Resizer 
					className="box" 
					resizeVertical={false} 
					resizeHorizontal={true} 
					height={185} 
					width={300}
					maxWidth={800}
					minWidth={100}>
					<div style={{backgroundColor:'#82fefe', height: "100%"}}>
                    </div>
				</Resizer>
				<div className="box" style={{backgroundColor:'#6592f0', height:"185px", width:"300px"}}></div>
				<div className="clear"></div>
			</Fragment>                     
		);
	}
}

export default ExampleHorizontalResizer;