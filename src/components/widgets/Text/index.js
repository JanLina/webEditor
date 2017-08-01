import React from 'react';
import { connect } from 'dva';
import { Modal, Button, Menu, Dropdown, Icon } from 'antd';

import styles from './index.css';
 
function Index(props) {
	var textStyle = {
		fontWeight: props.isBold ? "bold" : "normal",
		textAlign: props.textAlign
	}
	const fontSizeMenu = (
	  <Menu>
	    <Menu.Item>
	      微软雅黑
	    </Menu.Item>
	    <Menu.Item>
	      宋体
	    </Menu.Item>
	    <Menu.Item>
	      正楷
	    </Menu.Item>
	  </Menu>
	);

	var handleOk = function() {
		props.hideModal();
	}
	var handleCancel = function() {
		props.hideModal();
	}

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
	          <Dropdown overlay={fontSizeMenu}>
			    <a className="ant-dropdown-link" href="#">
			      字体 <Icon type="down" />
			    </a>
			  </Dropdown>
			  <Button type="primary" className={styles.btn} onClick={props.handleFontWeight}>
				加粗
			  </Button>
			  <Button type="primary" className={styles.btn} onClick={props.handleTextAlignLeft}>
			  	左对齐
			  </Button>
			  <Button type="primary" className={styles.btn} onClick={props.handleTextAlignCenter}>
			  	居中
			  </Button><Button type="primary" className={styles.btn} onClick={props.handleTextAlignRight}>
			  	右对齐
			  </Button>
	        </Modal>
	    </div>
		)
}

function mapStateToProps(state) {
	return state.text;
}

function mapDispatchToProps(dispatch) {
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
		handleTextAlignLeft() {
			dispatch({
				type: 'text/handleTextAlign',
				payload: {
					align: 'left'
				}
			});
		},
		handleTextAlignCenter() {
			dispatch({
				type: 'text/handleTextAlign',
				payload: {
					align: 'center'
				}
			});
		},
		handleTextAlignRight() {
			dispatch({
				type: 'text/handleTextAlign',
				payload: {	
					align: 'right'
				}
			});
		},
		handleFontWeight() {
			dispatch({
				type: 'text/handleFontWeight'
			});
		}
	} 
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);