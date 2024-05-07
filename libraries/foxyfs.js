// foxyfs.js
var currentStore = localStorage.getItem('fs');
function jsonPathToValue(jsonData, path) {
	if (!(jsonData instanceof Object) || typeof path === 'undefined') {
		throw 'InvalidArgumentException';
	}
	path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
	path = path.replace(/^\./, ''); // strip a leading dot
	var pathArray = path.split('.');
	for (var i = 0, n = pathArray.length; i < n; ++i) {
		var key = pathArray[i];
		if (key in jsonData) {
			if (jsonData[key] !== null) {
				jsonData = jsonData[key];
			} else {
				return null;
			}
		} else {
			return key;
		}
	}
	return jsonData;
}
if (currentStore == null) {
	localStorage.setItem(
		'fs',
		'{"d_home":{"d_Documents":{"f_README․html":"data:text/html;base64,PGgxIGlkPSJ3ZWxjb21lLXRvLW9ueXhvcyI+V2VsY29tZSB0byBPbnl4T1M8L2gxPg0KPHA+VGhpcyBpcyBhIHRlc3Qgb2YgdGhlIEZTPC9wPg0KDQo="},"d_Downloads":{},"d_Pics":{}}}'
	);
}
export default function initFFS(){
	window.foxyfs = {
		save: function(path, content) {
			currentStore = JSON.parse(localStorage.getItem('fs'));
			path2 = "['" + path.replaceAll('.', "']['") + "']";
			eval('currentStore' + path2 + " = '" + encodeURIComponent(content) + "'");
			localStorage.fs = JSON.stringify(currentStore);
			currentStore = localStorage.fs;
		},
		load: function(path) {
			return jsonPathToValue(JSON.parse(localStorage.fs), path);
		},
		rm: function(path) {
			var fs = JSON.parse(localStorage.fs);
			if (path.split('')[0] == '.') {
				eval('delete fs.' + path.slice(1) + '');
			} else {
				eval('delete fs.' + path + '');
			}
			console.log(fs);
			localStorage.fs2 = fs;
		}
		
	}
}
initFFS()