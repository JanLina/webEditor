import React from 'react';
import { Tabs } from 'antd';

import baseStyles from '../../../res/lib/css/base.css';
import styles from './index.css';
import Pages from '../Page/Pages';
import Modals from '../Page/Modals';
import Editor from '../Editor';
import Styles from '../Attribute/Styles';
import Animations from '../Attribute/Animations';
import Events from '../Attribute/Events';

function Index() {
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
				<div className={styles.attributePanel}>
					<Tabs defaultActiveKey="styles" onChange={handleChangeAttribute}>
						<TabPane tab="文本" key="styles">
							<Styles />
						</TabPane>
					    <TabPane tab="动画" key="animations">
					    	<Animations />
					    </TabPane>
					    <TabPane tab="点击" key="events">
					    	<Events />
					    </TabPane>
					</Tabs>
				</div>
			</div>
		</div>
		)
}

export default Index;