// 删除class
function removeClass(dom, className) {
	var classes = [],
		oldClass = dom.className,
		index

	classes = oldClass.split(' ')
	index = classes.indexOf(oldClass)
	classes.splice(index, 1)
	classes = classes.join(' ')
	dom.className = classes
}

// 添加class
function addClass(dom, className) {
	var oldClass = dom.className + ' ' || ''
	dom.className = oldClass + className
}
window.onload = function() {

	var frag = document.createDocumentFragment()

	// 循环生成30*30个座位
	for (let i = 0; i < 30; i++) {
		let groupDom = document.createElement('DIV')
		groupDom.setAttribute('class', 'group')
		for (let j = 0; j < 30; j++) {
			let itemDom = document.createElement('DIV')
			itemDom.setAttribute('class', 'item')
			groupDom.appendChild(itemDom)
		}
		frag.appendChild(groupDom)
	}
	document.getElementById("main").appendChild(frag);

	// 事件绑定
	document.addEventListener('touchstart', function(event) {
		let target = event.target
		if (target.matches('.item')) {
			let oldClass = target.className || ' '
			if (oldClass && oldClass.indexOf('active') >= 0) {
				removeClass(target, 'active')
			} else {
				addClass(target, 'active')
			}
		}
	})

}