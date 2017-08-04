import React from 'react';
import { connect } from 'dva';

import styles from './index.css';
import Text from '../../widgets/Text';
 
function Index(props) {
	console.log(props.activeIndex.text);

	var handleDragEnter = function(e) {
		e.preventDefault();
		e.stopPropagation();
		console.log('drag enter');
	}
	var handleDragOver = function(e) {
		e.preventDefault();
		e.stopPropagation();
		console.log('drag over');
	}
	var handleDrop = function(e) {
		e.preventDefault();
		e.stopPropagation();
		console.log('drop');
	}
	

	return (
		<div className={styles.editor} 
			 onDragEnter={handleDragEnter} 
			 onDragOver={handleDragOver} 
			 onDrop={handleDrop}>
			<div className={styles.wrap}>
				{ props.text.map((item, i) => <Text data={item} key={i} index={i} isActive={props.activeIndex.text === i} />) }
			</div>
		</div>
		)
}

function mapStateToProps(state) {
    return state.editor;
} 

export default connect(mapStateToProps)(Index);
