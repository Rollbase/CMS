var gross = parseFloat("{!R76169713#C.gross_mass_uom_#value}");
var isPreAlloc = parseFloat("{!R76169713#C.isprealloc#value}");
var isBinAlloc = parseFloat("{!R76169713#C.isbinalloc#value}");
var isTesting = parseFloat("{!R76169713#C.istesting#value}");
var isWeighing = parseFloat("{!R76169713#C.isweighing#value}");
var totalAllocWeight = parseFloat("{!R76169713#C.total_allocation_weight#value}");
var totalNetMass = parseFloat("{!R76169713#C.total_net_mass#value}");
var tare = parseFloat("{!R76169713#C.tare_mass#value}");
var wtotal = parseFloat("{!R76169713#C.total_weight#value}");
var tare_date = "{!R76169713#C.tare_date_and_time#value}";
var gross_date = "{!R76169713#C.gross_date_and_time#value}";
var moisture = parseInt("{!R76169713#C.moisture}");
var protein = parseInt("{!R76169713#C.protein}");
var test_weight = parseInt("{!R76169713#C.test_weight_min__kg_hl_#value}");
var asm = parseFloat("{!R76169713#C.above_screen_max____by_weight_#value}");
var mmax = parseFloat("{!R76169713#C.moisture_max____#value}");
var pmax = parseFloat("{!R76169713#C.protein_max____#value}");
var sbm = parseFloat("{!R76169713#C.screeningsbelowscreen#value}");
var pmin = parseFloat("{!R76169713#C.protein_min____#value}");

var grade = parseInt("{!R76169713#P.R76086207#id}");
var grower = parseInt("{!R76169713#P.R77202633#id}");
var commod = parseInt("{!R76169713#P.R76085584#id}");
var parentTicket = parseInt("{!Pinbound_ticket#id}"); 

if(parseInt("{!R76169713#C.id}") > 0 && parentTicket > 0){
	if(isWeighing){
		rbv_api.setFieldValue("inbound_ticket", parentTicket, "gross_mass_uom_", gross);
		rbv_api.setFieldValue("inbound_ticket", parentTicket, "tare_mass", tare);
		rbv_api.setFieldValue("inbound_ticket", parentTicket, "total_weight", wtotal);
		if(parseFloat("{!R76169713#P.total_allocation_weight#value}") <= 0){
			rbv_api.setFieldValue("inbound_ticket", parentTicket, "total_net_mass", wtotal);
		}else{
			rbv_api.setFieldValue("inbound_ticket", parentTicket, "total_net_mass", totalNetMass);
		}
		function formatDate(thedate){
			var currentdate = new Date(thedate);
			var hours = currentdate.getHours();
			var minutes = currentdate.getMinutes();
			var ampm = hours >= 12 ? 'PM' : 'AM';
			var hours = hours % 12;
			hours = hours ? hours : 12;
			minutes = minutes < 10 ? '0'+minutes : minutes;
			var datetime = (currentdate.getMonth()+1) + "/"
					+ currentdate.getDate()  + "/" 
					+ currentdate.getFullYear() + " "  
					+ hours + ":"  
					+ minutes + " "
					+ ampm;
		}
		rbv_api.setFieldValue("inbound_ticket", parentTicket, "tare_date_and_time", new Date(tare_date).getTime());
		rbv_api.setFieldValue("inbound_ticket", parentTicket, "gross_date_and_time", new Date(gross_date).getTime());
		rbv_api.setFieldValue("inbound_ticket", parseInt("{!Pinbound_ticket#id}"), "isweighing", 0);
		rbv_api.setFieldValue("inbound_ticket", parentTicket, "debug", "wtotal: "+"{!R76169713#C.total_weight#value}"+"\n grade: " + "{!R76169713#P.R76086207#id}" + "\n unalloc: "+"{!R76169713#C.total_net_mass#value}");
	}
	if(isTesting > 0){
		rbv_api.setFieldValue("inbound_ticket", parentTicket, "R76086207", parseInt("{!R76169713#C.R76086207#id}"));
		rbv_api.setFieldValue("inbound_ticket", parentTicket, "results", "{!R76169713#C.results}");
		rbv_api.setFieldValue("inbound_ticket", parseInt("{!Pinbound_ticket#id}"), "grading_values_ticket", "{!R76169713#C.grading_values_ticket}");
		rbv_api.setFieldValue("inbound_ticket", parseInt("{!Pinbound_ticket#id}"), "remarks", "{!R76169713#C.remarks}");
		rbv_api.setFieldValue("inbound_ticket", parseInt("{!Pinbound_ticket#id}"), "istesting", 0);
		
		if(parseInt("{!R76169713#C.R76086207#id}") == 0 || parseInt("{!R76169713#C.R76086207#id}") == -1){
			rbv_api.setFieldValue("inbound_ticket", parentTicket, "status", "$rejected");
		}
		rbv_api.setFieldValue("inbound_ticket", parentTicket, "debug", "wtotal: "+"{!R76169713#P.total_weight#value}"+"\n grade: " + "{!R76169713#C.R76086207#id}" + "\n unalloc: "+"{!R76169713#P.total_net_mass#value}");
	}
	if(parseFloat("{!R76169713#C.total_weight#value}") > 0 || parseFloat("{!R76169713#P.total_weight#value}") > 0){
		rbv_api.setFieldValue("inbound_ticket", parentTicket, "weighed", true);
	}
	if(parseInt("{!R76169713#P.R76086207#id}") > 0 || parseInt("{!R76169713#C.R76086207#id}") > 0){
		rbv_api.setFieldValue("inbound_ticket", parentTicket, "tested", true);
	}
	if(totalAllocWeight > 0){
		rbv_api.setFieldValue("inbound_ticket", parentTicket, "total_net_mass", totalNetMass);
		
		var totalWeight = rbv_api.selectNumber("SELECT SUM(weight) FROM allocation WHERE R76435416 = ?", parentTicket);
		if(totalWeight > 0){
			rbv_api.setFieldValue("inbound_ticket", parentTicket, "total_allocation_weight", totalWeight + totalAllocWeight);			
		}else{
			rbv_api.setFieldValue("inbound_ticket", parentTicket, "total_allocation_weight", totalAllocWeight);
		}
		
	}
	
	if(isBinAlloc > 0){
		var existingAllocations = rbv_api.selectQuery("SELECT id FROM bin_allocation WHERE R76846412 = ?",1000,parentTicket);
		if(existingAllocations.length > 0){
			for(var i = 0; i < existingAllocations.length; i++){
				rbv_api.println(existingAllocations[i][0]);
				rbv_api.deleteRecord("bin_allocation", parseInt(existingAllocations[i][0]));
			}
		}
		rbv_api.setFieldValue("inbound_ticket", parseInt("{!Pinbound_ticket#id}"), "assigned_to_bin", true);
		rbv_api.setFieldValue("inbound_ticket", parseInt("{!Pinbound_ticket#id}"), "isBinAlloc", 0);
	}
	
	if(isPreAlloc > 0){
		rbv_api.setFieldValue("inbound_ticket", parseInt("{!Pinbound_ticket#id}"), "isPreAlloc", 0);
	} 
	rbv_api.setFieldValue("inbound_ticket",parentTicket,"cahced_child_id",parseInt("{!id}"));
	rbv_api.deleteRecord("inbound_ticket", parseInt("{!R76169713#C.id}"));
}else{
	var jid = parseInt("{!R77357021#id}");
	var uid = rbv_api.selectNumber("SELECT R77202641 FROM junction_buyer WHERE id = ?",jid);
	rbv_api.setFieldValue("inbound_ticket",parseInt("{!id}"),"R77202633",uid);
	if("{!reason}"!==""){
		rbv_api.setFieldValue("inbound_ticket", parseInt("{!id}"), "status", "$rejected");
	}
	if(parseFloat("{!total_weight#value}") > 0){
		rbv_api.setFieldValue("inbound_ticket", parseInt("{!id}"), "weighed", true);
		//rbv_api.setFieldValue("inbound_ticket", parseInt("{!id}"), "weighed", 1);
	}
	if(parseInt("{!R76086207#id}") > 0){
		rbv_api.setFieldValue("inbound_ticket", parseInt("{!id}"), "tested", true);
		//rbv_api.setFieldValue("inbound_ticket", parseInt("{!id}"), "tested", 1);
	}
	if(parseFloat("{!total_allocation_weight#value}") <= 0){
		rbv_api.setFieldValue("inbound_ticket", parseInt("{!id}"), "total_net_mass", parseFloat("{!total_weight#value}"));
	}else{
		rbv_api.setFieldValue("inbound_ticket", parseInt("{!id}"), "total_net_mass", parseFloat("{!total_net_mass#value}"));
	}
	if(parseInt("{!R636384}") > 0){
		var locid = rbv_api.selectNumber("SELECT id FROM $ORG_LOCN WHERE mirrored_site = ?",parseInt("{!R636384}"));
		rbv_api.setFieldValue("inbound_ticket", parseInt("{!id}"), "locationId", locid);
	}
	//rbv_api.runTrigger("inbound_ticket", parseInt("{!id}"), "^changeToHold");
}