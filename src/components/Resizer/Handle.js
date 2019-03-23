import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Handle extends Component {

	componentDidMount() {
      this.dragStartMouseX = 0;
      this.dragStartMouseY = 0;
	}
	componentWillUnmount() {
		window.removeEventListener('mousemove', this.resize);
		window.removeEventListener('mouseup', this.stopResize);
	}
	handleMouseDown = (event) => {
		event.preventDefault();
		this.initialWidth = this.props.width;
		this.initialHeight = this.props.height;
		this.dragStartMouseX = event.pageX;
		this.dragStartMouseY = event.pageY;
		this.moveListener = window.addEventListener('mousemove', this.resize)
		this.mouseUpListener = window.addEventListener('mouseup', this.stopResize)
	}
	resize = (event) => {
		const {minHeight, maxHeight, minWidth, maxWidth,resizeVertical, resizeHorizontal} = this.props;

		let newWidth = this.initialWidth;
		let newHeight = this.initialHeight;

		if (resizeHorizontal) {
            newWidth = this.getUpdatedWidth(this.initialWidth, event.pageX, this.dragStartMouseX);
		}

		if (resizeVertical) {
            newHeight = this.getUpdatedHeight(this.initialHeight, event.pageY, this.dragStartMouseY);
		}

		if ((minHeight && newHeight < minHeight) || (maxHeight && newHeight > maxHeight)) {
			newHeight = this.props.height; //Do not change the height;
		}
		if ((minWidth && newWidth < minWidth) || (maxWidth && newWidth > maxWidth)) {
			newWidth = this.props.width; //Do not change the width;
		}
		this.props.onChange(newHeight, newWidth);
		event.preventDefault();
    }
    getUpdatedWidth = (initialWidth, currentPageX, dragStartMouseX) => {
        return initialWidth + (currentPageX - dragStartMouseX)
    }
    getUpdatedHeight = (initialHeight, currentPageY, dragStartMouseY) => {
        return initialHeight + (currentPageY - dragStartMouseY);
    }
	stopResize = () => {
		this.moveListener = null;
		this.mouseUpListener = null;
		window.removeEventListener('mousemove', this.resize)
		window.removeEventListener('mouseup', this.resize)
	}
	getStyleForHandle = () => {
		const commonStyle = {
			position: 'absolute',
			boxSizing: 'border-box',
			backgroundColor: '#00e4fe',
			opacity:'0.8'
		}
		const styleV = {...commonStyle};
		const styleH = {...commonStyle};
		if (this.props.resizeVertical) {
			styleV.bottom = '0';
			styleV.left = '0';
			styleV.cursor = 'row-resize';
			styleV.width = '100%';
			styleV.height = '5px';
		}
		if (this.props.resizeHorizontal) {
			styleH.top = '0';
			styleH.right = '0';
			styleH.cursor = 'col-resize';
			styleH.height = '100%'
			styleH.width = '5px'
		}
		return {styleV, styleH};
	}
	render() {
		const {styleV, styleH} = this.getStyleForHandle();

		return (
			<Fragment>
			{this.props.resizeVertical ? <div style={styleV} onMouseDown={this.handleMouseDown} ></div> : ''}
			{this.props.resizeHorizontal ? <div style={styleH} onMouseDown={this.handleMouseDown}></div> : ''}
			</Fragment>
		);
  	}
}
Handle.propTypes = {
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

Handle.defaultProps = {
	resizeVertical: false,
	resizeHorizontal: false,
};
export default Handle;