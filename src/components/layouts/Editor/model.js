export default {
    namespace: 'editor',

    state: {
        count: {
            text: 0,
            image: 0
        },
        activeIndex: {
            text: -1,
            image: -1
        },
        text: [
          
        ],
        image: [

        ]
    },

    effects: {

    },

    reducers: {
    	addText(state, action) {
    		console.log('Dispatch "editor/addText"');

            var newState = JSON.stringify(state);
            newState = JSON.parse(newState);
            newState.count.text += 1;
            newState.activeIndex.text = newState.count.text - 1;
            newState.text.push({
                content: '输入文本',
                fontWeight: 'normal',
                textAlign: 'left',
                fontFamily: '微软雅黑'
            });

            return {...state, ...newState};
    	},
        deleteText(state, action) {
            console.log('Dispatch "editor/deleteText"');

            var newState = JSON.stringify(state);
            newState = JSON.parse(newState);
            newState.count.text -= 1;
            newState.text.splice(action.payload.index, 1);

            return {...state, ...newState};
        },
        showTextAttribute(state, action) {
            console.log('Dispatch "editor/showTextAttribute"');
            var newState = JSON.stringify(state);
            newState = JSON.parse(newState);
            newState.activeIndex.text = action.payload.index;
            return {...state, ...newState};
        },
        handleTextEdit(state, action) {
            console.log('Dispatch "editor/handleTextEdit"');

            var payload = action.payload,
                index = payload.index,
                type = payload.type,
                newState,
                thisText;

            console.log('index: ' + index + '  type: ' + type);

            newState = JSON.stringify(state);
            newState = JSON.parse(newState);
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
