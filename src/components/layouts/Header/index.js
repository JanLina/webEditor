import React from 'react';
import {connect} from 'dva';
import { Button } from 'antd';

import baseStyles from '../../../assets/res/lib/css/base.css';
import styles from './index.css';
import BtnList from '../Toolbar/BtnList';
import ModuleList from '../Toolbar/ModuleList';

function Index(props) {
	return (
		<div className={`${styles.header} ${baseStyles.clearfix}`}>
			<div className={`${styles.logo} ${baseStyles.l}`}>logo</div>
			<div className={`${styles.btnPanel} ${baseStyles.l}`}>	
				<BtnList />
			</div>
			<div className={`${styles.modulePanel} ${baseStyles.l}`}>
				<ModuleList />
			</div>
			
			<ul className={`${styles.controlPanel} ${baseStyles.r} ${baseStyles.clearfix}`}>
				<li className={baseStyles.l}>
					<Button type="primary">保存</Button>
				</li>
				<li className={baseStyles.l}>
					<Button type="primary" onClick={props.preview}>预览</Button>
				</li>
				<li className={baseStyles.l}>
					<Button type="primary">关闭</Button>
				</li>
			</ul>
		</div>
		)
}

function mapStateToProps(state) {
	return state.header;
}
function mapDispatchToProps(dispatch) {
	return {
		preview() {
			dispatch({
				type: 'editor/preview'
			});
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);