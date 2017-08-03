import React from 'react';
import { connect } from 'dva';
import { Modal, Button, Menu, Dropdown, Icon } from 'antd';

import styles from './index.css';
import Attribute from '../../layouts/Attribute';
 
function Index(props) {
	var {fontFamily, fontWeight, textAlign} = props.data;

	var textStyle = {
			fontFamily: fontFamily,
			fontWeight: fontWeight,
			textAlign: textAlign
		},
		index = props.index;

	// 对文本内容进行转义
	var decodedContent = props.data.content.replace('&nbsp;', ' ');

	return (
		<div>
			<div draggable="true" className={styles.eleText} style={textStyle} onClick={props.handleShowAttribute.bind(this, index)} onKeyUp={props.handleTextEdit.bind(this, index, 'changeContent')} contentEditable="true">
				{decodedContent}
			</div>
			{ props.isActive && <Attribute textStyle={textStyle} index={index} /> }
	    </div>
		)
}

function mapStateToProps(state) {
	return state.text;
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