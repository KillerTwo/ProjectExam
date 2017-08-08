$(function(){
	//alert('hello');
	//轮播器操作
	//1设置轮播器自动播放
	$('#mycarousel').carousel({
		interval:4000,      //每个4秒播放一张图片
	});
	//2 设置左右点击按钮垂直居中
	// 设置原理：让改按钮的字体行高等于每张图片的高度
	$('.carousel-control').css('line-height',$('.carousel-inner img').height()+'px');
	// 当浏览器窗口变化的时候重现设置行高
	$(window).resize(function(){
		var height = $('.carousel-inner img').eq(0).height() ||
					 $('.carousel-inner img').eq(1).height() ||
					 $('.carousel-inner img').eq(2).height() ;
		$('.carousel-control').css('line-height',height+'px');			 
	});
	/*alert('hello');*/
	/**
	 * 设置动态显示专家
	 * 
	 */
//	setInterval(function(){
//		//alert('1');
//		$('div.dyshow').each( function(key,val) {
//			alert(val);
//			//alert('2');
//			$(val).fadeOut(3000);
//		});
//		
//	},3000);
//设置动态显示表格
//1 设置默认显示
$.ajax({
	url:'findhospital.php?city=shanghai',
	type:'GET',
	dataType:'json',
	success:function(data){
		alert(data.msg[0]);
		var len = $('.addtd').length;
		//alert(len);
		if(len>0){
			$('.addtd').remove();
		}
		//ajax提交山海，北京等地名然后放回该地名对应的医院json数据  再将相应的数据添加到表格行中
		var text = '协和医院';      //text就是获得的数据
		for(var i = 0;i<6;i++){
			for(var j = 0;j<2; j++){
				var td = $('<td>'+data.msg[i]+'</td>');
				td.addClass('addtd');
				td.appendTo($('.tr').eq(i));
			}
		}
	}
});
$('.tr .btn').click(function(){
	alert($(this).text());
	//先获取类为addtd的td  如果存在这样的td则删掉所有的类为addtd的td
	var len = $('.addtd').length;
	//alert(len);
	if(len>0){
		$('.addtd').remove();
	}
	//ajax提交山海，北京等地名然后放回该地名对应的医院json数据  再将相应的数据添加到表格行中
	var text = '协和医院';      //text就是获得的数据
	for(var i = 0;i<6;i++){
		for(var j = 0;j<2; j++){
			var td = $('<td>'+text+'</td>');
			td.addClass('addtd');
			td.appendTo($('.tr').eq(i));
		}
	}
});
var findhos = ['北京','上海','广州','四川','江苏','山东'];
$('table th').eq(0).click(function(){
	for(var i = 0;i<6;i++){
		$('.tr .btn').eq(i).text(findhos[i]);
	}
});
var findisu = ['内科','外科','妇科','儿科','肿瘤科','皮肤科'];
$('table th').eq(1).click(function(){
	for(var i = 0;i<6;i++){
		$('.tr .btn').eq(i).text(findisu[i]);
	}
});
var finddoc = ['冠心病','肺癌','脑梗塞','抑郁症','肾结石','癫痫'];
$('table th').eq(2).click(function(){
	for(var i = 0;i<6;i++){
		$('.tr .btn').eq(i).text(finddoc[i]);
	}
});

})