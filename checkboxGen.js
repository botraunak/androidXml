var model = require('./forms/skin.json');


var checkBoxStr = "";

// Form Creator Code 
var fields = model.fields;

for (i in fields){
	field_obj = fields[i];
	if (field_obj.type == "checkbox") {
		for(j in field_obj.options){
			n_obj = field_obj.options[j];
			checkBoxStr += '@Bind(R.id.'+n_obj.key+') \n';
    		checkBoxStr += 'protected CheckBox '+n_obj.key+'; \n \n';

		}
	}
}

console.log(checkBoxStr);

checkBoxStr = "";


for( i in fields){
	field_obj = fields[i];
	if(field_obj.type == "checkbox"){
		checkBoxStr += 'public void get_'+field_obj.key+'() { \n';
		checkBoxStr += '\t \t ArrayList<String> checkedboxes = new ArrayList<>(); \n';

		for(j in field_obj.options){
			var optionsObj = field_obj.options[j];
			checkBoxStr += '\t \tif ('+optionsObj.key+'.isChecked()) \n';
			checkBoxStr += '\t \tcheckedboxes.add("'+optionsObj.text+'");\n';
		}

		checkBoxStr += '\t \t model.set'+field_obj.key.charAt(0).toUpperCase() + field_obj.key.slice(1) + '(checkedboxes.toString()); \n';

		checkBoxStr += '}';
	}
}

console.log(checkBoxStr);



checkBoxStr = "\n\n\n";
for (i in fields){
	field_obj = fields[i];
	if(field_obj.type == "checkbox"){
		checkBoxStr += "get_"+field_obj.key+'(); \n';
	}
}

console.log(checkBoxStr);