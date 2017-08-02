import React from 'react';
import { connect } from 'dva';
import { Modal, Button, Menu, Dropdown, Icon } from 'antd';

import styles from './index.css';
 
function Index(props) {
	var textStyle = props.data;

	var handleOk = function() {
		props.hideModal();
	}
	var handleCancel = function() {
		props.rollBack();
		props.hideModal();
	}
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

		props.handleTextAlign(align);
	}

	var handleFontFamily = function(e) {
		var target = e.srcElement || e.target,
			fontFamily = target.innerHTML;
		props.handleFontFamily(fontFamily);
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
			<div className={styles.eleText} onClick={props.showModal} style={textStyle}>
				输入文本
			</div>
			<Modal
	          title="TextEdit Modal"
	          visible={props.modalVisible}
	          onOk={handleOk}
	          onCancel={handleCancel}
	        >
	          <Dropdown overlay={fontSizeMenu} onClick={handleFontFamily}>
			    <a className="ant-dropdown-link" href="#">
			      字体 <Icon type="down" />
			    </a>
			  </Dropdown>
			  <Button type="primary" className={styles.btn} onClick={props.handleFontWeight}>
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
	        </Modal>
	    </div>
		)
}

function mapStateToProps(state) {
	return state.text;
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		showModal() {
			dispatch({
				type: 'text/showModal'
			});
		},
		hideModal() {
			dispatch({
				type: 'text/hideModal'
			});
		},
		handleTextAlign(align) {
			dispatch({
				type: 'text/handleTextAlign',
				payload: {
					align: align
				}
			});
		},
		handleFontWeight() {
			dispatch({
				type: 'text/handleFontWeight'
			});
		},
		handleFontFamily(fontFamily) {
			dispatch({
				type: 'text/handleFontFamily',
				payload: {
					fontFamily: fontFamily
				}
			});
		},
		rollBack() {
			dispatch({
				type: 'text/rollBack'
			});
		}
	} 
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);