// Data Json
var form = require('./forms/skin.json');


var createEditText = function(field_obj){
var editText = '<LinearLayout \n \
            android:layout_width="match_parent" \n \
            android:layout_height="wrap_content" \n \
            android:orientation="vertical"> \n \
 \n \
            <TextView \n \
                android:layout_width="match_parent" \n \
                android:layout_height="wrap_content" \n \
                android:layout_marginBottom="5dp" \n \
                android:layout_marginLeft="@dimen/input_margin_hor" \n \
                android:layout_marginRight="@dimen/input_margin_hor" \n \
                android:layout_marginTop="@dimen/input_margin_hor" \n \
                android:hint="'+field_obj.hint+'" \n \
                android:textSize="@dimen/hint_hin_size" /> \n \
 \n \
            <EditText \n \
                android:id="@+id/'+field_obj.key+'" \n \
                android:layout_width="match_parent" \n \
                android:layout_height="wrap_content" \n \
                android:layout_marginLeft="@dimen/input_margin_hor" \n \
                android:layout_marginRight="@dimen/input_margin_hor" \n \
                android:layout_marginTop="5dp" \n \
                android:background="@color/white" \n \
                android:inputType="'+field_obj.input_type+'" \n \
                android:padding="@dimen/input_padding" \n \
                android:textSize="@dimen/hint_hin_size" /> \n \
 \n \
            <View \n \
                android:layout_width="match_parent" \n \
                android:layout_height="3dp" \n \
                android:layout_marginLeft="@dimen/input_margin_hor" \n \
                android:layout_marginRight="@dimen/input_margin_hor" \n \
                android:background="@color/colorPrimary" />\
                \n</LinearLayout>';

return editText;
}

var createRadioButton = function(field_obj){
	var radioBtn = '<LinearLayout \n \
            android:layout_width="match_parent" \n \
            android:layout_height="wrap_content" \n \
            android:orientation="vertical"> \n \
			\
			<TextView \n \
                android:layout_width="match_parent" \n \
                android:layout_height="wrap_content" \n \
                android:layout_marginBottom="5dp" \n \
                android:layout_marginLeft="@dimen/input_margin_hor" \n \
                android:layout_marginRight="@dimen/input_margin_hor" \n \
                android:layout_marginTop="@dimen/input_margin_hor" \n \
                android:hint="'+field_obj.hint+'" \n \
                android:textSize="@dimen/hint_hin_size" /> \n \
 \n \
            <RadioGroup xmlns:android="http://schemas.android.com/apk/res/android" \n \
                android:layout_width="fill_parent" \n \
                android:layout_height="wrap_content" \n \
                android:layout_marginLeft="@dimen/input_margin_hor" \n \
                android:layout_marginRight="@dimen/input_margin_hor" \n \
                android:layout_marginTop="5dp" \n \
                android:background="@color/white" \n \
                android:orientation="vertical"> \n \ ';

      var opts = field_obj.options;          
      for (i in opts){
      	var btn = '\n \
                <RadioButton \n \
                    android:id="@+id/'+opts[i].key+'" \n \
                    android:layout_width="match_parent" \n \
                    android:layout_height="wrap_content" \n \
                    android:onClick="onRadioButtonClicked" \n \
                    android:padding="15dp" \n \
                    android:text="'+opts[i].text+'" \n \
                    android:textSize="@dimen/hint_hin_size" /> \n \
 \n \
                <View \n \
                    android:layout_width="match_parent" \n \
                    android:layout_height="1dp" \n \
                    android:background="@android:color/darker_gray" /> \n \ ';
        radioBtn += btn;
      }

      var endText = '</RadioGroup> \n \
			\
            \n</LinearLayout>';

      return radioBtn + endText;
}






var createCheckbox = function(field_obj){
    var checkBox = '<LinearLayout \n \
            android:layout_width="match_parent" \n \
            android:layout_height="wrap_content" \n \
            android:layout_marginLeft="@dimen/input_margin_hor" \n \
            android:layout_marginRight="@dimen/input_margin_hor" \n \
            android:layout_marginTop="@dimen/input_margin_hor" \n \
            android:orientation="vertical"> \n \
            \
            <TextView \n \
                android:layout_width="match_parent" \n \
                android:layout_height="wrap_content" \n \
                android:layout_marginBottom="5dp" \n \
                android:hint="'+field_obj.hint+'" \n \
                android:textSize="@dimen/hint_hin_size" /> \n \
 \n \ ';

      var opts = field_obj.options;          
      for (i in opts){
        var btn = '\n \
                <CheckBox \n \
                    android:id="@+id/'+opts[i].key+'" \n \
                    android:layout_width="match_parent" \n \
                    android:layout_height="wrap_content" \n \
                    android:background="@color/white" \n \
                    android:padding="15dp" \n \
                    android:text="'+opts[i].text+'" \n \
                    android:textSize="@dimen/hint_hin_size" /> \n \
 \n \
                <View \n \
                    android:layout_width="match_parent" \n \
                    android:layout_height="1dp" \n \
                    android:background="@android:color/darker_gray" /> \n \ ';
        checkBox += btn;
      }

      var endText = '\n</LinearLayout>\n';

      return checkBox + endText;
}



var submitBtn = '<Button \n \
            android:id="@+id/submitbtn" \n \
            android:layout_width="match_parent" \n \
            android:layout_height="wrap_content"\n \
            android:layout_marginBottom="20dp"\n \
            android:layout_marginLeft="20dp"\n \
            android:layout_marginRight="20dp"\n \
            android:layout_marginTop="30dp"\n \
            android:background="@color/colorAccent"\n \
            android:onClick="onSubmit"\n \
            android:text="Save"\n \
            android:textColor="@color/white" />';



// Form Creator Code 
var fields = form.fields;

for (i in fields){
	field_obj = fields[i];
	switch(field_obj.type){
		case "edit_text":
			console.log(createEditText(field_obj));
			break;
		case "radio":
			console.log(createRadioButton(field_obj));
			break;
        case "checkbox":
            console.log(createCheckbox(field_obj));
            break;
	}

}

  console.log(submitBtn);