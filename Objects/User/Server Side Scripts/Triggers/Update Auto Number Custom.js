var role = "{!role#code}";
if(role == "user_clien"){
	var getMax = rbv_api.selectQuery("SELECT growid_int FROM USER WHERE role = ? ORDER BY growid_int DESC",1,role);
	if(getMax.length > 0){
		var theMax = parseInt(getMax[0][0]) + 1;
		rbv_api.setFieldValue("USER", parseInt("{!id}"), "growid_int", theMax);
	}else{
		rbv_api.setFieldValue("USER", parseInt("{!id}"), "growid_int", 0);
	}
}else if(role == "$thebuyer"){
	var getMax = rbv_api.selectQuery("SELECT buyid_int FROM USER WHERE role = ? ORDER BY buyid_int DESC",1,role);
	if(getMax.length > 0){
		var theMax = parseInt(getMax[0][0]) + 1;
		rbv_api.setFieldValue("USER", parseInt("{!id}"), "buyid_int", theMax);
	}else{
		rbv_api.setFieldValue("USER", parseInt("{!id}"), "buyid_int", 0);
	}
}