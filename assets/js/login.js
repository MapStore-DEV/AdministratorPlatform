
function login( username_input, password_input )
{

	var email_data = $("#"+username_input).val();
	var pass_data = $("#"+password_input).val();
	var splitter = ";;";

	//alert(email_data+" "+pass_data);

	$.ajax({

		url: 'https://mapstore.tech/api/api.php',
		type: 'POST',
		data: {
			q:"XfPO7bazdWnNG9jrVEZW",
			p:email_data+splitter+pass_data
		},
		dataType: 'text', 
		cache:false,
		success: function (data) {
			
			//alert(data);
			if(data == "user_not_found")
			{
				alert("The username you entered was not found in the database!");
			}
			else if(data == "login_wrong_password")
			{
				alert("The password provided for this username is not correct!");
			}
			else //successful login
			{
				//create cookie

				window.location.replace( "index.html" );
			}

		}
	});

}

//login( "login_email","login_password" );