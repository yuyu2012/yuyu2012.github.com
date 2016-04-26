// JavaScript Document
$(document).ready(function(){
		
		
		/*tab切换效果*/
		$(".tab a").click( function () {
			var $closeBtn=$("<img class='climg' src='images/delblack.png'>");
			$closeBtn.click( function() {
				/*如果前面没有了，就定位到后一个*/
				if($(this).parent().prev("a").length==0){
					$(this).parent().next().addClass("tab_checked");
					$(this).parent().next().append($closeBtn);	
					$(this).parent("a").prev().remove();/*a标签消失*/
				}
				
				else{
					$(this).parent().prev().addClass("tab_checked");
					$(this).parent().prev().append($closeBtn);
					$(this).parent("a").next().remove();/*a标签消失*/
					}
				return false;
			});
			
			$(".tab a").removeClass("tab_checked");
			$(".tab a img").remove();
			$(this).addClass("tab_checked");
			$(this).append($closeBtn);
		
		/*超出*/
		/*一个框的宽度_fixWidht 根据屏幕大小一直变的*/
		/*_realwidth的宽度 是一直不变的*/
		/*当前点击的a基于父节点的offsetleft _offsetWidth*/
		
		/*计算获得realwidht的宽度*/
			var _realwidth=0;
			$(".relwidth a").each(function(k,i){
				_realwidth += $(this).width()+36;//25是padding+margin
			});
			
			
			/*判断当前的offsetwidth加上自己本身的宽度(ofwidthAddawidth)，是否大于框的width*/
			var _offsetWidth=$(this).offsetParent().context.offsetLeft;//offsetwidth
			//var _offsetWidth=$(this).offset().left;
			var awidth=$(this).width();//awidht
			var ofwidthAddawidth=_offsetWidth+awidth+25;//25paddingmargin
			var _fixWidht=$(window).width()-$(".left").width()//框widht
			

			/*如果当前点击的a的offsetleft大于固定宽度就往后滚*/
			/*如果ofwidthAddawidth大于_fixWidht，realwidth减去fixedwidht*/

			if(ofwidthAddawidth+100>_fixWidht){
				var left=_offsetWidth-(_fixWidht-awidth)/2;
				
				/*用于判断是否已经滚到底了*/
				var offsetdd=_offsetWidth-(_fixWidht-awidth)/2+ _fixWidht;
				if(offsetdd>_realwidth){
					
					var zhdleft=_realwidth-_fixWidht;
					$(".relwidth").animate({left:-zhdleft});
					//alert("我们不滚了╭(╯^╰)╮");	
					return;
				}
				//alert("offsetWidth"+offsetdd);
				$(".relwidth").animate({left:-left})
			}
			/*如果小于，left都是0*/
			else{
				$(".relwidth").animate({left:0})
				}	
			
		}); 
		
		 
		
		/*获取表格的宽度给table_bottom*/
		$(".table_bottom").width($(".table1").width()+2);
		/*checkbox*/
	  $('input').iCheck({
		checkboxClass: 'icheckbox_square-blue',
		radioClass: 'iradio_square-blue',
		increaseArea: '20%' // optional
	  });
		leftHeight();
		/*仿滚动条*/
		$(".scrollbar_con").perfectScrollbar();
		/*二级导航*/
		$(".llink").click( function () { 
			var ids=$(this).attr("id");
			var clength=ids.length-1;
			var nos=ids.substring(clength);
			$("#linker"+nos).toggle();
			$(this).find("button i").toggleClass("fa-chevron-up");
			$(".scrollbar_con").perfectScrollbar("update");
		}); 
		less1200();
		/*左侧导航收缩*/
		$("#bar").click( function () { 
			$(".big_left").hide();
			$(".small_left").show();
			$(".right").css({ "margin-left": "57px","width": "calc(100% - 57px)" });
			
			if($(window).width()<1200){
			$(".fixtop").css({ "position": "relative","width": "100%"});
			$(".top2").css({ "padding-top": "0"});
			$(".table_bottom").css({ "position": "relative","width": "100%"});
			}
			else{
				$(".fixtop").css({ "position": "fixed", "width": "calc(100% - 57px)" });
				$(".top2").css({ "padding-top": "78px"});
				/*获取表格的宽度给table_bottom*/
				$(".table_bottom").width($(".table1").width()+2);
			}
			
		}); 
		$("#small_bar").click( function () {		 
			$(".small_left").hide();
			$(".big_left").show();
			$(".right").css({ "margin-left": "260px","width": "calc(100% - 260px)"  });
			
			if($(window).width()<1200){
			$("fixtop").css({ "position": "relative","width": "100%"});
			$(".top2").css({ "padding-top": "0"});
			$(".table_bottom").css({ "position": "relative","width": "100%"});
			}
			else{
				$(".fixtop").css({ "position": "fixed", "width": "calc(100% - 260px)" });
				
				
				$(".top2").css({ "padding-top": "78px"});
				/*获取表格的宽度给table_bottom*/
				$(".table_bottom").width($(".table1").width()+2);
			}
			
		});
		/*搜索框清空内容*/
		$('#qjss').bind('input propertychange', function() {
			if($('#qjss').val()==""){$("#textqk").hide();}
			else{$("#textqk").show();}
		});
		$("#textqk").click( function () {
			$('#qjss').val("");
			$(this).hide()
		}); 
		/*高级过滤收展*/
		$("#js_advancesz").click( function () {
			$(".f_advance").slideToggle("fast");
			$(this).find("i").toggleClass("fa-chevron-down");
			var text=$(this).find("span").text();
			if(text=="收起高级过滤"){
				$("#js_advancesz span").text("展开高级过滤");
			}
			else{$("#js_advancesz span").text("收起高级过滤");}
		});
		
		/*导出*/
		$(document).click(function(){
			  $(".export_drop").hide();
		  });
		  
		  $(".fsb_prot").click( function (event) { 
		  	event.stopPropagation();
			$(".export_drop").toggle();
		  }); 
		  
		  
		  /*$(document).on("click",function(e)
			{
				if($(e.target).parents(".export_drop").length == 0&&$(e.target).parents(".fsb_prot").length == 0)
				{
					$(".export_drop").hide();
				}
		  });*/
		  /*选择切换*/
		  $("#hdlx a").click( function () { 
			$("#hdlx a").removeClass("filterared");
			$(this).addClass("filterared");
		  }); 
		  $("#tgpt a").click( function () { 
			$("#tgpt a").removeClass("filterared");
			$(this).addClass("filterared");
		  }); 
		  $("#jllx a").click( function () { 
			$("#jllx a").removeClass("filterared");
			$(this).addClass("filterared");
		  }); 
		  /*添加弹出框*/
		  $(".addtck").click( function () {
			$(".mask").show(); 
			$("#add_tck").show(); 
		  	beMiddle("#add_tck");
		  });
		  /*删除弹出框*/
		  $(".deltck").click( function () {
			$(".mask").show(); 
			$("#del_tck").show(); 
		  	beMiddle("#del_tck");
		  });
		  /*修改密码弹出框*/
		  $(".passwordtck").click( function () {
			$(".mask").show(); 
			$("#password_tck").show(); 
		  	beMiddle("#password_tck");
		  });
		  
		  /*弹出框关闭*/
		  $(".tck_top img , .cancelbtn").click( function () {
			$(".mask").hide(); 
			$(".tck").hide(); 
		  });
		  /*表格隔行换色*/
  		  $(".table1 tbody tr:odd").css("background","#f2f2f2");
		  /*点五角星*/
		  $(".bstar").click( function () {
			$(this).toggleClass("qstar"); 
		  });
		  /*icheck全选反选*/
		    $('#checkall').on('ifChecked', function(event){
				$('.table1 input').iCheck('check');
			});
			$('#checkall').on('ifUnchecked', function(event){
				$('.table1 input').iCheck('uncheck');
			});
			
			/*index3*/
			//alert($(".equ").width());
			var equwidth=$(".equ").width();
			$(window).scroll( function() {
				var _scrolltop=$(window).scrollTop();
				if(_scrolltop>200){
					$(".equ").css({ "position": "fixed","top":"82px","width":equwidth+"px"});
				}
				else{
					$(".equ").css({ "position": "inherit","width":"20%"});
					}
			});
			
		  
	})
	
	$(window).resize(function(){
		
		leftHeight();
		$(".scrollbar_con").perfectScrollbar("update");
		less1200();
		beMiddle(".tck");
		/*获取表格的宽度给table_bottom*/
		$(".table_bottom").width($(".table1").width()+2);
	});
	/*设置left高度,判断屏幕是否大于1200*/
	function leftHeight(){
		if($(window).width()>1200){
		   var _documentHeight=$(window).height();
		   $(".left").height(_documentHeight);
		}
		else{ return; }
	}
	/*如果屏幕宽度小于1200， .left, .fixtop position:relative*/
	function less1200(){
		if($(window).width()<1200){
			$(".left").css({ "position": "relative"});
			$(".fixtop").css({ "position": "relative","width": "100%"});
			$(".top2").css({ "padding-top": "0"});
			/*判断windowHeight和documentHeight谁高，高的那个给左侧*/
			var windowHeight=$(window).height();
			var documentHeight=$(document).height();
			if(windowHeight>=documentHeight){$(".left").height(windowHeight);}
			else{$(".left").height(documentHeight);}
			$(".table_bottom").css({ "position": "relative"});
			$(".table1").css({ "margin-bottom": 0});
		}
		else{
			$(".left").css({ "position": "fixed"});
			$(".table_bottom").css({ "position": "fixed"});
			$(".table1").css({ "margin-bottom": "57px"});
		}
	}
	/*弹出框居中*/
	function beMiddle(x){
	 var windowheight=$(window).height();
	 var tkcheigh=$(x).height();
	 var tcktop=(windowheight-tkcheigh)/2+"px";
	 
	 var windowwidth=$(window).width();  
	 var tkcwidth=$(x).width();
	 var tckleft=(windowwidth-tkcwidth)/2+"px";
	 $(x).css({ left: tckleft, top: tcktop });
	}
	