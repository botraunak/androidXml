var model = require('./forms/skin.json');


var editStr = "";

// Form Creator Code 
var fields = model.fields;

for (i in fields){
	field_obj = fields[i];
	if (field_obj.type == "edit_text") {
			editStr += '@Bind(R.id.'+field_obj.key+') \n';
    		editStr += 'protected EditText '+field_obj.key+'; \n \n';
	}
}

console.log(editStr);

editStr = "";

for (i in fields){
	field_obj = fields[i];
	if (field_obj.type == "edit_text") {
		editStr += "model.set"+ field_obj.key.charAt(0).toUpperCase() + field_obj.key.slice(1) + '('+field_obj.key+'.getText().toString()); \n';
	}
}


console.log(editStr);

