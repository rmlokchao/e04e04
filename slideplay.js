/*
**************************
(C)2010-2015 phpMyWind.com
update: 2011-11-9 13:18:36
person: Feng
**************************
*/

$(function() {
	var sWidth = $("#slideplay").width(); //�繮��𣇉�衣�孵㦛��摰賢漲嚗�遬蝷粹𢒰蝘荔��
	var len = $("#slideplay ul li").length; //�繮��𣇉�衣�孵㦛銝芣㺭
	var index = 0;
	var picTimer;

	//隞乩�衤誨��瘛餃�䭾㺭摮埈�厰僼��峕�厰僼��𡒊���𢠃�𤩺�擧辺嚗諹�䀹�劐�𠹺�憿萸��銝衤�憿萎舅銝芣�厰僼
	var btn = "<div class='btnBg'></div><div class='btn'>";
	for(var i=0; i < len; i++) {
		btn += "<span></span>";
	}
	btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
	$("#slideplay").append(btn);
	$("#slideplay .btnBg").css("opacity",0.5);

	//銝箏�𤩺�厰僼瘛餃�𣳇�䭾���穃�乩�衤辣嚗䔶誑�遬蝷箇㮾摨𠉛���摰�
	$("#slideplay .btn span").css("opacity",0.4).mouseenter(function() {
		index = $("#slideplay .btn span").index(this);
		showPics(index);
	}).eq(0).trigger("mouseenter");

	//銝𠹺�憿萸��銝衤�憿菜�厰僼�𤩺�𤾸漲憭���
	$("#slideplay .preNext").css("opacity",0.2).hover(function() {
		$(this).stop(true,false).animate({"opacity":"0.5"},300);
	},function() {
		$(this).stop(true,false).animate({"opacity":"0.2"},300);
	});

	//銝𠹺�憿菜�厰僼
	$("#slideplay .pre").click(function() {
		index -= 1;
		if(index == -1) {index = len - 1;}
		showPics(index);
	});

	//銝衤�憿菜�厰僼
	$("#slideplay .next").click(function() {
		index += 1;
		if(index == len) {index = 0;}
		showPics(index);
	});

	//�𧋦靘衤蛹撌血𢰧皛𡁜𢆡嚗�朖����炼i��蝝𣳇�賣糓�銁��䔶���鍦�穃椰瘚桀𢆡嚗峕�隞亥�䠷�屸�閬�霈∠�堒枂憭硋凒ul��蝝删�摰賢漲
	$("#slideplay ul").css("width",sWidth * (len));

	//曌䭾���睲�羓�衣�孵㦛�𧒄�𨀣迫�䌊�𢆡�偘�𦆮嚗峕�穃枂�𧒄撘�憪贝䌊�𢆡�偘�𦆮
	$("#slideplay").hover(function() {
		clearInterval(picTimer);
	},function() {
		picTimer = setInterval(function() {
			showPics(index);
			index++;
			if(index == len) {index = 0;}
		},4000); //甇�4000隞�”�䌊�𢆡�偘�𦆮���𡢿��䈑���蓥�㵪�𡁏神蝘�
	}).trigger("mouseleave");

	//�遬蝷箏㦛���遆�㺭嚗峕覔�旿�𦻖�𤣰��index�潭遬蝷箇㮾摨𠉛���摰�
	function showPics(index) { //�芦�𡁜��揢
		var nowLeft = -index*sWidth; //�覔�旿index�潸恣蝞𠓾l��蝝删�left��
		$("#slideplay ul").stop(true,false).animate({"left":nowLeft},300); //�朞�𡩣nimate()靚��㟲ul��蝝䭾�𡁜𢆡��霈∠�堒枂��position
		//$("#slideplay .btn span").removeClass("on").eq(index).addClass("on"); //銝箏�枏�滨���厰僼���揢���劐葉�������
		$("#slideplay .btn span").stop(true,false).animate({"opacity":"0.4"},300).eq(index).stop(true,false).animate({"opacity":"1"},300); //銝箏�枏�滨���厰僼���揢���劐葉�������
	}
});