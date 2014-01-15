$(document).ready(function(){
	$('td:contains(Development Edition)').parent().parent().parent().css("display","none");
	$("div.application-title span").html("");
	$("#sidebarControl").removeAttr("onmouseover").removeAttr("onmouseout").removeAttr("onclick");
	var theRole = "{!#CURR_USER.role#code}";
	console.log("theRole: "+"{!#CURR_USER.role#code}");
	if(theRole == "$thebuyer" || theRole == "user_clien"){
		$("#rbe_tabs").attr("id","menus").attr("class","nav nav-tabs");
		$("#rbe_menus").hide();
	}else{
		//$("#rbe_tabs").attr("id","menus").attr("class","nav nav-tabs");
		//$("#rbe_menus").hide();
	}
	
	setInterval(function(){
		$("#rbi_appTreeSection > div").children().each(function(){
			if($(this).find("a").html() == "Rollbase" || $(this).find("a").html() == "Organization Management" || $(this).find("a").html() == "CMS Transport Systems"){
				$(this).removeAttr("onmouseover").removeAttr("onmouseout").css("background","rgb(245,245,245)");
			}
		});
	}, 250);
	$("div.roundedSectionBorder.rbsilverbg table.wide.rbwhite div.wide table.wide").addClass("table-striped");
	$("div.roundedSectionBorder.rbsilverbg > div.wide.bold > table.wide.rbwhite").css({
		"padding":"10px",
		"border":"3px solid rgb(97,123,136)",
		"margin":"0px"
	});
	$("body div[id*=rbi_S_] div.roundedSectionBorder.rbsilverbg").each(function(){
		var tableheader = String( $(this).find("div.wide.bold > div.bold").html() );
		var button = String( $(this).find("div.wide.bold > div.bold").find("a.btn.btn-small.btn-primary").html() );
		$(this).find("div.wide.bold > div.bold").html("<i class='icon-list-alt'></i>&nbsp;" + tableheader);
		$(this).find("div.wide.bold > div.bold").find("a.btn.btn-small.btn-primary").html("<i class='icon-file-alt'></i>&nbsp;" + button);
	});
	var buttonSavehtml = String( $("input[value='Save'], input[value=' Save ']").html() );
	$("input[value='Save'], input[value=' Save ']").html("<i class='icon-save'></i>" + buttonSavehtml);
	var buttonCancelhtml = String( $("input[value='Cancel'], input[value=' Cancel ']").html() );
	$("input[value='Cancel'], input[value=' Cancel ']").html("<i class='icon-ban-circle'></i>" + buttonCancelhtml);
	
	$("div.roundedSectionBorder.rbsilverbg > div.wide.bold").css({
		"margin":"0px"
	});
	$("body div[name*=rbchart]").each(function(){
		$(this).find("div.wide.bold").hide();
	});
	$("body div[id*=chartdiv]").each(function(){
		$(this).css({
			"border":"2px solid rgb(242,242,242)",
			"background":"rgb(250,250,250)"
		}).find("rect").first().attr("fill","rgb(250,250,250)");
	});
	$('form[name=inlineForm]').parent().next().hide();
});