// ==UserScript==
// @id             dynamic.cloud.vip.xunlei.com-782c5cf3-b430-4621-bae0-0e90d9fc365d@xlvip-free
// @name           Ѹ��������Ѱ�
// @version        1.0
// @namespace      xlvip-free
// @author         m208
// @description    Ѹ��������Ѱ棬Ϊ��ȡ������������ʸ�������ṩ����ȡ�ط���
// @match          http://dynamic.cloud.vip.xunlei.com/*
// @run-at         document-idle
// ==/UserScript==

unsafeWindow.g_user_type = '1';
unsafeWindow.g_isfree = undefined;
var xv = document.createElement('script');
xv.type = 'text/javascript';
xv.src = "http://1.junmatest.sinaapp.com/m208cdn/thunder-offline-download-free/xunlei-video-patch.js";
document.getElementsByTagName('head')[0].appendChild(xv);

function GM_wait() {
    if(typeof unsafeWindow.jQuery == 'undefined') { window.setTimeout(GM_wait,100); }
	else { $ = unsafeWindow.jQuery; letsJQuery(); }
}

GM_wait();

function letsJQuery() {
	try{$('#li_task_down span em').html('ȡ�ر���');}catch(e){};
	try{$('#li_task_down').attr('title','ȡ�ر��أ�Powered by Ѹ��������Ѱ棩');}catch(e){};
	$('.kj_box div').text('����Ѹ����Ѱ��û������������Ա���ٹ���');
	$('.say_side').prepend('<a class="btn_m" title="����Ѹ��������Ѱ�" target="_blank" href="https://github.com/m208/Thunder-Lixian-Free"><span><em class="ic_sayfeel">����Ѹ��������Ѱ�</em></span></a>');
}