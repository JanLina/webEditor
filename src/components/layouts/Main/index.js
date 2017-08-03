import React from 'react';
import { connect } from 'dva';
import { Tabs } from 'antd';

import baseStyles from '../../../res/lib/css/base.css';
import styles from './index.css';
import Pages from '../Page/Pages';
import Modals from '../Page/Modals';
import Editor from '../Editor';

function Index(props) {
	const TabPane = Tabs.TabPane;	

	let handleChangePage = key => {
		console.log(key);
	} 	
	let handleChangeAttribute = key => {
		console.log(key);
	}

	return (
		<div className={`${styles.main} ${baseStyles.pa}`}>
			<div className={`${styles.left} ${baseStyles.pa}`}>
				<div className={styles.pagePanel}>
					<Tabs defaultActiveKey="pages" onChange={handleChangePage}>
						<TabPane tab="页面" key="pages">
							<Pages />
						</TabPane>
					    <TabPane tab="弹窗" key="modals">
					    	<Modals />
					    </TabPane>
					</Tabs>
				</div>
			</div>
			<div className={`${styles.middle} ${baseStyles.pa}`}>
				<div className={styles.editorPanel}>
					<Editor />
				</div>
			</div>
			<div className={`${styles.right} ${baseStyles.pa}`}>
				
			</div>
		</div>
		)
}

function mapStateToProps(state) {
	return state.main;
}

export default connect(mapStateToProps)(Index);