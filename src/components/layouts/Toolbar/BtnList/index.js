import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';

import styles from './index.css';

function Index(props) {
	return (
		<ul>
			<li><Button type="default" onClick={props.handleClickText}>文本</Button></li>
		</ul>
		)
}

function mapStateToProps(state) {
    return state.btnList;
}

function mapDispatchToProps(dispatch) {
    return {
        handleClickText() {
            dispatch({
                type: 'editor/addText'
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);