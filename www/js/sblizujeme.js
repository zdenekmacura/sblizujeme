
$(document).ready(function(){

	$("#profileForm").submit(function(e){    
        e.preventDefault();  
        $.post("http://localhost/process_form.php", $("#profileForm").serialize(),
        function(data){
            if(data.email_check == 'invalid'){
             
                $("#message_post").html("<div class='errorMessage'>Sorry " + data.email + " is NOT a valid e-mail address. Try again.</div>");
            } else {
                $("#message_post").html("<div class='successMessage'>" + data.email + " is a valid e-mail address. Thank you.</div>");
                }
        }, "json");    
    });


	$("#ShowCreateProfile").click(function(){
		if ($(".StepCreateProfile").css('height') == '0px' ) {
			$('.StepCreateProfile').animate({"height": "100%"}, 400);
			$('.StepsBackground').animate({"margin-left": "2%"}, 400);
			$('.StepsBackground').animate({"width": "96%"}, 400);
			$("#CreateProfile").fadeIn(1000);
		} else {

			/*$('.StepsBackground').animate({"width": "55%"}, 800);*/
			$('.StepsBackground').animate({"width": "55%"}, 400);
			$('.StepsBackground').css("margin-left","auto");
			$('.StepsBackground').animate({"margin-right": "2%"}, 400);
			$('.StepCreateProfile').animate({"height": "0px"}, 500);
			$("#CreateProfile").hide();

		}
    	//$("#CreateProfile").toggle(300);
    	
	});
	$("#form-registration-form-sex").change(function() {
		validateSex();
	});
	$("#emailLogin").focusout(function() {
    	verifyEmail();
    });

	$("#phoneNumber").keyup(function () {     
  	this.value = this.value.replace(/[^0-9\.]/g,'');
	});

	$("#nextPageProfile1").click(function() {
		validateSex();
		if (  (validatePassword() & validatePhoneNumber() & validateEmailNotNull() & validateSex() ) )  {
			//$("#profiletable1").animate({"margin-right": "100%"},400)
			//$("#profiletable1").animate({"width": "0"},400)
			//$("#profiletable1").fadeOut(500);
			//$("#profiletable1").hide('slide', {direction: 'left'}, 1000);
			$("#profiletable1").hide(1000);
			//$("#profiletable1").hide("slide", { direction: "up" }, 1000);

			//$('#profiletable1').animate({"height": "0px"}, 300);
			//$("#profiletable1").fadeOut(300);
			$("#profiletable2").fadeIn(2000);		//$("#profiletable2").fadeIn(500);

//			$('.StepsBackground').animate({"width": "55%"}, 400);
//			$('.StepsBackground').css("margin-left","auto");
//			$('.StepsBackground').animate({"margin-right": "2%"}, 400);
//			$('.StepCreateProfile').animate({"height": "0px"}, 500);
//			$("#CreateProfile").hide(500);
		} 
	});
});

function verifyEmail() {
	var emailValue =  $("#emailLogin").val();
	if (isEmpty(emailValue)) {
		 $("#email_error_message").text("Promiňte, ale nezadali jste žádný email, prosím vyplň svůj e-mail.");
    		$("#email_error_message").show(500);
	} else {
			var posting = $.post("http://localhost/process_form.php", { email_profile : emailValue }, function(data){
            	if(data.email_check == 'invalid'){
                	$("#email_error_message").text("Promiňte, ale váš " + data.email + " není platná emailová adresa, prosím překontrolujte.");
                	$("#email_error_message").show(500);
                } else {
                	$("#email_error_message").hide(500);
                }
        	}, "json");
	}
}

function isEmpty(str) {
  return (!str || 0 === str.length);
}

function validateSex() {
	var valuesex = $('select[name=sex]').val();
	if (!( (valuesex=='M') || (valuesex=='Z') )) {
		 $("#sex_error_message").text("Promiňte, ale vyberte jestli jste muž nebo žena..");
    	 $("#sex_error_message").show(500);
	} else {
		$("#sex_error_message").fadeOut(500);
		return true;
	} 

}

function validateEmailNotNull() {
	var emailValue =  $("#emailLogin").val();
	if (isEmpty(emailValue)) {
		 $("#email_error_message").text("Promiňte, ale nezadali jste žádný email, prosím vyplň svůj e-mail.");
    	 $("#email_error_message").show(500);
    	 return false;
	} else { 
       	$("#email_error_message").fadeOut(500);
		return true;}
}

function validatePassword() {

  var a=$("#form-registration-form-password").val();
  var b=$("#form-registration-form-password_checker").val();
  if(!(a==b))
  {
    $("#password_error_message").text("Omlouváme se, ale uvedené hesla se neshodují. Zkuste to znova.");
    $("#password_error_message").show(500);
    return false;
  } else {
  	$("#password_error_message").fadeOut(500);
  	if ( $("#form-registration-form-password").val() == "") {
  		 $("#password_error_message").text("Omlouváme se, ale není uvedeno žádné heslo.");
  		 $("#password_error_message").fadeIn(500);
    	 return false;
  	}
  	return true;
  }
}

function validatePhoneNumber() {
	if ($('#phoneNumber').val().length < 9) {    
    	$("#phone_error_message").text("Omlouváme se, ale telefonní číslo musí mít nejméně 9 číslic.");
    	$("#phone_error_message").show(500);
    	return false;
	} else {
		$("#phone_error_message").fadeOut(500);
		return true;
	}
}

