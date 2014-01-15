var role = "{!role#code}";
if(role == "user_clien" || role == "$thebuyer"){
var junction_id = rbv_api.selectNumber("SELECT id FROM junction_buyer WHERE R77202641 = ?",parseInt("{!id}"));
rbv_api.deleteRecord("junction_buyer", junction_id);
}