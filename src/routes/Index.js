import React from 'react';
import { connect } from 'dva';

import styles from './Index.css';
import Frame from '../components/layouts/Frame';

function Index() {
  return (
    <Frame />
    // <div>
    //   this is index
    // </div>	
  );
}

export default Index;

// function mapStateToProps() {
//   return {};
// }

// export default connect(mapStateToProps)(Index);
