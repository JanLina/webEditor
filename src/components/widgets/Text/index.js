import React from 'react';
import { connect } from 'dva';
import { Modal, Button, Menu, Dropdown, Icon } from 'antd';
// import ContentEditable from 'react-contenteditable';	

import styles from './index.css';
import Attribute from '../../layouts/Attribute';
 
function Index(props) {
	var {fontFamily, fontWeight, textAlign, top, left} = props.data;
	var textStyle = {
			fontFamily: fontFamily,
			fontWeight: fontWeight,
			textAlign: textAlign,
			top: top,
			left: left
		};
	var index = props.index;

	var handleDragStart = function(e) {
		e.preventDefault();
		console.log('drag start');

		// 获取元素初始位置（top,left），光标初始位置（结合最后位置计算出元素放置位置）
		var target = e.target;
		var top = target.style.top;
		var left = target.style.left;
		var mouseTop = e.pageY;
		var mouseLeft = e.pageX;
		console.log(top, left, mouseTop, mouseLeft);
	}
	var handleDragEnd = function(e) {
		e.preventDefault();
		console.log('drag end')

		var target = e.target;
		var mouseTop = e.pageY;
		var mouseLeft = e.pageX;
		console.log(mouseTop, mouseLeft);
	}

	// 使用 ContentEditable 组件，textStyle 改变时 style 属性不更新？？
	// return (
	// 	<div>
	// 		<ContentEditable className={styles.eleText} style={textStyle} html={props.data.content} onClick={props.handleShowAttribute.bind(this, index)} onBlur={props.handleTextEdit.bind(this, index, 'changeContent')} />
	// 		{ props.isActive && <Attribute textStyle={textStyle} index={index} /> }
	//     </div>
	// 	);

	return (
		<div>
			<div draggable="true" 
				 onDragStart={handleDragStart} 
				 onDragEnd={handleDragEnd} 
				 dangerouslySetInnerHTML={{__html: props.data.content}} 
				 className={styles.eleText} style={textStyle} 
				 onClick={props.handleShowAttribute.bind(this, index)} 
				 onBlur={props.handleTextEdit.bind(this, index, 'changeContent')} 
				 contentEditable="true">
				
			</div>
			{ props.isActive && <Attribute textStyle={textStyle} index={index} /> }
	    </div>
		);
}

function mapStateToProps(state, ownProps) {
	return {
		data: ownProps.data
	};	
}

function mapDispatchToProps(dispatch) {
	return {
		handleShowAttribute(index) {
			dispatch({
				type: 'editor/showTextAttribute',
				payload: {
					index: index
				}
			});
		},
		handleTextEdit(index, type, e) {
			var newContent = e.target.innerHTML;
			dispatch({
				type: 'editor/handleTextEdit',
				payload: {
					index: index,
					type: type,
					newContent: newContent
				}
			});
		}
	} 
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);