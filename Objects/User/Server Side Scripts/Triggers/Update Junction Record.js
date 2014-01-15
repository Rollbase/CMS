var role = "{!role#code}";
var junction_id = rbv_api.selectNumber("SELECT id FROM junction_buyer WHERE R77202641 = ?",parseInt("{!id}"));
if(junction_id > 0){
if(role == "user_clien"){
var type = rbv_api.selectNumber("SELECT id FROM allocation_type WHERE name = ?","Grower");
var name = "{!company_name}" + " - " + "{!ngr_number}";
rbv_api.setFieldValue("junction_buyer", junction_id, "R76436708", type);
rbv_api.setFieldValue("junction_buyer", junction_id, "name", name);
rbv_api.setFieldValue("junction_buyer", junction_id, "email", "{!email}");
rbv_api.setFieldValue("junction_buyer", junction_id, "ngr_no_", "{!ngr_number}");
}else if(role == "$thebuyer"){
var type = rbv_api.selectNumber("SELECT id FROM allocation_type WHERE name = ?","Buyer");
var name = "{!name}";
rbv_api.setFieldValue("junction_buyer", junction_id, "R76436708", type);
rbv_api.setFieldValue("junction_buyer", junction_id, "name", name);
rbv_api.setFieldValue("junction_buyer", junction_id, "email", "{!email}");
}
}