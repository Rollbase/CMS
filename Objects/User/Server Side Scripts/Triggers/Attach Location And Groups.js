var theRole = "{!role#code}";
var allacc_id_loc = rbv_api.selectNumber("SELECT id FROM $ORG_LOCN WHERE name=?","All Access");
var allacc_id_grp = rbv_api.selectNumber("SELECT id FROM $GROUP WHERE name=?","All Access");
var currentUser = "{!#CURR_USER.role#code}";
var currentUser_id = parseInt("{!#CURR_USER.id}");
var currentUser_loc = rbv_api.selectNumber("SELECT locationId FROM USER WHERE id = ?",currentUser_id);
var mLocId = rbv_api.selectNumber("SELECT mirrored_location FROM $ORG_LOCN WHERE id=?",currentUser_loc);
var currentUser_grp = rbv_api.selectNumber("SELECT id FROM $GROUP WHERE locationId=?",currentUser_loc);
var mSiteId = rbv_api.selectNumber("SELECT mirrored_site FROM $ORG_LOCN WHERE id = ?",currentUser_loc);
rbv_api.println("theRole: "+theRole);
rbv_api.println("allacc_id_loc: "+allacc_id_loc);
rbv_api.println("allacc_id_grp: "+allacc_id_grp);
if(theRole == "user_clien" || theRole == "$thebuyer" || theRole == "$CMS"){
	rbv_api.setFieldValue("USER",parseInt("{!id}"),"locationId",allacc_id_loc);
	rbv_api.setFieldValue("USER",parseInt("{!id}"),"R2354869",395173);
}else if(theRole == "$A"){
	var site = parseInt("{!R361387#id}") || 0;
	var loc = rbv_api.selectNumber("SELECT id FROM $ORG_LOCN WHERE mirrored_site = ?",site);
	var gid = rbv_api.selectNumber("SELECT id FROM $GROUP WHERE locationId=?",loc);
	rbv_api.setFieldValue("USER",parseInt("{!id}"),"locationId",loc);
	rbv_api.setFieldValue("USER",parseInt("{!id}"),"R2354869",gid);
}else if(theRole == "$BA"){
	var loc = parseInt("{!R389383#id}") || 0;
	rbv_api.println(loc);
	if(loc > 0){
		var locid = rbv_api.selectNumber("SELECT id FROM $ORG_LOCN WHERE mirrored_location = ?",loc);
		var gid = rbv_api.selectNumber("SELECT id FROM $GROUP WHERE locationId = ?",locid);
		rbv_api.setFieldValue("USER",parseInt("{!id}"),"R2354869",gid);
		rbv_api.setFieldValue("USER",parseInt("{!id}"),"locationId",locid);
	}else{
		rbv_api.setFieldValue("USER",parseInt("{!id}"),"R389383",mLocId);
		rbv_api.setFieldValue("USER",parseInt("{!id}"),"R2354869",currentUser_grp);
		rbv_api.setFieldValue("USER",parseInt("{!id}"),"locationId",currentUser_loc);
	}
}else if(theRole == "$TO" || theRole == "$WO"){
	if(currentUser == "$A"){
		rbv_api.setFieldValue("USER",parseInt("{!id}"),"locationId",currentUser_loc);
		rbv_api.setFieldValue("USER",parseInt("{!id}"),"R361387",mSiteId);
		rbv_api.setFieldValue("USER",parseInt("{!id}"),"R2354869",currentUser_grp);
	}else{
		var site = parseInt("{!R361387#id}") || 0;
		var loc = rbv_api.selectNumber("SELECT id FROM $ORG_LOCN WHERE mirrored_site = ?",site);
		var mloc = rbv_api.selectNumber("SELECT mirrored_location FROM $ORG_LOCN WHERE id = ?",loc);
		var gid = rbv_api.selectNumber("SELECT id FROM $GROUP WHERE locationId=?",loc);
		rbv_api.setFieldValue("USER",parseInt("{!id}"),"locationId",loc);
		rbv_api.setFieldValue("USER",parseInt("{!id}"),"R2354869",gid);
	}
}