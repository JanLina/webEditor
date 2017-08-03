import React from 'react';
import { connect } from 'dva';
import { Tabs } from 'antd';

import styles from './index.css';
import Styles from './Styles';
import Animations from './Animations';
import Events from './Events';
 
function Index(props) {
	var textStyle = props.textStyle,
		index = props.index;
	const TabPane = Tabs.TabPane;
	return (
		<div className={styles.right}>
			<Tabs defaultActiveKey="styles">
				<TabPane tab="文本" key="styles">
					<Styles initialStyles={textStyle} index={index}/>
				</TabPane>
			    <TabPane tab="动画" key="animations">
			    	<Animations />
			    </TabPane>
			    <TabPane tab="点击" key="events">
			    	<Events />
			    </TabPane>
			</Tabs>
		</div>
		)
}

export default Index;