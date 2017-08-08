import React from 'react';
import { connect } from 'dva';
import { Modal, Button } from 'antd';

import styles from './index.css';
 
function Index(props) {
	var modules = {};

	return (
		<div className={`${styles.popupWindow}`}>
			<Modal
	          title="Preview Modal"
	          visible={true}
	          onOk={props.hideModal}
	          onCancel={props.hideModal}
	        >
	          	<div className={styles.wrapper}>
					{
						props.dataSource.map((item, i) => {
							var modulePath = item.name,
								moduleName = modulePath.split('/')[1];

							switch(moduleName) {
								case 'Text':
									if (!modules[moduleName]) {
										modules.Text = require('../../modules/base/Text');
									}
									return <modules.Text data={item} key={i} index={i} isActive={props.activeIndex === i} uneditable={true} />;
							}
						})
					}
				</div>
	        </Modal>
		</div>
		)
}

function mapStateToProps(state) {
	return state.previewPopup;
}
function mapDispatchToProps(dispatch) {
	return {
		hideModal() {
			dispatch({
				type: 'editor/closePreview'
			});
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
