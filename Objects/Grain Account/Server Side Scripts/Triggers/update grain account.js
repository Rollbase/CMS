var child_tick = parseInt("{!R76435416}");
rbv_api.println(child_tick);
if(child_tick > 0){
	var parent_tick = rbv_api.selectNumber("SELECT id FROM inbound_ticket WHERE cahced_child_id = ?", child_tick);
	rbv_api.println(parent_tick);
	if(parent_tick > 0){
		rbv_api.setFieldValue("allocation",parseInt("{!id}"),"R76435416",parent_tick);
	}
}
