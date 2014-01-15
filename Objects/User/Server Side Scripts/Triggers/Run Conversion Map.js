var role = "{!role#code}";
if(role == "user_clien"){
var format = "{!company_name#text}" + " - " + "{!ngr_number#value}";
rbv_api.setFieldValue("USER",parseInt("{!id}"),"format_name",format);
rbv_api.runTrigger("USER", parseInt("{!id}"), "^createJunction");
}else if(role == "$thebuyer"){
rbv_api.runTrigger("USER", parseInt("{!id}"), "^createBuyer");
}