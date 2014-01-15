var ldf_id = parseInt("{!ldf_id}");
rbv_api.setFieldValue("$ORG_LOCN", ldf_id, "name", "{!name#text}");
rbv_api.setFieldValue("$ORG_LOCN", ldf_id, "state", "{{!state#code}");
rbv_api.setFieldValue("$ORG_LOCN", ldf_id, "city", "{!city#value}");
rbv_api.setFieldValue("$ORG_LOCN", ldf_id, "country", "{!country#code}");
rbv_api.setFieldValue("$ORG_LOCN", ldf_id, "streetAddr1", "{!streetAddr1}");
rbv_api.setFieldValue("$ORG_LOCN", ldf_id, "streetAddr2", "{!streetAddr2}");