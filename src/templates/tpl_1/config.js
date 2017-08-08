var config = {
	modules : [
		{
			name: 'base/Text',
			params: {
				content: '文本1 by 模板1'
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
				width: '200px',
				fontFamily: '微软雅黑',
				fontWeight: 'normal',
				fontSize: '14px',
				textAlign: 'center'
			}
		},
		{
			name: 'base/Text',
			params: {
				content: '文本2 by 模板1'
			},
			position: {
				x: 10,
				y: 10
			},
			effect: {
				name: 'slide',
				attr: ''
			},
			style: {
				width: '150px',
				fontFamily: '微软雅黑',
				fontWeight: 'normal',
				fontSize: '20px',
				textAlign: 'left'
			}
		},
	]
}

export default config;