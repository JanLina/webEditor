import React from 'react';
import { connect } from 'dva';
import { Modal, Button, Menu, Dropdown, Icon } from 'antd';
import Draggable from 'react-draggable';

import styles from './index.css';
import Attribute from '../../../layouts/Attribute';
 
function Index(props) {
	var {params, position, effect, style} = props.data;
	var textStyle = style;
	style.top = position.y;
	style.left = position.x;
	var index = props.index,
		uneditable = props.uneditable,
		initPos = {};

	var handleDragStart = function(e) {
		var target = e.target;

		console.log(target.style)

		initPos.top = parseInt(target.style.top);
		initPos.left = parseInt(target.style.left);
		initPos.mouseTop = parseInt(e.pageY);
		initPos.mouseLeft = parseInt(e.pageX);
	}
	var handleDragStop = function(e, position) {
		// const {x, y} = position;
		// console.log(position)
		// props.handleTextEdit(index, 'setPosition', {x: x, y: y});

		var target = e.target,
			mouseTop = parseInt(e.pageY),
			mouseLeft = parseInt(e.pageX),
			newX = mouseLeft - initPos.mouseLeft + initPos.left,
			newY = mouseTop - initPos.mouseTop  + initPos.top;
		console.log(mouseTop, mouseLeft);
		console.log(initPos)
		console.log(newX, newY)
		// 设置Text新位置
		props.handleTextEdit(index, 'setPosition', {x: newX, y: newY});
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
			<Draggable onStart={handleDragStart}
					   onStop={handleDragStop}>
				<div dangerouslySetInnerHTML={{__html: params.content}} 
					 className={`${styles.eleText} ${uneditable && styles.uneditableText}`} 
					 style={textStyle} 
					 onClick={props.handleShowAttribute.bind(this, index)} 
					 onBlur={props.handleTextEdit.bind(this, index, 'changeContent', {})} 
					 contentEditable={!uneditable}>
					
				</div>
			</Draggable>
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
		handleTextEdit(index, type, newPos, e) {
			var payload = {
					index: index,
					type: type
				};
			switch(type) {
				case 'changeContent':
					payload.newContent = e.target.innerHTML;
					break;
				case 'setPosition':
					payload.newPos = newPos;
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