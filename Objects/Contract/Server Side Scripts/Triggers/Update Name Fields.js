rbv_api.setFieldValue("contract2",parseInt("{!id}"),"grade_id_text","{!R959179}");
rbv_api.setFieldValue("contract2",parseInt("{!id}"),"gb_id_text","{!gb_id_temp#value}");
var gids = "{!R959179}".split(",");
var gnames = "";
for(var i = 0; i < gids.length; i++){
	//{!#LOOP_BEGIN.R959179#76079143}
		if(parseInt(gids[i]) == parseInt("{!R959179.id}")){
			gnames+="{!R959179.name#text}" + ",";
		}
	//{!#LOOP_END.R959179}
}
rbv_api.println(gnames.slice(0,-1));
rbv_api.setFieldValue("contract2",parseInt("{!id}"),"grade_desc_text",gnames.slice(0,-1));