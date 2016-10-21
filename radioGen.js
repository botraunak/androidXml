var model = require('./forms/skin.json');


var radioStr = "";

// Form Creator Code 
var fields = model.fields;

for (i in fields){
	field_obj = fields[i];
	if (field_obj.type == "radio") {
		for (j in field_obj.options){
			optionObj = field_obj.options[j];
			radioStr += 'case R.id.'+optionObj.key+':\n';
			radioStr += '\t model.set'+ field_obj.key.charAt(0).toUpperCase() + field_obj.key.slice(1) + '("'+optionObj.text+'"); \n';
			radioStr += '\t break; \n';
		}
	}
}

console.log(radioStr);

