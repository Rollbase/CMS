var bin_id = parseInt("{!R76846409#id}");
var allotted_weight = parseFloat("{!allotted_weight_#value}");
var total = parseFloat("{!R76846409.available_capacity#value}") - allotted_weight;
rbv_api.setFieldValue("bin1",bin_id,"available_capacity",total);