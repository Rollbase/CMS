var child_tick = parseInt("{!R76846412}");
if(child_tick > 0){
	var parent_tick = rbv_api.selectNumber("SELECT id FROM inbound_ticket WHERE cahced_child_id = ?", child_tick);
	rbv_api.println(parent_tick);
	rbv_api.setFieldValue("bin_allocation",parseInt("{!id}"),"R76846412",parent_tick);
	var allocations = rbv_api.selectQuery("SELECT id FROM allocation WHERE R76435416 = ?",1000,parent_tick);
	if(allocations.length > 0){
		var allocationIds = "";
		for(var i = 0; i < allocations.length; i++){
			if(i != allocations.length-1){
				allocationIds+=allocations[i][0]+",";
			}else{
				allocationIds+=allocations[i][0];
			}
			
		}
		rbv_api.setFieldValue("bin_allocation", parseInt("{!id}"), "R76859550", allocationIds);
	}
}