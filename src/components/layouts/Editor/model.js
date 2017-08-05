export default {
    namespace: 'editor',

    // state: {
    //     count: {
    //         text: 0,
    //         image: 0
    //     },
    //     activeIndex: {
    //         text: -1,
    //         image: -1
    //     },
    //     text: [

    //     ],
    //     image: [

    //     ]
    // },

    state: {
        {
            name: 'base/Text',
            params: {
                content: '<p>双击<b>输入</b>文本</p>'
            },
            position: {
                x: 0,
                y: 0
            },
            effect: {
                name: 'slide',
                attr: ''
            },
            style: {
                width: '50px',
                fontFamily: '微软雅黑',
                fontWeight: 'normal',
                fontSize: '14px',
                textAlign: 'left'
            }
        },
        {
            name: 'base/Image',
            position: {
                x: 0,
                y: 0
            },
            effect: {
                name: 'slide',
                attr: ''
            },
            style: {
                width: '50px',
                height: '50px'
            }
        }
    }

    effects: {

    },

    reducers: {
    	addText(state, action) {
    		console.log('Dispatch "editor/addText"');

            var newState = deepCopyState(state);
            newState.count.text += 1;
            newState.activeIndex.text = newState.count.text - 1;
            newState.text.push({
                top: 0,
                left: 0,
                content: '输入文本',
                fontWeight: 'normal',
                textAlign: 'left',
                fontFamily: '微软雅黑'
            });

            return {...state, ...newState};
    	},
        deleteText(state, action) {
            console.log('Dispatch "editor/deleteText"');

            var newState = deepCopyState(state);
            newState.count.text -= 1;
            newState.text.splice(action.payload.index, 1);

            return {...state, ...newState};
        },
        showTextAttribute(state, action) {
            console.log('Dispatch "editor/showTextAttribute"');

            var newState = deepCopyState(state);
            newState.activeIndex.text = action.payload.index;
            return {...state, ...newState};
        },
        handleTextEdit(state, action) {
            console.log('Dispatch "editor/handleTextEdit"');

            var payload = action.payload,
                index = payload.index,
                type = payload.type,
                newState = deepCopyState(state),
                thisText = newState.text[index];

            switch(type) {
                case 'fontWeight':
                    thisText.fontWeight = (thisText.fontWeight === 'normal' ? 'bold' : 'normal');
                    break;
                case 'textAlign':
                    thisText.textAlign = payload.align;
                    break;
                case 'fontFamily':
                    thisText.fontFamily = payload.fontFamily;
                    break;
                case 'changeContent':
                    thisText.content = payload.newContent;
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