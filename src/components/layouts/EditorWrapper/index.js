import React from 'react';
import { connect } from 'dva';

import styles from './index.css';
import Text from '../../widgets/Text';
 
function Index(props) {
	console.log('props in wrapper: ');
	console.log(props)

	return (
		<div className={styles.wrap}>
			{ props.data.map((item, i) => <Text data={item} key={i} />) }
		</div>
		)
}

function mapStateToProps(state, ownProps) {
    return {...state.editor, ...ownProps};
}

export default connect(mapStateToProps)(Index);

// export default Index;