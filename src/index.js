import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./components/layouts/Editor/model.js'));
app.model(require('./components/layouts/Toolbar/BtnList/model.js'));
app.model(require('./components/widgets/Text/model.js'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
