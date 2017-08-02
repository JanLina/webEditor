import React from 'react';
import { connect } from 'dva';

import styles from './index.css';
import EditorWrapper from '../EditorWrapper';
// import Text from '../../widgets/Text';
 
function Index(props) {

	return (
		<div className={styles.editor}>
			<EditorWrapper data={props.text} />
		</div>
		)
}

// 将 store 中的数据作为 props 绑定到组件上
// 当 state 变化，或者 ownProps 变化的时候，mapStateToProps 都会被调用，
// 计算出一个新的 stateProps，（在与 ownProps merge 后）更新给 MyComp
function mapStateToProps(state) {
    return state.editor;
} 

export default connect(mapStateToProps)(Index);
