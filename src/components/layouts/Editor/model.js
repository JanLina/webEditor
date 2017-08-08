export default {
    namespace: 'editor',

    state: {
        template: 'tpl_1',
        inited: false,
        previewing: false,
        activeIndex: 0,
        module: [
            // {
            //     name: 'base/Text',
            //     params: {
            //         content: '<p>双击<b>输入</b>文本</p>'
            //     },
            //     position: {
            //         x: 0,
            //         y: 0
            //     },
            //     effect: {
            //         name: 'slide',
            //         attr: ''
            //     },
            //     style: {
            //         width: '50px',
            //         fontFamily: '微软雅黑',
            //         fontWeight: 'normal',
            //         fontSize: '14px',
            //         textAlign: 'left'
            //     }
            // },
            // {
            //     name: 'base/Image',
            //     position: {
            //         x: 0,
            //         y: 0
            //     },
            //     effect: {
            //         name: 'slide',
            //         attr: ''
            //     },
            //     style: {
            //         width: '50px',
            //         height: '50px'
            //     }
            // }
        ]
    },

    effects: {

    },

    reducers: {
        init(state, action) {
            console.log('Dispatch "editor/init"');
            var newState = deepCopyState(state);
            newState.inited = true;
            action.payload.initModules.forEach(function(item, index) {
                newState.module.push(item)
            });
            return {...state, ...newState};
        },
        preview(state, action) {
            console.log('Dispatch "editor/preview"');
            return {...state, previewing: true};
        },
        closePreview(state, action) {
            console.log('Dispatch "editor/closePreview"');
            return {...state, previewing: false};
        },
    	addText(state, action) {
    		console.log('Dispatch "editor/addText"');
            var newState = deepCopyState(state);
            newState.activeIndex = newState.module.length;
            newState.module.push({
                name: 'base/Text',
                params: {
                    content: '<p>双击<b>输入</b>文本</p>'
                },
                position: {
                    x: 0,
                    y: 0
                },
                effect: {

                },
                style: {
                    width: '200px',
                    fontFamily: '微软雅黑',
                    fontWeight: 'normal',
                    fontSize: '14px',
                    textAlign: 'left'
                }
            });

            return {...state, ...newState};
    	},
        // deleteText(state, action) {
        //     console.log('Dispatch "editor/deleteText"');

        //     var newState = deepCopyState(state);
        //     newState.module.splice(action.payload.index, 1);
        //     // 若删除的控件是当前正在编辑的，改为将第一个控件设为编辑状态
        //     if (action.payload.index === newState.activeIndex) {
        //         newState.activeIndex = 0;
        //     }

        //     return {...state, ...newState};
        // },
        showTextAttribute(state, action) {
            console.log('Dispatch "editor/showTextAttribute"');

            var newState = deepCopyState(state);
            newState.activeIndex = action.payload.index;
            return {...state, ...newState};
        },
        handleTextEdit(state, action) {
            console.log('Dispatch "editor/handleTextEdit"');

            var payload = action.payload,
                index = payload.index,
                type = payload.type,
                newState = deepCopyState(state),
                thisText = newState.module[index],
                style = thisText.style;

            switch(type) {
                case 'fontWeight':
                    style.fontWeight = (style.fontWeight === 'normal' ? 'bold' : 'normal');
                    break;
                case 'textAlign':
                    style.textAlign = payload.align;
                    break;
                case 'fontFamily':
                    style.fontFamily = payload.fontFamily;
                    break;
                case 'changeContent':
                    thisText.params.content = payload.newContent;
                    break;
                case 'setPosition':
                    thisText.position.x = payload.newPos.x;
                    thisText.position.y = payload.newPos.y;
                    break;
                default:
                    break;
            }
            return {...state, ...newState}; 
        }
    }
}

function deepCopyState(state) {
    return JSON.parse(JSON.stringify(state));
}