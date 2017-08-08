import React from 'react';
import { connect } from 'dva';
// import Draggable from 'react-draggable'; 

import styles from './index.css';
import PreviewPopup from '../PreviewPopup';
import Text from '../../modules/base/Text';

function Index(props) {

	// 根据模板的 config.js 初始化 editor
	var template = require('../../../templates/' + props.template + '/config.js'),
		initModules = template.modules;
	if (props.inited === false) {
		props.init(initModules);
	}

	return (
		<div className={styles.editor}>
			<div className={styles.wrap} id="wrapper">
				{ 
					props.module.map((item, i) => {
						if (item.name === 'base/Text') {
							return <Text data={item} key={i} index={i} isActive={props.activeIndex === i} />;
						}
					}) 
				}
			</div>
			{ props.previewing && <PreviewPopup dataSource={props.module} /> }
		</div>
		)
}

function mapStateToProps(state) {
    return state.editor;
} 
function mapDispatchToProps(dispatch) {
	return {
		init(initModules) {
			dispatch({
				type: 'editor/init',
				payload: {
					initModules: initModules
				}
			})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
