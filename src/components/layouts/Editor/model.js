export default {
    namespace: 'editor',

    state: {
        count: {
            // text: 2,
            text: 0,
            image: 0
        },
        text: [
            // {
            //     fontWeight: 'bold',
            //     textAlign: 'left',
            //     fontFamily: '宋体'
            // },
            // {
            //     fontWeight: 'bold',
            //     textAlign: 'center',
            //     fontFamily: '宋体'
            // }
        ],
        image: [

        ]
    },

    effects: {

    },

    reducers: {
    	addText(state, action) {
    		console.log('Dispatch "editor/addText"');
            console.log(state);

            state.text.push({
                fontWeight: 'normal',
                textAlign: 'left', 
                fontFamily: '微软雅黑'
            });
            state.count.text += 1;

            return {...state, text: state.text, count: state.count};
    	}
    }
}
