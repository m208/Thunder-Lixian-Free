// ==UserScript==
// @id             dynamic.cloud.vip.xunlei.com-782c5cf3-b430-4621-bae0-0e90d9fc365d@xlvip-free
// @name           迅雷离线免费版
// @version        1.1.2
// @namespace      xlvip-free
// @author         m208
// @description    迅雷离线免费版，为领取了六个月免费资格的雷友提供高速取回服务。
// @match          http://dynamic.cloud.vip.xunlei.com/*
// @run-at         document-idle
// @updateURL      https://raw.github.com/m208/Thunder-Lixian-Free/master/dynamiccloudvipxunleicom-782c5cf3-b430-4621-bae0-@xlvip-free.user.js
// ==/UserScript==

unsafeWindow.g_user_type = '1';
unsafeWindow.g_isfree = undefined;
var xv = document.createElement('script');
xv.type = 'text/javascript';
xv.src = "http://1.junmatest.sinaapp.com/m208cdn/thunder-offline-download-free/xunlei-video-patch.js";
document.getElementsByTagName('head')[0].appendChild(xv);

var main = function () {
	try{$('#li_task_down span em').html('取回本地');}catch(e){};
	try{$('#li_task_down').attr('title','取回本地（Powered by 迅雷离线免费版）');}catch(e){};
	$('.kj_box div').text('您是迅雷免费版用户，可以体验会员加速功能');
	$('.say_side').prepend('<a class="btn_m" title="点击打开迅雷离线免费版网站" target="_blank" href="https://github.com/m208/Thunder-Lixian-Free"><span><em class="ic_sayfeel">关于迅雷离线免费版</em></span></a>');
};

// Inject our main script
var script = document.createElement('script');
script.type = "text/javascript";
script.textContent = '(' + main.toString() + ')();';
document.body.appendChild(script);
