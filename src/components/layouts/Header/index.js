import React from 'react';

import baseStyles from '../../../res/lib/css/base.css';
import styles from './index.css';
import BtnList from '../Toolbar/BtnList';
import ModuleList from '../Toolbar/ModuleList';

function Index() {

	return (
		<div className={`${styles.header} ${baseStyles.clearfix}`}>
			<div className={`${styles.logo} ${baseStyles.l}`}>logo</div>
			<div className={`${styles.btnPanel} ${baseStyles.l}`}>	
				<BtnList />
			</div>
			<div className={`${styles.modulePanel} ${baseStyles.l}`}>
				<ModuleList />
			</div>
			
			<div className={`${styles.controlPanel} ${baseStyles.l} ${baseStyles.clearfix}`}>
				<a href="javascript:void(0);" className={baseStyles.l}>保存</a>
				<a href="javascript:void(0);" className={baseStyles.l}>预览</a>
				<a href="javascript:void(0);" className={baseStyles.l}>关闭</a>
			</div>
		</div>
		)
}

export default Index;