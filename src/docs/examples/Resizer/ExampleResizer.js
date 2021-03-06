import React, { Component, Fragment } from 'react';
import Resizer from 'react-simple-resizer/Resizer';

/** Resizer with both horizontal and vertical resizing capabilities **/
class ExampleResizer extends Component {
	render() {

		return (
			<Fragment>
				<Resizer 
					className="box" 
					resizeVertical={true} 
					resizeHorizontal={true} 
					height={185} 
					width={300}
					maxWidth={800}
					minWidth={10}
                    minHeight={10}
                    maxHeight={800}>
					<div style={{backgroundColor:'#82fefe', height: "100%"}}></div>
				</Resizer>
				<div className="box" style={{backgroundColor:'#6592f0', height:"185px", width:"300px"}}></div>
				<div className="clear"></div>
			</Fragment>                     
		);
	}
}

export default ExampleResizer;