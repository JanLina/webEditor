export default {
    namespace: 'text',

    state: {
		// modalVisible: false,
		// isBold: false,
		// textAlign: 'left',
		// fontFamily: '微软雅黑',
  //       reserveState: {
  //           isBold: false,
  //           textAlign: 'left',
  //           fontFamily: '微软雅黑'
  //       }
    },

    effects: {
        
    },

    reducers: {
    	showModal(state, action) {
    		console.log('Dispatch "text/showModal"');
    		return {...state, reserveState: { isBold: state.isBold, textAlign: state.textAlign, fontFamily: state.fontFamily }, modalVisible: true};
    	},
    	hideModal(state, action) {
    		console.log('Dispatch "text/hideModal"');
    		return {...state, modalVisible: false};
    	},
    	handleFontWeight(state, action) {
    		console.log('Dispatch "text/handleFontWeight"');
    		return {...state, isBold: state.isBold === 'normal' ? 'bold' : 'normal'};
    	},
        handleFontFamily(state, action) {
            console.log('Dispatch "text/handleFontFamily"');
            return {...state, fontFamily: action.payload.fontFamily};
        },
    	handleTextAlign(state, action) {
    		console.log('Dispatch "text/handleTextAlign"');
    		return {...state, textAlign: action.payload.align};
    	},
        rollBack(state, action) {
            console.log('Dispatch "text/rollBack"');
            return {...state, isBold: state.reserveState.isBold, textAlign: state.reserveState.textAlign, fontFamily: state.reserveState.fontFamily};
        }
    }
}