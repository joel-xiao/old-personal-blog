window.onload = function() {
	//	这是一个轮播图
	var oBanner = document.querySelectorAll('.banner');
	var aUl = document.querySelector('.banner ul');
	var oLi = document.querySelectorAll('.banner ul li');
	var oA = document.querySelectorAll('.banner #bannerp a');
	//	console.log(aUl);
	var timor = null;
	var num = 0;
	var left = document.getElementById('left');
	var right = document.getElementById('right');

	//				这个函数的功能是改变ul的left值,然后让他与其对应的图片与下面的小圆点一一对应	
	function move() {
		aUl.style.left = -1640 * num + 'px';
		for(var i = 0; i < oA.length; i++) {
			oA[i].className = '';
		}
		oA[num].className = 'a_active';
	}
	right.onclick = function() {
		num++;
		if(num > 3) {
			num = 0;
		}
		move();
	}
	left.onclick = function() {
		num--;
		if(num < 0) {
			num = 5;
		}
		move();
	}
	for(var i = 0; i < oA.length; i++) {
		//					this.index代表的分别是我当前点击的那个小圆点的下标
		oA[i].index = i;
		oA[i].onclick = function() {
			num = this.index;
			move();
		}
	}
	timer = setInterval(fn, 3000);

	function fn() {
		num++;
		if(num > 5) {
			num = 0;
		}
		move();
	}
	aUl.onmousemove = function() {
		clearInterval(timer);
		left.style.display='block';
		right.style.display='block';

	}
	aUl.onmouseout = function() {
		timer = setInterval(fn, 3000);
		left.style.display='none';
		right.style.display='none';
	}
	//这是一个产品介绍
	var cpjsli=document.querySelectorAll('.cpjs ul li');
	var cpjs_box=document.getElementsByClassName('cpjs_box1')
	for(var i=0;i<cpjsli.length;i++){
		cpjsli[i].index=i;
		cpjsli[i].onclick=function(){	
			for(var i=0;i<cpjsli.length;i++){
				cpjsli[i].className='';
				cpjs_box[i].style.display='none';
			}
			cpjsli[this.index].className='cpjs_active';
				cpjs_box[this.index].style.display='block';
		}
	}
	//业务场景
	var ywcjArr=[
			{
				'name':'游戏',
				'text':'腾讯云为游戏行业提供一系列解决方案，涵盖开发、运维、运营等领域和场景。针对不同类型的游戏提供灵活而稳定的部署方案，助您轻松应对玩家激增、高并发、海量访问等带来的问题；为游戏的各种应用场景提供游戏生态服务解决方案，如游戏场景的开发组件、游戏安全、游戏加速、全球互联互通等，让您的游戏更稳定、更安全、更好玩。',
			},
			{
				'name':'视频',
				'text':'腾讯云为游戏行业提供一系列解决方案，涵盖开发、运维、运营等领域和场景。针对不同类型的游戏提供灵活而稳定的部署方案，助您轻松应对玩家激增、高并发、海量访问等带来的问题；为游戏的各种应用场景提供游戏生态服务解决方案，如游戏场景的开发组件、游戏安全、游戏加速、全球互联互通等，让您的游戏更稳定、更安全、更好玩。',
			},
			{
				'name':'网站',
				'text':'腾讯云为游戏行业提供一系列解决方案，涵盖开发、运维、运营等领域和场景。针对不同类型的游戏提供灵活而稳定的部署方案，助您轻松应对玩家激增、高并发、海量访问等带来的问题；为游戏的各种应用场景提供游戏生态服务解决方案，如游戏场景的开发组件、游戏安全、游戏加速、全球互联互通等，让您的游戏更稳定、更安全、更好玩。',
			},
			{
				'name':'电商',
				'text':'腾讯云为游戏行业提供一系列解决方案，涵盖开发、运维、运营等领域和场景。针对不同类型的游戏提供灵活而稳定的部署方案，助您轻松应对玩家激增、高并发、海量访问等带来的问题；为游戏的各种应用场景提供游戏生态服务解决方案，如游戏场景的开发组件、游戏安全、游戏加速、全球互联互通等，让您的游戏更稳定、更安全、更好玩。',
			},
			{
				'name':'微信小程序',
				'text':'腾讯云为游戏行业提供一系列解决方案，涵盖开发、运维、运营等领域和场景。针对不同类型的游戏提供灵活而稳定的部署方案，助您轻松应对玩家激增、高并发、海量访问等带来的问题；为游戏的各种应用场景提供游戏生态服务解决方案，如游戏场景的开发组件、游戏安全、游戏加速、全球互联互通等，让您的游戏更稳定、更安全、更好玩。',
			},
			{
				'name':'大数据',
				'text':'腾讯云为游戏行业提供一系列解决方案，涵盖开发、运维、运营等领域和场景。针对不同类型的游戏提供灵活而稳定的部署方案，助您轻松应对玩家激增、高并发、海量访问等带来的问题；为游戏的各种应用场景提供游戏生态服务解决方案，如游戏场景的开发组件、游戏安全、游戏加速、全球互联互通等，让您的游戏更稳定、更安全、更好玩。',
			},
			{
				'name':'人脸核身',
				'text':'腾讯云为游戏行业提供一系列解决方案，涵盖开发、运维、运营等领域和场景。针对不同类型的游戏提供灵活而稳定的部署方案，助您轻松应对玩家激增、高并发、海量访问等带来的问题；为游戏的各种应用场景提供游戏生态服务解决方案，如游戏场景的开发组件、游戏安全、游戏加速、全球互联互通等，让您的游戏更稳定、更安全、更好玩。',
			},
			{
				'name':'微信生态',
				'text':'腾讯云为游戏行业提供一系列解决方案，涵盖开发、运维、运营等领域和场景。针对不同类型的游戏提供灵活而稳定的部署方案，助您轻松应对玩家激增、高并发、海量访问等带来的问题；为游戏的各种应用场景提供游戏生态服务解决方案，如游戏场景的开发组件、游戏安全、游戏加速、全球互联互通等，让您的游戏更稳定、更安全、更好玩。',
			}
	];
	var cpjsdArr=[
		{'imgage':'https://mc.qcloudimg.com/static/img/b8386941c6471766d9390a36c14d7a2c/image.jpg'},
		{'imgage':'https://mc.qcloudimg.com/static/img/3a2f53aed97af2c8060cc7b9befb26bb/image.jpg'},
		{'imgage':'https://mc.qcloudimg.com/static/img/ab2f396a1bbd7c90551a79b91440670a/image.jpg'},
		{'imgage':'https://mc.qcloudimg.com/static/img/91dda9c196e2ec5f6294c083651c556d/image.jpg'},
		{'imgage':'https://mc.qcloudimg.com/static/img/656b6e47880bbd89b698d07962ca70f4/image.jpg'},
		{'imgage':'https://mc.qcloudimg.com/static/img/a02c38f4e7258b6df3f3c7b7a0a1bdda/image.jpg'},
		{'imgage':'https://mc.qcloudimg.com/static/img/98e1aea879aa619cb5394b2a511cfed6/image.jpg'},
		{'imgage':'https://mc.qcloudimg.com/static/img/b724990174d78981404028da31d393a1/image.jpg'},
	];
	var ywcj=document.querySelector('.ywcjj .ywcjj_box');
	var ywcjLi=document.querySelectorAll('.ywcjj ul li');
	var aimg=document.querySelector('.ywcj');
	for(var i=0;i<ywcjArr.length;i++){
		ywcj.innerHTML=
			'<h5>'+ywcjArr[0].name+'</h5>'+
			'<p>'+ywcjArr[0].text+'</p>'+
			'<input type="button" name="" id="" value="了解更多" />'+
			'<span class="ywcjj_bottom">'+	
			'</span>';
			}
	for(var i=0;i<ywcjLi.length;i++){
		ywcjLi[i].index=i;
		ywcjLi[i].onmousemove=function(){
		ywcj.innerHTML=
			'<h5>'+ywcjArr[this.index].name+'</h5>'+
			'<p>'+ywcjArr[this.index].text+'</p>'+
			'<input type="button" name="" id="" value="了解更多" />'+
			'<span class="ywcjj_bottom">'+	
			'</span>';
			for(var i=0;i<ywcjLi.length;i++){
				ywcjLi[i].className='';
				aimg.style.background='#191f30';
			}
			ywcjLi[this.index].className='yw_active';
			aimg.style.background='url('+cpjsdArr[this.index].imgage+')';
			aimg.style.backgroundSize='1640px 736px';
		}
	}
	
}