var pinbound = parseInt("{!id}");
rbv_api.setFieldValue("inbound_ticket", pinbound, "committed_to_inventory", true);
rbv_api.setFieldValue("inbound_ticket", pinbound, "status", "$completed");
var ba = rbv_api.selectQuery("SELECT id FROM bin_allocation WHERE R76846412=?",1000,pinbound);
if(ba.length>0){
for(var i = 0; i < ba.length; i++){
rbv_api.setFieldValue("bin_allocation", parseInt(ba[i][0]), "status", "$com");
}
}