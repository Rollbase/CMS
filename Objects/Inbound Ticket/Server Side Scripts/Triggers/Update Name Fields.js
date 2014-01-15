var commodity = "{!commodities_temp#value}" || ""; 
var grade = "{!grade_temp#value}" || ""; 
var cy = "{!cropyr_temp#value}" || ""; 
var grower = "{!grower_temp#value}" || "";
var loc = "{!location_temp#value}" || "";
if(parseInt("{!R76169713#P.id}") == 0){
	rbv_api.setFieldValue("inbound_ticket", parseInt("{!id}"), "commodity_text", commodity );
	rbv_api.setFieldValue("inbound_ticket", parseInt("{!id}"), "grade_text", grade);
	rbv_api.setFieldValue("inbound_ticket", parseInt("{!id}"), "crop_year_text", cy);
	rbv_api.setFieldValue("inbound_ticket", parseInt("{!id}"), "grower_text", grower);
	rbv_api.setFieldValue("inbound_ticket", parseInt("{!id}"), "location_text", loc);
}