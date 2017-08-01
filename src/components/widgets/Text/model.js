export default {
    namespace: 'text',

    state: {
		modalVisible: false,
		isBold: false,
		textAlign: 'left'
    },

    effects: {
        
    },

    reducers: {
    	showModal(state, action) {
    		console.log('Dispatch "text/showModal"');
    		return {...state, modalVisible: true};
    	},
    	hideModal(state, action) {
    		console.log('Dispatch "text/hideModal"');
    		return {...state, modalVisible: false};
    	},
    	handleFontWeight(state, action) {
    		console.log('Dispatch "text/handleFontWeight"');
    		return {...state, isBold: !state.isBold};
    	},
    	handleTextAlign(state, action) {
    		console.log('Dispatch "text/handleTextAlign"');
    		return {...state, textAlign: action.payload.align};
    	}
    }
}