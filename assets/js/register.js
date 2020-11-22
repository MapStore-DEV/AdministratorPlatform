function register( email_input, username_input, password_input)
{

	var email_data = $("#"+email_input).val();
	var username_input = $("#"+username_input).val();
	var pass_data = $("#"+password_input).val();
	var splitter = ";;";

	$.ajax({

		url: 'https://mapstore.tech/api/api.php',
		type: 'POST',
		data: {
			q:"FgKMSYVTqAG850PeSABs",
			p:username_input+splitter+pass_data+splitter+email_data
		},
		dataType: 'text', 
		cache:false,
		success: function (data) {
			
			//alert(data);
			if(data == "username_already_exists")
			{
				alert("The username you entered already exists in the database!");
			}
			else if(data == "account_created_successfully") //successful register
			{
				//create cookie
				alert("User created successfully");
				//window.location.replace( "index.html" );
			}

		}
	});

}