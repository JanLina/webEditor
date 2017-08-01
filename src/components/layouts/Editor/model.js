export default {
    namespace: 'editor',

    state: {
        text: false
    },

    effects: {

    },

    reducers: {
    	addText(state, action) {
    		console.log('Dispatch "editor/addText"');
    		return {...state, text: true};
    	}
    }
}