
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
			$('.StepCreateProfile').animate({"height": "100%"}, 800);
			$('.StepsBackground').animate({"width": "95%"}, 800);
			$("#CreateProfile").show();
		} else {
			$('.StepsBackground').animate({"width": "55%"}, 800);
			$('.StepCreateProfile').animate({"height": "0px"}, 500);
			$("#CreateProfile").toggle(100);
		}
    	//$("#CreateProfile").toggle(300);
    	
	});

	//$("#sendProfile").click(function(){
		//$("#result").html("vysledek");
	//var landmarkID = $(this).parent().attr('data-landmark-id');
	//var postData = $("#profileForm").serialize();
	
	//$.ajax({
		//type: 'POST',
	//	data: postData+'&amp;lid='+landmarkID,
		//data: postData,
		//url: 'http://www.zenyprotinasilnikum.cz/sblizujeme/sblizujeme.php',
		//url: 'http://localhost/sblizujeme.php',
		//success: function(data){
			//console.log(data);
			//$("#result").html(data);
			//alert('Action successful');
		//},
		//error: function(){
			//console.log(data);
			//alert('There was an error');
		//}
	//});

//});


	  //var iframe = document.createElement("iframe");

	//document.body.appendChild(iframe);
    //var uniqueString = "CHANGE_THIS_TO_SOME_UNIQUE_STRINGzfvdvdvrvervbtgsfb";
	//iframe.contentWindow.name = uniqueString;

	//$("#profileForm").submit(function(){
		//console.log("ahoj");
			//alert('Action successful');

//function crossDomainPost() {
  // Add the iframe with a unique name
  //var iframe = document.createElement("iframe");
  //var uniqueString = "CHANGE_THIS_TO_SOME_UNIQUE_STRINGzfvdvdvrvervbtgsfb";
  //document.body.appendChild(iframe);
  //iframe.style.display = "none";
  //iframe.contentWindow.name = uniqueString;

  // construct a form with hidden inputs, targeting the iframe
  //var form = document.createElement("form");
  //form.target = uniqueString;
  //form.action = "http://www.google.com";
  //form.method = "GET";

  // repeat for each parameter
  //var input = document.createElement("input");
  //input.type = "hidden";
  //input.name = "INSERT_YOUR_PARAMETER_NAME_HERE";
  //input.value = "INSERT_YOUR_PARAMETER_VALUE_HERE";
  //form.appendChild(input);

  //document.body.appendChild(form);
  //form.submit();

//});
});

