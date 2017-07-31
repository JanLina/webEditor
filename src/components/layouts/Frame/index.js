import React from 'react';
import {connect} from 'dva';

import baseStyles from '../../../res/lib/css/base.css';
import styles from './index.css';
import Header from '../Header';
import Main from '../Main';
 
function Index(props) {

	return (
		<div className={styles.container}>
			<Header />
			<Main />
		</div>
		)
}

export default Index;

// function mapStateToProps(state) {
// 	console.log('@frame state:',state);
//     return state.frame;
// }

// export default connect(mapStateToProps)(Index);
