var model = require('./forms/skin.json');
var modelStr = "";

// Form Creator Code 
var fields = model.fields;

for (i in fields){
	field_obj = fields[i];
	
	modelStr += 'String '+field_obj.key+' = "" ;\n';
}

console.log(modelStr);

