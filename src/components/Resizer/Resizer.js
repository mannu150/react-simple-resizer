import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Handle from './Handle';

class Resizer extends Component {
	constructor(props) {
		super(props);
		const {height, width} = this.props;
		this.state = {height, width};
	}
	handleChange = (height, width) => {
		this.setState({height, width});
	}
	render() {
		const {className, resizeHorizontal, resizeVertical, minWidth, minHeight, maxWidth, maxHeight}  = this.props;
		const {height, width} = this.state;
		const style = {height, width};
		return (
			<div className={`${className} resizer`} style ={style}>
				{this.props.children}
				<Handle 
					resizeHorizontal={resizeHorizontal} 
					resizeVertical={resizeVertical}
					minHeight={minHeight}
					minWidth={minWidth}
					maxWidth={maxWidth}
					maxHeight={maxHeight}
					onChange={this.handleChange}
					height={height}
					width={width}
				/>
			</div>
		);
	}
}
Resizer.propTypes = {
	/** Height in pixels */
	height: PropTypes.number.isRequired,
	/** Width in pixels */
	width: PropTypes.number.isRequired,
	/** Resize in vertical direction */
	resizeVertical: PropTypes.bool.isRequired,
	/** Resize in horizontal direction */
	resizeHorizontal: PropTypes.bool.isRequired,
	/** Minimum width of the children of Resizer component in pixels */
	minWidth: PropTypes.number,
	/** Minimum height of the children of Resizer component in pixels */
	minHeight: PropTypes.number,
	/** Maximum width of the children of Resizer component in pixels */
	maxWidth: PropTypes.number,
	/** Maximum height of the children of Resizer component in pixels */
	maxHeight: PropTypes.number
};
  
Resizer.defaultProps = {
	resizeVertical: false,
	resizeHorizontal: false,
};

export default Resizer;