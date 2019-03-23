import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Handle1 extends Component {

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
			newWidth = this.initialWidth + (event.pageX - this.dragStartMouseX);
		}

		if (resizeVertical) {
			newHeight = this.initialHeight + (event.pageY - this.dragStartMouseY);
		}

		if ((minHeight && newHeight < minHeight) || (maxHeight && newHeight > maxHeight)) {
			newHeight = this.initialHeight; //Do not change the height;
		}
		if ((minWidth && newWidth < minWidth) || (maxWidth && newWidth > maxWidth)) {
			newWidth = this.initialWidth; //Do not change the width;
		}
		this.props.onChange(newHeight, newWidth);
		event.preventDefault();
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
			opacity:'0.8',
			width: '5px'
		}
		const styleV = {...commonStyle};
		const styleH = {...commonStyle};
		if (this.props.resizeVertical) {
			styleV.bottom = '0';
			styleV.left = '0';
			styleV.cursor = 'row-resize';
			styleV.width = "100%";
		}
		if (this.props.resizeHorizontal) {
			styleH.top = '0';
			styleH.right = '0';
			styleH.cursor = 'col-resize';
			styleH.height = '100%';
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

export default Handle1;