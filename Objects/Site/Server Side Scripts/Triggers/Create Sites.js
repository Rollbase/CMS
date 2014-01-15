var mLoc = parseInt("{!R335411#id}");
var parent = rbv_api.selectNumber("SELECT id FROM $ORG_LOCN WHERE mirrored_location = ?",mLoc);
var dataset = new Array();
dataset["name"] = "{!name#text}";
dataset["parentId"] = parent;
dataset["mirrored_site"] = parseInt("{!id}");
rbv_api.createRecord("$ORG_LOCN", dataset);
rbv_api.setFieldValue("location1",mLoc,"ldf_id",parent);
rbv_api.setFieldValue("location1",mLoc,"locationId",parent);
rbv_api.setFieldValue("site_",parseInt("{!id}"),"locationId",parent);

var pLoc = rbv_api.selectValue("SELECT name FROM location1 WHERE id=?",mLoc);
var cnt = rbv_api.selectNumber("SELECT COUNT(id) FROM $GROUP WHERE locationId=?",parent);
if(cnt==0){
var dataset = new Array();
dataset["name"] = pLoc;
dataset["locationId"] = parent;
rbv_api.createRecord("$GROUP", dataset);
}