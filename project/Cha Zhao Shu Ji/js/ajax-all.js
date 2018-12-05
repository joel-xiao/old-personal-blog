// {
// 	user:'ckk',
// 	pass:'123456'
// }
// 'user=ckk&pass=123456'

function jsonToStr(obj) {
	var str = '';
	for (var key in obj) {
		str += key +'='+ obj[key] + '&';
	}
	
	return str.substring(0, str.length-1);
}


// {
// 	type:请求方式 默认get,
// 	url:服务器地址,
// 	dataType:json xml  text  默认text,
// 	params:{} 参数,
// 	success:fn 请求成功的回调函数,
// 	isAsync: 是否异步 默认异步
// }

function ajax(obj) {
	if (!obj || !obj.url) {
		console.log('ajax方法使用错误');
		return;
	}

	var xhr = XMLHttpRequest?new XMLHttpRequest():new ActiveXObject('Microsoft.XMLHTTP');
	// 处理type  如果有 取小写 没有就默认给get
	obj.type = !obj.type?'get':obj.type.toLowerCase()

	if (!obj.isAsync) {
		obj.isAsync = true;
	}
	switch (obj.type) {
		case 'get':
			xhr.open('get', obj.url+'?' + jsonToStr(obj.params),obj.isAsync);
 			xhr.send();
			break;

		case 'post':
			xhr.open('post', obj.url, obj.isAsync);
 			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
 			xhr.send(jsonToStr(obj.params));
			break;	
		default:
			console.log('type类型有误');
 			return;
			break;
	}

 	xhr.onreadystatechange = function () {
 		if (xhr.readyState == 4) {
 			if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304 ) {
 				switch (obj.dataType) {
 					case 'json':
 						obj.success(JSON.parse(xhr.responseText));
 						break;
 					case 'xml':
 						obj.success(xhr.responseXML);
 						break;	
 					default:
 						obj.success(xhr.responseText);
 						break;
 				}
 			}
 		}
 	}
}