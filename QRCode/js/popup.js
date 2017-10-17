"use strict";
//有关已复制标签页的详情，如果没有请求 "tabs" 权限的话 
// tabs.Tab 对象不会包含 url、title 和 favIconUrl。
// manifest.json文件中必须设置"permissions":["tabs"]
// 参考：https://crxdoc-zh.appspot.com/extensions/tabs#method-query
chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
	console.log(tabs);
    let url=tabs[0].url;
 	let qrcode = new QRCode('qrcode');
	qrcode.makeCode(url); // 更换二维码内容
});
