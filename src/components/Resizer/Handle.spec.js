import React from 'react';
import { shallow } from 'enzyme';
import Handle from './Handle';

describe('Handle component', ()=> {
	test('getStyleForHandle return correct style pbject for vertical handles', () => {
		const wrapper = shallow(<Handle resizeVertical={true} height={1} width={1}/>);
		const {styleV} = wrapper.instance().getStyleForHandle();
		expect(styleV).toHaveProperty('cursor', 'row-resize');
		expect(styleV).toHaveProperty('left', '0');
		expect(styleV).toHaveProperty('bottom', '0');
	});

	test('getStyleForHandle return correct style pbject for horizontal handles', () => {
		const wrapper = shallow(<Handle resizeVertical={false} resizeHorizontal={true} height={1} width={1}/>);
		const {styleH} = wrapper.instance().getStyleForHandle();
		expect(styleH).toHaveProperty('cursor', 'col-resize');
		expect(styleH).toHaveProperty('top', '0');
		expect(styleH).toHaveProperty('right', '0');
	});
	
	test('getUpdatedWidth return correct result when initialWidth=300,currentPageX=598,dragStartMouseX=597', () => {
		const wrapper = shallow(<Handle resizeVertical={false} resizeHorizontal={true} height={1} width={1}/>);
		const newWidth = wrapper.instance().getUpdatedWidth(300, 598, 597);
		expect(newWidth).toEqual(301);
	});

	test('getUpdatedHeight return correct result when initialHeight=185,currentPageY=1002,dragStartMouseY=1000', () => {
		const wrapper = shallow(<Handle resizeVertical={true} resizeHorizontal={false} height={1} width={1}/>);
		const newHeight = wrapper.instance().getUpdatedHeight(185, 1002, 1000);
		expect(newHeight).toEqual(187);
	});
});