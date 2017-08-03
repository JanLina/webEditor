import React from 'react';
import { connect } from 'dva';
import { Button, Menu, Dropdown, Icon } from 'antd';

import styles from './index.css';

function Index(props) {
	var textStyle = props.initialStyles,
		index = props.index;
		
	var handleTextAlign = function(e) {
		var target = e.srcElement || e.target,
			h = '',
			align = '';
		if (target.tagName.toLowerCase() === 'button') {
			target = target.getElementsByTagName('span')[0];
		}
		h = target.innerHTML;

		switch (h) {
			case '左对齐':
				align = 'left';
				break;
			case '居中':
				align = 'center';
				break;
			case '右对齐':
				align = 'right';
				break;
			default:
				break;
		}

		props.handleTextEdit(index, 'textAlign', align);
	}

	var handleFontFamily = function(e) {
		var target = e.srcElement || e.target,
			fontFamily = target.innerHTML;
		props.handleTextEdit(index, 'fontFamily', '', fontFamily);
	}

	const fontSizeMenu = (
	  <Menu>
	    <Menu.Item>
	      <span onClick={handleFontFamily}>微软雅黑</span>
	    </Menu.Item>
	    <Menu.Item>
	      <span onClick={handleFontFamily}>宋体</span>
	    </Menu.Item>
	    <Menu.Item>
	      <span onClick={handleFontFamily}>正楷</span>
	    </Menu.Item>
	    <Menu.Item>
	      <span onClick={handleFontFamily}>Serif</span>
	    </Menu.Item>
	    <Menu.Item>
	      <span onClick={handleFontFamily}>Georgia</span>
	    </Menu.Item>
	  </Menu>
	);

	return (
		<div>
			  <Dropdown overlay={fontSizeMenu} onClick={handleFontFamily}>
			    <a className="ant-dropdown-link" href="#">
			      字体 <Icon type="down" />
			    </a>
			  </Dropdown>
			  <Button type="primary" className={styles.btn} onClick={props.handleTextEdit.bind(this, index, 'fontWeight')}>
				加粗
			  </Button>
			  <Button type="primary" className={styles.btn} onClick={handleTextAlign}>
			  	左对齐
			  </Button>
			  <Button type="primary" className={styles.btn} onClick={handleTextAlign}>
			  	居中
			  </Button><Button type="primary" className={styles.btn} onClick={handleTextAlign}>
			  	右对齐
			  </Button>
		</div>
		);
}

function mapStateToProps(state) {
	return state.styles;
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		handleTextEdit(index, type, align = '', fontFamily = '') {
			var payload = {index: index, type: type};
			switch(type) {
				case "textAlign":
					payload.align = align;
					break;
				case "fontFamily":
					payload.fontFamily = fontFamily;
					break;
				default: 
					break;
			}

			dispatch({
				type: 'editor/handleTextEdit',
				payload: payload
			});
		}
	} 
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);