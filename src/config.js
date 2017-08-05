var config = {
	modules : [
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
		},
	]
}



// var config = {
// 	modules : [
// 		{
// 			name: 'base/text',
// 			params: {
// 				content: '<p>双击<b>输入</b>文本</p>'
// 			},
// 			position: {
// 				x: 0,
// 				y: 0
// 			},
// 			effect: {
// 				name: 'slide',
// 				attr: ''
// 			},
// 			style: {
				
// 			}
// 		},
// 		{
// 			name: 'biz/countdown',
// 			position: {
// 				x: 0,
// 				y: 0
// 			},
// 			effect: {
// 				name: 'slide',
// 				attr: ''
// 			}
// 		},
// 	]
// }

/*

布局类型：
1.绝对定位: 幻灯片
2.流布局: 普通wap页，自上而下

*/