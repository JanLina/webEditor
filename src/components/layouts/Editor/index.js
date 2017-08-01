import React from 'react';
import { connect } from 'dva';

import styles from './index.css';
import Text from '../../widgets/Text';
 
function Index(props) {

	return (
		<div className={styles.editor}>
			<div className={styles.wrap}>
				{
					props.text && <Text />
				}
			</div>
		</div>
		)
}

function mapStateToProps(state) {
    return state.editor;	
}

export default connect(mapStateToProps)(Index);
