import React from 'react';
import { connect } from 'dva';

import styles from './index.css';
// import EditorWrapper from '../EditorWrapper';
import Text from '../../widgets/Text';
 
function Index(props) {

	return (
		<div className={styles.editor}>
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
